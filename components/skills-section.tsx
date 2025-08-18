import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Cloud, Smartphone, Cpu, Wrench, Brain, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Ionic",
      "Vue.js",
      "Angular",
      "Bootstrap",
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Python", "Flask", "REST", "GraphQL", "C/C++"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "SQL", "Redis", "Google Firebase"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "GCP", "Azure Cloud", "Docker", "Kubernetes", "Jenkins"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Apple iOS", "Ionic", "React Native"],
  },
  {
    title: "IoT & Hardware",
    icon: Cpu,
    skills: ["IoT", "PCB Design", "ESP32/ESP8266", "MQTT"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Swagger", "Figma", "Jest", "Selenium"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["Artificial Intelligence", "Machine Learning", "TensorFlow", "Scikit-learn", "Computer Vision"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem-Solving", "Team Collaboration", "Agile/Scrum", "Leadership"],
  },
]

const languages = [
  { name: "English", level: "Native" },
  { name: "Swahili", level: "Native" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl sm:text-5xl mb-4 text-foreground">
            Skills & <span className="text-accent">Technologies</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardHeader>
                  <CardTitle className="font-sans text-lg text-foreground flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <Icon className="h-4 w-4 text-accent group-hover:text-accent-foreground" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-border text-muted hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-sans text-lg text-foreground flex items-center gap-3">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                <Users className="h-4 w-4 text-accent" />
              </div>
              Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {lang.level}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
