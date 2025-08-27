import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "B.Tech - Computer Science and Engineering",
      institution: "Graphic Era Deemed to be University",
      location: "Dehradun, Uttarakhand",
      duration: "2022 – 2026",
      current: true,
    },
    {
      degree: "B.Sc - Chemistry",
      institution: "National Defence Academy, Khadakwasla",
      location: "Pune, Maharashtra",
      duration: "2021 – 2022",
      current: false,
    },
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">My academic journey and qualifications</p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-800"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                        <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      {edu.current && (
                        <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-400 rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {edu.degree}
                    </h3>

                    <p className="text-lg font-medium text-muted-foreground mb-3">{edu.institution}</p>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

