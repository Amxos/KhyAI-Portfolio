export interface ProjectDetails {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  image?: string
  
  // New storytelling fields
  problem?: string
  solution?: string
  outcome?: string
  learnings?: string
  role?: string
  duration?: string
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  metrics?: {
    label: string
    value: string
    icon?: string
  }[]
  caseStudyUrl?: string
  githubUrl?: string
  liveUrl?: string
}
