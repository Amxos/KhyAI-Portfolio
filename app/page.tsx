"use client"

import { useEffect, useState, lazy, Suspense } from "react"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import dynamic from "next/dynamic"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TypingEffect } from "@/components/typing-effect"
import { ParticleBackground } from "@/components/particle-background"
import { SkillBar } from "@/components/skill-bar"
import { MobileMenu } from "@/components/mobile-menu"
import { useToast } from "@/hooks/use-toast"
import { PersonJsonLd, PortfolioJsonLd } from "@/components/json-ld"
import { JourneyTimeline } from "@/components/journey-timeline"
import { projects } from "@/data/projects"
import { journeyEvents } from "@/data/journey"
import { skillCategories } from "@/data/skills"
import { ProjectDetails } from "@/types/project"

// Dynamically import non-critical components
const ContactForm = dynamic(() => import("@/components/contact-form").then(mod => mod.ContactForm), {
  loading: () => <div className="min-h-[300px] flex items-center justify-center"><p className="text-white/50">Loading contact form...</p></div>,
  ssr: false
})

const TerminalExperience = dynamic(() => import("@/components/terminal-experience").then(mod => mod.TerminalExperience), {
  loading: () => <div className="min-h-[300px] flex items-center justify-center"><p className="text-white/50">Loading terminal...</p></div>,
  ssr: false
})

const ThemeCustomizer = dynamic(() => import("@/components/theme-customizer").then(mod => mod.ThemeCustomizer), {
  ssr: false
})

