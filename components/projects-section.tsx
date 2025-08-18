import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Infinity Nest",
    description: "A comprehensive platform for managing digital assets and workflows with advanced analytics.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and inventory management.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    featured: false,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["Vue.js", "Express", "Socket.io", "MySQL"],
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl lg:text-5xl mb-6 text-foreground">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate my expertise in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Project - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img
                  src={projects[0].image || "/placeholder.svg"}
                  alt={projects[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    Featured Project
                  </span>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <h3 className="font-sans font-bold text-2xl mb-3 text-foreground">{projects[0].title}</h3>
                <p className="text-muted mb-4 leading-relaxed">{projects[0].description}</p>
                <div className="flex flex-wrap gap-2">
                  {projects[0].tech.map((tech) => (
                    <span key={tech} className="bg-card text-foreground px-3 py-1 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <div className="space-y-8">
            {projects.slice(1).map((project, index) => (
              <div
                key={project.title}
                className="group bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-sans font-bold text-lg mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted text-sm mb-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 2).map((tech) => (
                      <span key={tech} className="bg-card text-foreground px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-accent hover:bg-accent hover:text-accent-foreground p-0"
                    >
                      View Project
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="ghost" className="hover:bg-accent hover:text-accent-foreground p-1">
                        <Github className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="hover:bg-accent hover:text-accent-foreground p-1">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
