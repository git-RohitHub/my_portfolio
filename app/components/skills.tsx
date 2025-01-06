import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Database, Server, Terminal, PenToolIcon as Tool, Brain } from 'lucide-react'

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python (Advanced)", "C","C++","Javascript","SQL"],
    icon: Code
  },
  {
    title: "Machine Learning Frameworks",
    skills: ["Keras", "PyTorch", "Flask", "FastAPI"],
    icon: Brain
  },
  {
    title: "Artificial Intelligence",
    skills: ["Machine Learning", "Deep Learning", "Natural Language Processing (NLP)", "Langchain", "Vector DB"],
    icon: Database
  },
  {
    title: "Data Science Techniques",
    skills: ["Data Cleaning", "Data Analysis", "Data Modeling", "Statistics", "RAG","LLMs Finetuning", "NER"],
    icon: Terminal
  },
  {
    title: "MLOps & DevOps",
    skills: ["CI/CD Pipelines", "Model Deployment", "MLOps"],
    icon: Server
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Linux", "AWS (SageMaker, Lambda)", "Hugging Face", "GCP"],
    icon: Tool
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center space-x-4">
              <category.icon className="w-8 h-8 text-primary" />
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-sm text-muted-foreground">{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

