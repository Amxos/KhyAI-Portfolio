"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import Link from "next/link"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  // Handle escape key press to close the menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white/70 hover:text-white hover:bg-white/10 focus-visible"
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] bg-black/95 border-white/10 text-white"
        role="dialog"
        aria-label="Navigation menu"
      >
        <SheetHeader className="flex items-center justify-between">
          <SheetTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            KhyAI
          </SheetTitle>
          <SheetClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 hover:text-white hover:bg-white/10 focus-visible"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </SheetClose>
        </SheetHeader>
        <nav id="mobile-navigation" className="flex flex-col gap-4 mt-8" aria-label="Mobile navigation">
          <Link
            href="#about"
            className="text-lg font-medium text-white/70 hover:text-white focus:text-white focus-visible py-2 border-b border-white/10 transition-colors"
            onClick={handleLinkClick}
            aria-label="About section"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-lg font-medium text-white/70 hover:text-white focus:text-white focus-visible py-2 border-b border-white/10 transition-colors"
            onClick={handleLinkClick}
            aria-label="Skills section"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-lg font-medium text-white/70 hover:text-white focus:text-white focus-visible py-2 border-b border-white/10 transition-colors"
            onClick={handleLinkClick}
            aria-label="Projects section"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium text-white/70 hover:text-white focus:text-white focus-visible py-2 border-b border-white/10 transition-colors"
            onClick={handleLinkClick}
            aria-label="Contact section"
          >
            Contact
          </Link>
        </nav>
        <div className="absolute bottom-6 left-6 right-6">
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 transition-all duration-300 focus-visible"
            aria-label="Download resume"
          >
            Download Resume
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

