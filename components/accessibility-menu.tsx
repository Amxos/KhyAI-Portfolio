"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Accessibility, X, ZoomIn, ZoomOut, Sun, Moon, Type } from "lucide-react"
import { useAccessibleTheme } from "./accessible-theme-provider"

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const { isHighContrast, toggleHighContrast } = useAccessibleTheme()

  // Function to increase font size
  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10
      setFontSize(newSize)
      document.documentElement.style.fontSize = `${newSize}%`
    }
  }

  // Function to decrease font size
  const decreaseFontSize = () => {
    if (fontSize > 80) {
      const newSize = fontSize - 10
      setFontSize(newSize)
      document.documentElement.style.fontSize = `${newSize}%`
    }
  }

  // Function to reset font size
  const resetFontSize = () => {
    setFontSize(100)
    document.documentElement.style.fontSize = "100%"
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 bg-white/10 hover:bg-white/20 text-white border-0 transition-all duration-300 shadow-lg focus-visible"
        aria-label="Open accessibility menu"
        title="Accessibility options"
      >
        <Accessibility className="h-5 w-5" aria-hidden="true" />
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="a11y-menu-title"
        >
          <div className="w-full max-w-md bg-black border border-white/20 rounded-lg shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-white/10">
              <h2 id="a11y-menu-title" className="text-lg font-medium text-white">
                Accessibility Options
              </h2>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:text-white hover:bg-white/10 focus-visible"
                onClick={() => setIsOpen(false)}
                aria-label="Close accessibility menu"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-white/80">Text Size</h3>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-white/20 bg-white/5 hover:bg-white/10 text-white focus-visible"
                    onClick={decreaseFontSize}
                    disabled={fontSize <= 80}
                    aria-label="Decrease text size"
                  >
                    <ZoomOut className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <div className="flex-1 text-center text-sm text-white/70">
                    {fontSize}%
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-white/20 bg-white/5 hover:bg-white/10 text-white focus-visible"
                    onClick={increaseFontSize}
                    disabled={fontSize >= 150}
                    aria-label="Increase text size"
                  >
                    <ZoomIn className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-white/20 bg-white/5 hover:bg-white/10 text-white focus-visible"
                  onClick={resetFontSize}
                  aria-label="Reset text size"
                >
                  Reset to Default
                </Button>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-white/80">Contrast</h3>
                <Button
                  variant={isHighContrast ? "default" : "outline"}
                  className={`w-full ${
                    isHighContrast
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border-white/20 bg-white/5 hover:bg-white/10 text-white"
                  } focus-visible`}
                  onClick={toggleHighContrast}
                  aria-pressed={isHighContrast}
                >
                  {isHighContrast ? "High Contrast (On)" : "High Contrast (Off)"}
                </Button>
              </div>

              <div className="pt-2 border-t border-white/10">
                <p className="text-xs text-white/60">
                  These settings will be saved for your next visit. You can also use keyboard shortcuts:
                  <br />
                  • Ctrl/Cmd + Plus: Increase text size
                  <br />
                  • Ctrl/Cmd + Minus: Decrease text size
                  <br />
                  • Ctrl/Cmd + 0: Reset text size
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
