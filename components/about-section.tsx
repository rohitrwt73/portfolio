import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center">About Me</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
           <p className="text-lg leading-relaxed">
  I'm Rohit Singh Rawat, an Advanced Associate Software Engineer with a strong interest in Artificial Intelligence, Machine Learning, and Full-Stack Development. I enjoy designing scalable applications and leveraging technology to create impactful solutions.
</p>

<p className="text-lg leading-relaxed">
  My technical expertise includes Generative AI, Natural Language Processing, Machine Learning, React, Spring Boot, and database-driven application development. Notable projects include Cognify, an AI-powered research and academic assistance platform utilizing LLMs and vector embeddings, and a secure Job Portal featuring JWT-based authentication and advanced search capabilities. I am passionate about continuous learning and building products that deliver meaningful user experiences.
</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">900+</div>
                  <div className="text-sm text-muted-foreground">Problems Solved</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">Knight</div>
                  <div className="text-sm text-muted-foreground">LeetCode Rank</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">23+</div>
                  <div className="text-sm text-muted-foreground">Contests Participated</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">AIR 148</div>
                  <div className="text-sm text-muted-foreground">NDA Exam 2020</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
