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
      <div className="container mx-auto max-w-6xl">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <div className="flex-shrink-0 order-1 md:order-2">
            <img
        src="/dp.jpg"   
        alt="Rohit Singh Rawat"
        className="w-full h-full object-cover"
      />
          </div>

          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Rohit Singh Rawat</h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Computer Science Engineering Student | Software Developer | Machine Learning Enthusiast
            </p>

            <Button size="lg" onClick={scrollToProjects} className="text-lg px-8 py-3">
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
