"use client"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center">Get In Touch</h2>

        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center">Let's Connect</h3>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always interested in new opportunities, collaborations, and challenging projects. Feel free to reach
                out if you'd like to work together or discuss technology!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-lg">rohitrawat4073@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-lg">+91-9667275736</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-lg">Dehradun, Uttarakhand</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4 pt-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/rohitrwt73/" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/rohit-singh-rawat-042a4a239/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/rohitrwt73/portfolio" target="_blank" rel="noopener noreferrer">
                  <Code className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
