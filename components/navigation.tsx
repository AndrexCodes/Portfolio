"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2 } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center animate-glow">
              <Code2 className="h-6 w-6 text-accent" />
            </div>
            <span className="font-sans font-bold text-xl text-foreground">Andrew</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:text-accent relative interactive-element ${
                  activeSection === item.href.substring(1) ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent rounded-full animate-glow" />
                )}
              </button>
            ))}
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground glass-card border-accent/50">
              Let's Talk
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="glass-card">
              {isOpen ? <X className="h-5 w-5 text-accent" /> : <Menu className="h-5 w-5 text-accent" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-card border-t border-accent/20 mt-2 rounded-2xl">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block px-4 py-3 text-base font-medium transition-colors hover:text-accent w-full text-left rounded-xl interactive-element ${
                    activeSection === item.href.substring(1) ? "text-accent bg-accent/10" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
