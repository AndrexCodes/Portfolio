import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const education = [
  {
    type: "degree",
    institution: "KCA University, Kenya",
    degree: "Bachelor's Degree in Information Technology",
    period: "2022 - 2025",
    icon: GraduationCap,
  },
  {
    type: "certificate",
    institution: "Alison Open University",
    degree: "Certificate in Computer Vision Technology",
    period: "02/2023",
    icon: Award,
  },
  {
    type: "training",
    institution: "Go My Code Kenya",
    degree: "Software Engineering Training",
    period: "2023",
    icon: BookOpen,
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-6 lg:px-8 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl mb-4 text-white">Education</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Continuous learning and professional development</p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon
            return (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-cyan-400/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-cyan-400/10 rounded-lg">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-space-grotesk text-xl text-white mb-2">{edu.degree}</CardTitle>
                      <p className="text-cyan-400 font-semibold">{edu.institution}</p>
                      <div className="mt-2">
                        <Badge variant="outline" className="border-gray-700 text-gray-400">
                          {edu.period}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
