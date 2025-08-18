"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+254795359098",
    href: "tel:+254795359098",
  },
  {
    icon: Mail,
    label: "Email",
    value: "machariaandrew1428@gmail.com",
    href: "mailto:machariaandrew1428@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/andrew-macharia/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my projects",
    href: "https://github.com/AndrexCodes",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl sm:text-5xl mb-4 text-foreground">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-sans font-semibold text-xl mb-6 text-foreground flex items-center gap-3">
              <MessageCircle className="h-6 w-6 text-accent" />
              Contact Information
            </h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card
                  key={index}
                  className="bg-background border-border hover:border-accent/50 hover:shadow-md transition-all duration-300 group"
                >
                  <CardContent className="p-4">
                    <a href={info.href} className="flex items-center space-x-4">
                      <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                        <Icon className="h-5 w-5 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-muted group-hover:text-accent transition-colors">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Contact Form */}
          <Card className="bg-background border-border shadow-lg">
            <CardHeader>
              <CardTitle className="font-sans text-xl text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input border-border text-foreground placeholder:text-muted focus:border-accent focus:ring-ring"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-input border-border text-foreground placeholder:text-muted focus:border-accent focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-input border-border text-foreground placeholder:text-muted focus:border-accent focus:ring-ring"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-input border-border text-foreground placeholder:text-muted resize-none focus:border-accent focus:ring-ring"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium group"
                >
                  <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
