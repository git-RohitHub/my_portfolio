'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: "CallMatic AI",
    shortDescription: "An automated survey platform with advanced NLP capabilities.",
    fullDescription: [
      "Integrated natural language processing for managing conversation flow",
      "Leveraged TwiML to make calls and execute scripts",
      "Integrated as a Flask app with the frontend",
      "Improved survey completion rates by 30%"
    ],
    image: "/callmatic.webp?height=200&width=300",
  },
  {
    title: "AI Text Detection",
    shortDescription: "LLM-based system to differentiate AI-generated from human-written text.",
    fullDescription: [
      "Built and fine-tuned LLM base models",
      "Achieved 95% accuracy in distinguishing AI-generated text",
      "Deployed models using AWS SageMaker and Lambda",
      "Implemented real-time analysis for incoming text streams"
    ],
    image: "/ai_text3.png?height=200&width=300",
  },
  {
    title: "Business Email Generator",
    shortDescription: "AI-powered email generator tailored for job applications.",
    fullDescription: [
      "Utilizes Langchain, Python, Groq and Chroma (Vector DB)",
      "Implements llm's (llama_3.1_70B) for advanced language processing",
      "Scrapes job postings through URL in runtime",
      "Converts job details into vectorstore for efficient matching",
      "Creates personalized emails based on matched skills and portfolio"
    ],
    image: "/email_generator.png?height=200&width=300",
  },
]

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="object-cover w-full h-48"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {expandedProject === index && (
                <ul className="list-disc list-inside space-y-2 mt-4">
                  {project.fullDescription.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{item}</li>
                  ))}
                </ul>
              )}
            </CardContent>
            <CardContent>
              <Button 
                variant="ghost" 
                className="w-full group"
                onClick={() => toggleProject(index)}
              >
                {expandedProject === index ? 'Show Less' : 'Learn More'}
                {expandedProject === index ? (
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                ) : (
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

