"use client"

import { useEffect, useState } from "react"

interface JsonLdProps {
  data: Record<string, any>
}

export function JsonLd({ data }: JsonLdProps) {
  const [jsonLd, setJsonLd] = useState<string>("")

  useEffect(() => {
    setJsonLd(JSON.stringify(data))
  }, [data])

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  )
}

export function PersonJsonLd() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "KhyAI",
    "url": "https://khyai.com",
    "jobTitle": "AI Developer",
    "description": "KhyAI builds intelligent systems that transform how businesses operate and innovate.",
    "sameAs": [
      "https://linkedin.com/in/khyai",
      "https://github.com/khyai"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "TypeScript",
      "React",
      "Full-Stack Development"
    ]
  }

  return <JsonLd data={personData} />
}

export function PortfolioJsonLd() {
  const portfolioData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KhyAI - Advanced AI Solutions",
    "url": "https://khyai.com",
    "description": "KhyAI builds intelligent systems that transform how businesses operate and innovate.",
    "author": {
      "@type": "Person",
      "name": "KhyAI"
    },
    "keywords": "AI, artificial intelligence, machine learning, data science, portfolio, KhyAI, technology, innovation"
  }

  return <JsonLd data={portfolioData} />
}

export function ProjectJsonLd({ project }: { project: { title: string, description: string, technologies: string[] } }) {
  const projectData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cross-platform",
    "author": {
      "@type": "Person",
      "name": "KhyAI"
    },
    "keywords": project.technologies.join(", ")
  }

  return <JsonLd data={projectData} />
}
