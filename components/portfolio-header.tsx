"use client"

import { ThemeToggle } from "./theme-toggle"

export function PortfolioHeader() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">Rohit</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
