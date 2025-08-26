"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <Avatar className="w-32 h-32 mx-auto mb-6">
            <AvatarImage src="/professional-headshot.png" alt="Profile" />
            <AvatarFallback className="text-2xl">RS</AvatarFallback>
          </Avatar>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">Rohit Singh Rawat</h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Computer Science Engineering Student | Software Developer | Machine Learning Enthusiast
          </p>

          <Button size="lg" onClick={scrollToProjects} className="text-lg px-8 py-3">
            View My Work
          </Button>
        </div>
      </div>
    </section>
  )
}
