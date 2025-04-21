"use client"

import { useState, useEffect } from "react"

// Function to convert hex color to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  // Remove # if present
  hex = hex.replace(/^#/, '')
  
  // Parse as RGB
  if (hex.length === 3) {
    // Convert 3-digit hex to 6-digit
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  
  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

// Function to calculate relative luminance
function getLuminance(rgb: { r: number; g: number; b: number }): number {
  const { r, g, b } = rgb
  
  // Convert RGB to sRGB
  const sR = r / 255
  const sG = g / 255
  const sB = b / 255
  
  // Calculate luminance
  const R = sR <= 0.03928 ? sR / 12.92 : Math.pow((sR + 0.055) / 1.055, 2.4)
  const G = sG <= 0.03928 ? sG / 12.92 : Math.pow((sG + 0.055) / 1.055, 2.4)
  const B = sB <= 0.03928 ? sB / 12.92 : Math.pow((sB + 0.055) / 1.055, 2.4)
  
  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}

// Function to calculate contrast ratio
function getContrastRatio(luminance1: number, luminance2: number): number {
  const lighter = Math.max(luminance1, luminance2)
  const darker = Math.min(luminance1, luminance2)
  return (lighter + 0.05) / (darker + 0.05)
}

// Hook to check if a color combination meets WCAG contrast standards
export function useColorContrast(
  foregroundColor: string,
  backgroundColor: string
): {
  contrastRatio: number;
  meetsAA: boolean;
  meetsAAA: boolean;
} {
  const [contrast, setContrast] = useState({
    contrastRatio: 0,
    meetsAA: false,
    meetsAAA: false,
  })

  useEffect(() => {
    const fgRgb = hexToRgb(foregroundColor)
    const bgRgb = hexToRgb(backgroundColor)

    if (fgRgb && bgRgb) {
      const fgLuminance = getLuminance(fgRgb)
      const bgLuminance = getLuminance(bgRgb)
      const ratio = getContrastRatio(fgLuminance, bgLuminance)

      setContrast({
        contrastRatio: ratio,
        meetsAA: ratio >= 4.5,
        meetsAAA: ratio >= 7,
      })
    }
  }, [foregroundColor, backgroundColor])

  return contrast
}