const ProjectModal = dynamic(() => import("@/components/project-modal").then(mod => mod.ProjectModal), {
  ssr: false
})

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [typingComplete, setTypingComplete] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    // Set CSS variables for theme customization
    document.documentElement.style.setProperty("--theme-from", "blue-600")
    document.documentElement.style.setProperty("--theme-to", "purple-600")
    document.documentElement.style.setProperty("--theme-intensity", "50%")

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  // Projects are now imported from data/projects.ts

  const openProjectModal = (project: ProjectDetails) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* Add structured data for SEO */}
      <PersonJsonLd />
      <PortfolioJsonLd />
      {/* Cursor spotlight effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Particle background */}
      <ParticleBackground />

      {/* Background grid effect */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl" role="banner">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 focus-visible rounded-md"
              aria-label="KhyAI - Back to top"
            >
              KhyAI
            </a>
          </div>
          <nav className="hidden md:flex gap-6" aria-label="Main navigation">
            <Link
              href="#about"
              className="text-sm font-medium text-white/70 hover:text-white focus:text-white focus-visible rounded-md px-2 py-1 transition-colors"
              aria-label="About section"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium text-white/70 hover:text-white focus:text-white focus-visible rounded-md px-2 py-1 transition-colors"
              aria-label="Skills section"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-white/70 hover:text-white focus:text-white focus-visible rounded-md px-2 py-1 transition-colors"
              aria-label="Projects section"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-white/70 hover:text-white focus:text-white focus-visible rounded-md px-2 py-1 transition-colors"
              aria-label="Contact section"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <MobileMenu />
          </div>
        </div>
      </header>

      <main id="main-content" className="flex-1" tabIndex={-1}>
        <section className="w-full py-24 md:py-32 lg:py-40 relative overflow-hidden" aria-labelledby="hero-heading" role="region">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 id="hero-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <TypingEffect
                      text="Advancing AI Solutions for Tomorrow"
                      speed={40}
                      className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500"
                      onComplete={() => setTypingComplete(true)}
                    />
                  </h1>
                  <p
                    className={`max-w-[600px] text-white/70 md:text-xl transition-opacity duration-1000 ${typingComplete ? "opacity-100" : "opacity-0"}`}
                  >
                    I build intelligent systems that transform how businesses operate and innovate.
                  </p>
                </div>
                <div
                  className={`flex flex-col gap-2 min-[400px]:flex-row transition-opacity duration-1000 ${typingComplete ? "opacity-100" : "opacity-0"}`}
                >
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 transition-all duration-300">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                  {/* Futuristic 3D-like element instead of simple circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                      {/* Animated rings */}
                      <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-[spin_20s_linear_infinite]"></div>
                      <div className="absolute inset-4 rounded-full border border-purple-500/40 animate-[spin_15s_linear_infinite_reverse]"></div>
                      <div className="absolute inset-8 rounded-full border border-blue-400/50 animate-[spin_10s_linear_infinite]"></div>

                      {/* Glowing core */}
                      <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-xl"></div>
                        <div className="relative z-10 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                          KhyAI
                        </div>
                      </div>

                      {/* Floating particles */}
                      <div className="absolute top-1/4 right-0 w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
                      <div className="absolute bottom-1/4 left-0 w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                      <div className="absolute top-0 left-1/3 w-2 h-2 rounded-full bg-blue-300 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 relative" aria-labelledby="about-heading" role="region">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-950/20"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <div className="inline-block">
                  <h2 id="about-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    About KhyAI
                  </h2>
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                </div>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm the sole innovator behind KhyAI, at the forefront of artificial intelligence development. I
                  combine deep technical expertise with a passion for solving complex problems through intelligent
                  systems, creating cutting-edge solutions that empower businesses to achieve more.
                </p>
              </div>

              <div className="w-full max-w-4xl mx-auto mt-8">
                <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  My Journey
                </h3>
                <JourneyTimeline events={journeyEvents} className="text-left" />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 relative" aria-labelledby="skills-heading" role="region">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-purple-950/20"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block">
                  <h2 id="skills-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    My Skills
                  </h2>
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                </div>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I bring a diverse set of technical and soft skills to every project I undertake, combining deep expertise in AI with full-stack development capabilities.
                </p>
                <p className="max-w-[900px] text-white/70 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-2">
                  My approach integrates cutting-edge AI techniques with practical software engineering, allowing me to create solutions that are not only technically sophisticated but also user-friendly and business-focused.
                </p>
              </div>

              {/* Skill bars section */}
              <div className="w-full max-w-3xl mx-auto mt-8">
                {skillCategories.flatMap(category =>
                  category.skills
                    .filter(skill => skill.level !== undefined)
                    .map((skill, index) => {
                      const colors = [
                        "from-blue-500 to-blue-400",
                        "from-blue-400 to-purple-500",
                        "from-purple-400 to-pink-500",
                        "from-green-500 to-blue-500",
                        "from-purple-500 to-pink-500",
                        "from-orange-500 to-red-500"
                      ];
                      return (
                        <SkillBar
                          key={skill.name}
                          skill={skill.name}
                          level={skill.level || 0}
                          color={colors[index % colors.length]}
                        />
                      );
                    })
                )}
              </div>

              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                {skillCategories.map((category) => (
                  <SkillCard key={category.title} category={category} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 relative" aria-labelledby="projects-heading" role="region">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-blue-950/20"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block">
                  <h2 id="projects-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    My Projects
                  </h2>
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                </div>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore my portfolio of innovative AI solutions and applications, each designed to solve real-world problems.
                </p>
                <p className="max-w-[900px] text-white/70 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-2">
                  Each project represents a journey from problem identification to solution implementation. Click on any project to discover the story behind it, the challenges faced, and the outcomes achieved.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <div key={project.id} onClick={() => openProjectModal(project)} className="cursor-pointer">
                    <ProjectCard title={project.title} description={project.description} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {selectedProject && (
            <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={closeProjectModal} />
          )}
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative" aria-labelledby="contact-heading" role="region">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block">
                  <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Get in Touch
                  </h2>
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                </div>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Interested in working with me? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <p className="max-w-[900px] text-white/70 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-2">
                  Whether you have a question about AI implementation, need help with a specific challenge, or just want to connect, I'm here to help. Let's create something amazing together.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mt-8">
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-blue-400" />
                        <span className="text-white/80">contact@khyai.com</span>
                      </div>
                      <div className="flex items-center">
                        <Linkedin className="h-5 w-5 mr-3 text-blue-400" />
                        <span className="text-white/80">linkedin.com/in/khyai</span>
                      </div>
                      <div className="flex items-center">
                        <Github className="h-5 w-5 mr-3 text-blue-400" />
                        <span className="text-white/80">github.com/khyai</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                    >
                      <Mail className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
                      <span className="sr-only">Email</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                    >
                      <Linkedin className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                    >
                      <Github className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Send a Message
                  </h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-white/10 py-6 md:py-0 relative z-10 bg-black/50 backdrop-blur-sm">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-sm text-white/50">© 2025 KhyAI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium text-white/50 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>

      {/* Terminal Experience */}
      <TerminalExperience />

      {/* Theme Customizer */}
      <ThemeCustomizer />
    </div>
  )
}

function SkillCard({ category }: { category: { title: string; description: string; skills: { name: string; description?: string }[] } }) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <CardHeader>
        <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          {category.title}
        </CardTitle>
        <CardDescription className="text-white/70">
          {category.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {category.skills.map((skill) => (
            <Badge
              key={skill.name}
              variant="secondary"
              className="bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
              title={skill.description}
            >
              {skill.name}
            </Badge>
          ))}
        </div>
        <div className="text-sm text-white/60 mt-2">
          <p>Hover over each skill to learn more</p>
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="overflow-hidden bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="h-40 bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 z-10">
          {title}
        </span>
      </div>
      <CardHeader>
        <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          {title}
        </CardTitle>
        <CardDescription className="text-white/70">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          size="sm"
          className="w-full border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:text-blue-400 transition-colors" />
        </Button>
      </CardContent>
    </Card>
  )
}

