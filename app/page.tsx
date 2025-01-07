import {React} from 'react';
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Skills } from './components/skills'
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import {Footer} from './components/footer'

export const metadata ={
  title: 'Portfolio',
  description:''
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
      </main>
    </div>
  )
}
