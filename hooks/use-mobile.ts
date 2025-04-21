"use client"

import { useState, useEffect } from "react"

export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Set initial value
    setIsMobile(window.innerWidth < breakpoint)

    // Add event listener
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Listen for window resize events
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [breakpoint])

  return isMobile
}
