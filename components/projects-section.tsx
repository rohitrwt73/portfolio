import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "MeetJobs - A Job Portal",
    description:
      "A comprehensive job portal application with secure authentication, job posting, and search features. Built with React.js frontend and Spring Boot backend with MySQL database.",
    image: "/meetjobs.png",
    technologies: ["Java", "MySQL", "Spring Boot", "JWT Authentication", "Hibernate", "React.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/rohitrwt73/Job-Portal",
    details: "Built over 6 REST API endpoints, connected to MySQL database with 40+ sample job records",
  },
  {
    title: "CortexAI",
    description:
      "Deep learning tool for brain MRI scan classification using CNN-Transformer and VGG16 models. Achieved 99.7% accuracy through ensemble learning on 5,093 medical images.",
    image: "/brain-mri-scan-classification-ai-interface.png",
    technologies: ["Python", "TensorFlow", "VGG16", "scikit-learn"],
    liveUrl: "#",
    githubUrl: "https://github.com/rohitrwt73/Brain_tumor_detection",
    details: "Processed 4,074 training and 1,019 testing images with 99.7% accuracy",
  },
  {
    title: "NagrikAurSamvidhan",
    description:
      "Interactive quiz and learning platform for the Indian Constitution developed during Smart India Hackathon. Features 8+ responsive UI components and 10+ quiz sections.",
    image: "/indian-constitution-quiz-learning-platform.png",
    technologies: ["JavaScript", "React.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/rohitrwt73/NagrikAurSamvidhan",
    details: "Smart India Hackathon project with engaging interactive content",
  },
  {
    title: "Phishing Attack Detection",
    description:
      "Machine learning solution to identify phishing websites by analyzing URL features. Uses Decision Tree Classifier trained on 10,000 URLs achieving 81% accuracy.",
    image: "/phishing-detection-cybersecurity-dashboard.png",
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn"],
    liveUrl: "#",
    githubUrl: "https://github.com/rohitrwt73/Phishing-Attack-Detection",
    details: "Trained on 7,500 URLs, tested on 2,500 with 16 different features",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              {/* Image container */}
              <div className="h-64 flex items-center justify-center overflow-hidden rounded-t-lg bg-gray-100">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                {project.details && (
                  <p className="text-sm text-muted-foreground mt-2">{project.details}</p>
                )}
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {/* GitHub button */}
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
