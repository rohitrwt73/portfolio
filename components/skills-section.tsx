import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 88 },
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 82 },
      { name: "SQL", level: 80 },
      { name: "HTML", level: 85 },
    ],
  },
  {
    title: "Frameworks & Technologies",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Spring Boot", level: 88 },
      { name: "TensorFlow", level: 80 },
      { name: "Tailwind CSS", level: 82 },
      { name: "JWT Authentication", level: 75 },
    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code", level: 88 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 85 },
      { name: "scikit-learn", level: 82 },
      { name: "Matplotlib", level: 80 },
    ],
  },
  {
    title: "Core Competencies",
    skills: [
      { name: "Data Structures & Algorithms", level: 90 },
      { name: "Machine Learning", level: 85 },
      { name: "DBMS", level: 82 },
      { name: "Operating Systems", level: 80 },
      { name: "Problem Solving", level: 92 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
