"use client"

import { useEffect, useRef, useState } from "react"

import { useIsMobile } from "@/hooks/use-mobile"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number>()
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    const handleReducedMotionChange = () => setIsReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleReducedMotionChange)

    return () => mediaQuery.removeEventListener('change', handleReducedMotionChange)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Skip animation for reduced motion or create static version
    if (isReducedMotion) {
      drawStaticBackground(canvas, ctx)
      return
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles.current = []
      // Reduce particle count on mobile
      const particleCount = isMobile
        ? Math.min(Math.floor(window.innerWidth / 30), 30)
        : Math.min(Math.floor(window.innerWidth / 15), 80)

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5, // Slightly smaller particles
          speedX: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5), // Slower on mobile
          speedY: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5), // Slower on mobile
          color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(
            Math.random() * 100 + 100,
          )}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.4 + 0.1})`,
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle) => {
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }
      })

      // Draw connections - skip on mobile for better performance
      if (!isMobile) {
        drawConnections()
      }

      animationFrameId.current = requestAnimationFrame(drawParticles)
    }

    const drawConnections = () => {
      // Reduce max distance on smaller screens
      const maxDistance = isMobile ? 100 : 150

      // Limit the number of connections we check to improve performance
      const particleLimit = Math.min(particles.current.length, isMobile ? 15 : 50)

      for (let i = 0; i < particleLimit; i++) {
        for (let j = i + 1; j < particleLimit; j++) {
          const dx = particles.current[i].x - particles.current[j].x
          const dy = particles.current[i].y - particles.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 100, 255, ${0.15 * (1 - distance / maxDistance)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles.current[i].x, particles.current[i].y)
            ctx.lineTo(particles.current[j].x, particles.current[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // For users with reduced motion preference
    const drawStaticBackground = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const particleCount = isMobile ? 20 : 40
      const staticParticles = []

      for (let i = 0; i < particleCount; i++) {
        staticParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(
            Math.random() * 100 + 100,
          )}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.4 + 0.1})`,
        })
      }

      // Draw static particles
      staticParticles.forEach((particle) => {
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw some static connections
      if (!isMobile) {
        const maxDistance = 150

        for (let i = 0; i < staticParticles.length; i++) {
          for (let j = i + 1; j < staticParticles.length; j++) {
            const dx = staticParticles[i].x - staticParticles[j].x
            const dy = staticParticles[i].y - staticParticles[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < maxDistance) {
              ctx.beginPath()
              ctx.strokeStyle = `rgba(100, 100, 255, ${0.15 * (1 - distance / maxDistance)})`
              ctx.lineWidth = 0.5
              ctx.moveTo(staticParticles[i].x, staticParticles[i].y)
              ctx.lineTo(staticParticles[j].x, staticParticles[j].y)
              ctx.stroke()
            }
          }
        }
      }

      // Handle window resize for static version
      const handleResize = () => drawStaticBackground(canvas, ctx)
      window.addEventListener("resize", handleResize)

      return () => window.removeEventListener("resize", handleResize)
    }

    if (!isReducedMotion) {
      resizeCanvas()
      drawParticles()

      window.addEventListener("resize", resizeCanvas)

      return () => {
        window.removeEventListener("resize", resizeCanvas)
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current)
        }
      }
    }
  }, [isMobile, isReducedMotion])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" style={{ opacity: 0.3 }} />
}

