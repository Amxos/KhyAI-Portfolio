"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Maximize2, Minimize2, X } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

interface CommandResult {
  type: "text" | "code" | "error" | "link" | "list"
  content: string | string[]
}

export function TerminalExperience() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const isMobile = useIsMobile()
  const [output, setOutput] = useState<Array<{ command: string; result: CommandResult[] }>>([
    {
      command: "welcome",
      result: [
        {
          type: "text",
          content: "👋 Welcome to KhyAI Terminal! Type 'help' to see available commands.",
        },
      ],
    },
  ])

  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands: Record<string, () => CommandResult[]> = {
    help: () => [
      {
        type: "text",
        content: "Available commands:",
      },
      {
        type: "list",
        content: [
          "about - Learn about KhyAI",
          "skills - View my technical skills",
          "projects - List my projects",
          "contact - Get my contact information",
          "clear - Clear the terminal",
          "exit - Close the terminal",
          "theme [dark/cyberpunk/neon] - Change the terminal theme",
        ],
      },
    ],
    about: () => [
      {
        type: "text",
        content:
          "I'm the sole innovator behind KhyAI, at the forefront of artificial intelligence development. I combine deep technical expertise with a passion for solving complex problems through intelligent systems, creating cutting-edge solutions that empower businesses to achieve more.",
      },
    ],
    skills: () => [
      {
        type: "text",
        content: "Technical Skills:",
      },
      {
        type: "list",
        content: [
          "Python (70%)",
          "TypeScript (85%)",
          "React (90%)",
          "Supabase (85%)",
          "Machine Learning (92%)",
          "UI/UX Design (88%)",
        ],
      },
    ],
    projects: () => [
      {
        type: "text",
        content: "My Projects:",
      },
      {
        type: "list",
        content: [
          "PIA (Partially Integrated Autonomy) - Advanced agent framework",
          "APIA - Enhanced version of PIA with optimizations",
          "Onyx - CRM App with AI insights and dynamic charts",
          "Business Landing Pages - Collection of custom designs",
          "AI Research Platform - For conducting and sharing research",
          "Data Visualization Tools - For complex data visualization",
        ],
      },
      {
        type: "text",
        content: "Type 'project [name]' to learn more about a specific project.",
      },
    ],
    contact: () => [
      {
        type: "text",
        content: "Contact Information:",
      },
      {
        type: "list",
        content: ["Email: contact@khyai.com", "LinkedIn: linkedin.com/in/khyai", "GitHub: github.com/khyai"],
      },
    ],
    clear: () => {
      setOutput([])
      return []
    },
    theme: () => [
      {
        type: "text",
        content: "Theme changed successfully!",
      },
    ],
    project: () => [
      {
        type: "text",
        content: "PIA (Partially Integrated Autonomy):",
      },
      {
        type: "text",
        content:
          "An advanced agent framework designed to enable partial autonomy in complex systems. It leverages cutting-edge AI techniques to create intelligent agents that can operate with minimal human intervention.",
      },
      {
        type: "text",
        content: "Technologies: Python, TensorFlow, Docker, Kubernetes, Redis",
      },
    ],
    whoami: () => [
      {
        type: "text",
        content: "visitor@khyai-portfolio:~$",
      },
    ],
    date: () => [
      {
        type: "text",
        content: new Date().toLocaleString(),
      },
    ],
    echo: () => [
      {
        type: "text",
        content: input.substring(5),
      },
    ],
    hello: () => [
      {
        type: "text",
        content: "Hello there! How can I assist you today?",
      },
    ],
  }

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [output])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const fullCommand = input.trim()
    const commandName = fullCommand.split(" ")[0].toLowerCase()

    let result: CommandResult[] = []

    if (commandName === "exit") {
      setIsOpen(false)
      setInput("")
      return
    }

    if (commands[commandName]) {
      result = commands[commandName]()
    } else {
      result = [
        {
          type: "error",
          content: `Command not found: ${commandName}. Type 'help' to see available commands.`,
        },
      ]
    }

    setOutput([...output, { command: fullCommand, result }])
    setCommandHistory([fullCommand, ...commandHistory])
    setHistoryIndex(-1)
    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      } else {
        setHistoryIndex(-1)
        setInput("")
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      // Simple tab completion
      const commandStart = input.toLowerCase()
      const possibilities = Object.keys(commands).filter((cmd) => cmd.startsWith(commandStart))

      if (possibilities.length === 1) {
        setInput(possibilities[0] + " ")
      }
    }
  }

  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Scroll to bottom when new output is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [output])

  // Handle escape key to close terminal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  // Prevent scrolling when terminal is open on mobile
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, isMobile])

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 transition-all duration-300 shadow-lg focus-visible"
        aria-label="Open terminal experience"
      >
        <span className="mr-2 hidden sm:inline">Terminal</span>
        <span className="sm:hidden">CMD</span>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div
            className={`w-full ${isFullscreen ? 'fixed inset-0 rounded-none' : 'max-w-3xl h-[70vh] md:h-[80vh] rounded-lg'} bg-black border border-white/20 shadow-2xl overflow-hidden flex flex-col transition-all duration-300`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="terminal-title"
          >
            <div className="flex items-center justify-between px-4 py-2 bg-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" aria-hidden="true"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true"></div>
                <div className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true"></div>
              </div>
              <div id="terminal-title" className="text-white/70 text-sm">KhyAI Terminal</div>
              <div className="flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10 focus-visible"
                  onClick={toggleFullscreen}
                  aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                >
                  {isFullscreen ? (
                    <Minimize2 className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10 focus-visible"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close terminal"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div
              ref={terminalRef}
              className="flex-1 p-4 overflow-y-auto font-mono text-sm bg-black text-green-400"
              aria-live="polite"
              aria-atomic="false"
              aria-relevant="additions"
              role="log"
            >
              {output.map((item, i) => (
                <div key={i} className="mb-2">
                  <div className="flex">
                    <span className="text-blue-400 hidden sm:inline">visitor@khyai:~$</span>
                    <span className="text-blue-400 sm:hidden">$</span>
                    <span className="ml-2">{item.command}</span>
                  </div>
                  <div className="ml-2 mt-1">
                    {item.result.map((res, j) => (
                      <div key={j} className="mb-1">
                        {res.type === "text" && <div>{res.content as string}</div>}
                        {res.type === "error" && <div className="text-red-400" role="alert">{res.content as string}</div>}
                        {res.type === "code" && (
                          <pre className="bg-white/5 p-2 rounded overflow-x-auto text-xs sm:text-sm">{res.content as string}</pre>
                        )}
                        {res.type === "list" && (
                          <ul className="list-disc list-inside text-xs sm:text-sm">
                            {(res.content as string[]).map((item, k) => (
                              <li key={k} className="ml-2 mb-1">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        {res.type === "link" && (
                          <a
                            href={res.content as string}
                            className="text-blue-400 underline hover:text-blue-300 focus:text-blue-300 focus-visible rounded px-1 py-0.5"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {res.content as string}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-2 border-t border-white/20 bg-black">
              <div className="flex items-center">
                <span className="text-blue-400 mr-2 font-mono hidden sm:inline">visitor@khyai:~$</span>
                <span className="text-blue-400 mr-2 font-mono sm:hidden">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono focus:ring-1 focus:ring-blue-500 px-1 py-0.5 rounded"
                  autoComplete="off"
                  spellCheck="false"
                  aria-label="Terminal input"
                  placeholder={isMobile ? "Type a command..." : ""}
                />
                {isMobile && (
                  <Button
                    type="submit"
                    size="sm"
                    className="ml-2 bg-blue-600 hover:bg-blue-700 text-white focus-visible"
                    aria-label="Execute command"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

