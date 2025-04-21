"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useColorContrast } from "@/hooks/use-color-contrast"

// Define the theme colors
export type ThemeColors = {
  primary: string
  secondary: string
  background: string
  text: string
  accent: string
}

// Define the default theme
const defaultTheme: ThemeColors = {
  primary: "#3B82F6", // blue-500
  secondary: "#8B5CF6", // purple-500
  background: "#000000", // black
  text: "#FFFFFF", // white
  accent: "#10B981", // emerald-500
}

// Define high contrast theme
const highContrastTheme: ThemeColors = {
  primary: "#2563EB", // blue-600
  secondary: "#7C3AED", // purple-600
  background: "#000000", // black
  text: "#FFFFFF", // white
  accent: "#059669", // emerald-600
}

// Define the context
type ThemeContextType = {
  colors: ThemeColors
  setTheme: (theme: "default" | "highContrast" | "custom") => void
  setCustomColors: (colors: Partial<ThemeColors>) => void
  isHighContrast: boolean
  toggleHighContrast: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function AccessibleThemeProvider({ children }: { children: any }) {
  const [colors, setColors] = useState<ThemeColors>(defaultTheme)
  const [isHighContrast, setIsHighContrast] = useState(false)

  // Check if the text and background colors meet WCAG AA standards
  const { meetsAA } = useColorContrast(colors.text, colors.background)

  // Apply theme to CSS variables
  useEffect(() => {
    const root = document.documentElement

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value)
    })
  }, [colors])

  // Check for user preference for reduced motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsHighContrast(true)
      setColors(highContrastTheme)
    }
  }, [])

  // Check for user preference for high contrast
  useEffect(() => {
    const prefersHighContrast = window.matchMedia("(prefers-contrast: more)").matches
    if (prefersHighContrast) {
      setIsHighContrast(true)
      setColors(highContrastTheme)
    }
  }, [])

  // If contrast doesn't meet AA standards, switch to high contrast theme
  useEffect(() => {
    if (!meetsAA) {
      setColors(highContrastTheme)
      setIsHighContrast(true)
    }
  }, [meetsAA])

  const setTheme = (theme: "default" | "highContrast" | "custom") => {
    if (theme === "default") {
      setColors(defaultTheme)
      setIsHighContrast(false)
    } else if (theme === "highContrast") {
      setColors(highContrastTheme)
      setIsHighContrast(true)
    }
  }

  const setCustomColors = (customColors: Partial<ThemeColors>) => {
    setColors((prev) => ({ ...prev, ...customColors }))
  }

  const toggleHighContrast = () => {
    if (isHighContrast) {
      setColors(defaultTheme)
      setIsHighContrast(false)
    } else {
      setColors(highContrastTheme)
      setIsHighContrast(true)
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        colors,
        setTheme,
        setCustomColors,
        isHighContrast,
        toggleHighContrast,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useAccessibleTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useAccessibleTheme must be used within an AccessibleThemeProvider")
  }
  return context
}
