import { Button } from "@/components/ui/button"
import { Download, Award, Users, Coffee } from "lucide-react"

const achievements = [
  { icon: Award, label: "Certifications", value: "8+" },
  { icon: Users, label: "Happy Clients", value: "25+" },
  { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-in-left">
            <h2 className="font-sans font-bold text-4xl lg:text-5xl mb-6 text-foreground">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                I'm Andrew Macharia, a passionate full-stack developer and founder with extensive experience
                architecting scalable MERN applications and IoT solutions. Currently leading Infinity Nest, where I've
                improved data synchronization efficiency by 30% and achieved 99.8% uptime serving 50 landlords and 250
                tenants.
              </p>
              <p>
                I specialize in cloud deployment (GCP), API development, and cross-platform mobile app integration using
                Capacitor and Ionic. My experience spans from backend development at Ionex Tech Solutions to software
                development at We! Masomo, where I improved user engagement by 30% and strengthened server security by
                70%.
              </p>
              <p>
                With a background in IoT and PCB design from Nerokas Engineering, I bring a unique perspective to
                full-stack development. I hold a Bachelor's degree in Information Technology from KCA University and
                certifications in Computer Vision Technology, always staying ahead of industry trends.
              </p>
            </div>

            <div className="mt-8">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Column - Stats & Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/10 to-accent/30 rounded-3xl p-8">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Andrew working"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 bg-background rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">99.8%</div>
                  <div className="text-sm text-muted">Uptime Achieved</div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-background rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">300+</div>
                  <div className="text-sm text-muted">Users Served</div>
                </div>
              </div>
            </div>

            {/* Achievement Grid */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {achievements.map((achievement) => {
                const Icon = achievement.icon
                return (
                  <div key={achievement.label} className="text-center p-4 bg-background rounded-xl">
                    <Icon className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-xl font-bold text-foreground">{achievement.value}</div>
                    <div className="text-sm text-muted">{achievement.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
