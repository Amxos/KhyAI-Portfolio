"use client"

import { useState } from "react"
import { Paintbrush, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface ThemeColor {
  name: string
  from: string
  to: string
  label: string
}

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState(0)
  const [intensity, setIntensity] = useState(50)

  const themes: ThemeColor[] = [
    { name: "blue-purple", from: "from-blue-600", to: "to-purple-600", label: "Cosmic" },
    { name: "cyan-blue", from: "from-cyan-500", to: "to-blue-500", label: "Ocean" },
    { name: "green-cyan", from: "from-green-500", to: "to-cyan-500", label: "Nature" },
    { name: "orange-red", from: "from-orange-500", to: "to-red-500", label: "Sunset" },
    { name: "pink-purple", from: "from-pink-500", to: "to-purple-500", label: "Neon" },
    { name: "yellow-orange", from: "from-yellow-500", to: "to-orange-500", label: "Amber" },
  ]

  const applyTheme = (index: number) => {
    setSelectedTheme(index)

    const root = document.documentElement
    const theme = themes[index]

    // Update CSS variables for gradients
    root.style.setProperty("--theme-from", theme.from.replace("from-", ""))
    root.style.setProperty("--theme-to", theme.to.replace("to-", ""))

    // Apply intensity
    root.style.setProperty("--theme-intensity", `${intensity}%`)
  }

  const handleIntensityChange = (value: number[]) => {
    setIntensity(value[0])
    const root = document.documentElement
    root.style.setProperty("--theme-intensity", `${value[0]}%`)
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 transition-all duration-300 shadow-lg"
      >
        <Paintbrush className="h-4 w-4 mr-2" />
        <span>Customize</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-y-0 left-0 z-50 w-64 bg-black/90 border-r border-white/20 backdrop-blur-md shadow-xl p-4 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Theme Customizer
            </h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-6 flex-1">
            <div>
              <h4 className="text-sm font-medium text-white/70 mb-3">Color Theme</h4>
              <div className="grid grid-cols-2 gap-2">
                {themes.map((theme, index) => (
                  <button
                    key={theme.name}
                    onClick={() => applyTheme(index)}
                    className={`p-2 rounded-md transition-all duration-300 ${
                      selectedTheme === index ? "ring-2 ring-white" : ""
                    }`}
                  >
                    <div className={`h-12 rounded-md bg-gradient-to-r ${theme.from} ${theme.to} mb-1`}></div>
                    <span className="text-xs text-white/80">{theme.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white/70 mb-3">Intensity</h4>
              <Slider
                defaultValue={[intensity]}
                max={100}
                step={1}
                onValueChange={handleIntensityChange}
                className="w-full"
              />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-white/50">Subtle</span>
                <span className="text-xs text-white/50">Vibrant</span>
              </div>
            </div>
          </div>

          <Button
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 transition-all duration-300"
          >
            Apply Theme
          </Button>
        </div>
      )}
    </>
  )
}

