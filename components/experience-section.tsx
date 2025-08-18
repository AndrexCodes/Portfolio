import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Infinity Nest",
    role: "Founder & Full Stack Developer",
    location: "Nairobi, Kenya",
    period: "04/2025 - Present",
    achievements: [
      "Improved data synchronization efficiency by 30%, resulting in enhanced communication between 50 landlords and 250 tenants test users",
      "Integrated Firebase Auth, Realtime Database, and Push Notifications, achieving 99.8% uptime",
    ],
    technologies: ["Firebase", "React", "Node.js", "Real-time Database"],
  },
  {
    company: "We! Masomo",
    role: "Software Developer",
    location: "Berlin, Germany - Remote",
    period: "06/2024 - 04/2025",
    achievements: [
      "Improved user engagement by 30% by integrating Framer motion animations and backend API support",
      "Strengthened server security using rate limiting, IP whitelisting, CORS policies, and per-request logging, which reduced unauthorized access attempts by 70%",
    ],
    technologies: ["Framer Motion", "API Development", "Security", "CORS"],
  },
  {
    company: "Ionex Tech Solutions",
    role: "Back End Developer",
    location: "Nairobi, Kenya",
    period: "11/2023 - 06/2024",
    achievements: [
      "Designed and optimized RESTful APIs to enhance data exchange efficiency between front-end and back-end systems",
      "Collaborated with front-end teams using Postman & Swagger to test API endpoints",
    ],
    technologies: ["REST API", "Postman", "Swagger", "Backend Development"],
  },
  {
    company: "Nerokas Engineering",
    role: "IoT | PCB Designer",
    location: "Kiambu, Kenya",
    period: "07/2022 - 03/2023",
    achievements: [
      "Built IoT solutions integrating ESP32/ESP8266 with Python/MQTT, enabling real-time sensor data transmission",
      "Co-developed a tech e-commerce platform, increasing company visibility and product reach by 3x",
    ],
    technologies: ["IoT", "ESP32/ESP8266", "Python", "MQTT", "PCB Design"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 lg:px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl mb-4 text-white">Experience</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A journey through innovative projects and technical leadership roles
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-cyan-400/50 transition-colors">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="font-space-grotesk text-xl text-white">{exp.role}</CardTitle>
                    <p className="text-cyan-400 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-cyan-400 mr-2 mt-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="border-gray-700 text-gray-300 bg-gray-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
