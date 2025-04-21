"use client"
import { X, ExternalLink, Github, BarChart, Clock, User, Lightbulb, CheckCircle, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ProjectDetails } from "@/types/project"

interface ProjectModalProps {
  project: ProjectDetails
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => !open && onClose()}
      aria-labelledby={`project-modal-title-${project.id}`}
      aria-describedby={`project-modal-description-${project.id}`}
    >
      <DialogContent
        className="sm:max-w-[800px] md:max-w-[900px] bg-black/90 border-white/10 text-white overflow-y-auto max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        <DialogHeader>
          <DialogTitle
            id={`project-modal-title-${project.id}`}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            {project.title}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-white/70 hover:text-white hover:bg-white/10 focus-visible"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>

        {/* Project header with image/banner */}
        <div className="h-40 bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center relative overflow-hidden mb-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 z-10">
            {project.title}
          </span>
        </div>

        {/* Project metadata */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.role && (
            <div className="flex items-center text-xs text-white/70 bg-white/5 px-2 py-1 rounded-full">
              <User className="h-3 w-3 mr-1 text-blue-400" />
              <span>{project.role}</span>
            </div>
          )}
          {project.duration && (
            <div className="flex items-center text-xs text-white/70 bg-white/5 px-2 py-1 rounded-full">
              <Clock className="h-3 w-3 mr-1 text-purple-400" />
              <span>{project.duration}</span>
            </div>
          )}
        </div>

        {/* Tabs for different content sections */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4 bg-white/5">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="case-study" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">
              Case Study
            </TabsTrigger>
            <TabsTrigger value="technical" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">
              Technical
            </TabsTrigger>
            <TabsTrigger value="results" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">
              Results
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <DialogDescription id={`project-modal-description-${project.id}`} className="text-white/70">
              {project.longDescription}
            </DialogDescription>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white/90">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-5 text-white/70 list-disc">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {project.testimonial && (
              <div className="mt-6 bg-white/5 p-4 rounded-lg border border-white/10 relative">
                <div className="absolute -top-3 -left-3 text-4xl text-blue-500 opacity-50">"</div>
                <div className="absolute -bottom-3 -right-3 text-4xl text-purple-500 opacity-50">"</div>
                <blockquote className="text-white/80 italic relative z-10">
                  {project.testimonial.quote}
                </blockquote>
                <div className="mt-3 text-right">
                  <div className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {project.testimonial.author}
                  </div>
                  <div className="text-xs text-white/60">{project.testimonial.role}</div>
                </div>
              </div>
            )}
          </TabsContent>

          {/* Case Study Tab */}
          <TabsContent value="case-study" className="space-y-6">
            {project.problem && (
              <div className="space-y-2">
                <div className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-orange-400" />
                  <h3 className="text-lg font-semibold text-white/90">The Problem</h3>
                </div>
                <p className="text-white/70 pl-7">{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                  <h3 className="text-lg font-semibold text-white/90">The Solution</h3>
                </div>
                <p className="text-white/70 pl-7">{project.solution}</p>
              </div>
            )}

            {project.outcome && (
              <div className="space-y-2">
                <div className="flex items-center">
                  <BarChart className="h-5 w-5 mr-2 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white/90">The Outcome</h3>
                </div>
                <p className="text-white/70 pl-7">{project.outcome}</p>
              </div>
            )}

            {project.learnings && (
              <div className="space-y-2">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white/90">Key Learnings</h3>
                </div>
                <p className="text-white/70 pl-7">{project.learnings}</p>
              </div>
            )}
          </TabsContent>

          {/* Technical Tab */}
          <TabsContent value="technical" className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white/90">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-white/10 hover:bg-white/20 text-white border-none transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2 text-white/90">Technical Highlights</h3>
              <ul className="list-disc pl-5 space-y-2 text-white/70">
                <li>Implemented using a modular architecture for scalability and maintainability</li>
                <li>Optimized for performance with efficient data structures and algorithms</li>
                <li>Comprehensive test suite with over 90% code coverage</li>
                <li>CI/CD pipeline for automated testing and deployment</li>
                <li>Designed with security best practices and regular vulnerability scanning</li>
              </ul>
            </div>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-4">
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white/90">Key Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors"
                    >
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-white/70">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-white/90">Impact</h3>
              <p className="text-white/70">
                This project has made a significant impact by solving real-world problems and delivering measurable results.
                The solutions implemented continue to evolve and improve based on user feedback and changing requirements.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-end gap-3 mt-6">
          {project.githubUrl && (
            <Button
              variant="outline"
              className="border-white/20 bg-white/5 hover:bg-white/10 text-white focus-visible"
              onClick={() => window.open(project.githubUrl, '_blank')}
              aria-label="View source code on GitHub"
            >
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </Button>
          )}

          {project.liveUrl && (
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 transition-all duration-300 focus-visible"
              onClick={() => window.open(project.liveUrl, '_blank')}
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Live Demo
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

