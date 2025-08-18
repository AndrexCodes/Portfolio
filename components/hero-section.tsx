import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight, Sparkles, Code, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/5 to-transparent rounded-full animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="modern-grid max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        {/* Left Column - Floating Elements */}
        <div className="flex flex-col justify-center space-y-8 animate-slide-in-left">
          <div className="w-20 h-20 glass-card rounded-2xl animate-float flex items-center justify-center">
            <Code className="h-8 w-8 text-accent" />
          </div>
          <div
            className="w-16 h-16 glass-card rounded-xl animate-float flex items-center justify-center"
            style={{ animationDelay: "2s" }}
          >
            <Zap className="h-6 w-6 text-accent" />
          </div>
          <div
            className="w-24 h-24 glass-card rounded-3xl animate-float flex items-center justify-center"
            style={{ animationDelay: "4s" }}
          >
            <Sparkles className="h-10 w-10 text-accent" />
          </div>
        </div>

        {/* Center Column - Main Content */}
        <div className="flex flex-col justify-center animate-fade-in-up">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-8 animate-glow">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent">Available for new projects</span>
            </div>

            <h1 className="font-sans font-bold text-6xl lg:text-8xl mb-6 text-foreground leading-tight">
              Hi, I'm
              <br />
              <span className="text-accent neon-text">Andrew</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Full Stack Developer crafting
              <span className="text-accent font-semibold"> exceptional digital experiences</span> with
              <span className="text-accent font-semibold"> cutting-edge technology</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground group glass-card border-accent/50"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground glass interactive-element bg-transparent"
            >
              Download Resume
            </Button>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-sm text-muted-foreground font-medium">Connect:</span>
            <div className="flex space-x-4">
              <a
                href="mailto:machariaandrew1428@gmail.com"
                className="w-12 h-12 glass-card rounded-xl flex items-center justify-center interactive-element group"
              >
                <Mail className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/andrew-macharia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-xl flex items-center justify-center interactive-element group"
              >
                <Linkedin className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/AndrexCodes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-xl flex items-center justify-center interactive-element group"
              >
                <Github className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Profile & Stats */}
        <div className="flex flex-col justify-center items-center animate-slide-in-right">
          <div className="relative mb-8">
            <div className="w-72 h-72 glass-card rounded-3xl p-2 animate-pulse-border">
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl flex items-center justify-center overflow-hidden relative">
                <img
                  src="/placeholder.svg?height=260&width=260"
                  alt="Andrew Macharia"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-2xl flex items-center justify-center animate-glow">
              <span className="text-accent font-bold text-lg">AM</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            <div className="glass-card p-6 rounded-2xl text-center interactive-element">
              <div className="text-3xl font-bold text-accent neon-text">15+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center interactive-element">
              <div className="text-3xl font-bold text-accent neon-text">3+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Exp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
