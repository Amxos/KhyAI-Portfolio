"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm text-white/80 sr-only">Name</label>
        <Input
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-required="true"
          className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-blue-500 focus-visible"
          aria-label="Your name"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm text-white/80 sr-only">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
          className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-blue-500 focus-visible"
          aria-label="Your email address"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="message" className="text-sm text-white/80 sr-only">Message</label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-blue-500 focus-visible"
          aria-label="Your message"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 transition-all duration-300 focus-visible"
        aria-label={isSubmitting ? "Sending message..." : "Send message"}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            <span>Sending...</span>
          </>
        ) : (
          "Send Message"
        )}
      </Button>
      <div aria-live="polite" className="sr-only">
        {isSubmitting && "Sending your message..."}
      </div>
    </form>
  )
}

