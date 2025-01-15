import { Button } from '@/components/ui/button'
import { ArrowRight, FileText } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="py-20 flex flex-col md:flex-row items-center justify-between">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Rohit Kumar
        </h1>
        <h3 className="text-xl mb-4">AI/ML Engineer @Frisson Devhub</h3>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
          Passionate about leveraging cutting-edge AI and ML technologies to solve complex problems and drive innovation.
        </p>
        <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
          <Button asChild className="group">
            <a href="#contact">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="outline" asChild className="group">
            <a href="#projects">
              View projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="ghost" asChild className="group">
            <a href="/Rohit_Kumar_CV.pdf" target="_blank" rel="noopener noreferrer">
              Resume
              <FileText className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
            </a>
          </Button>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2">
        <Image
          src="/rohit_image.png?height=400&width=400"
          alt="Rohit Kumar"
          width={400}
          height={400}
          className="rounded-full mx-auto"
        />
      </div>
    </section>
  )
}

