import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-white-true dark:bg-black-true transition-theme">
      <Navbar />
      <main>
        <section id="home" className="section-default">
          <Hero />
        </section>
        <section id="about" className="section-alternate">
          <About />
        </section>
        <section id="experience" className="section-default">
          <Experience />
        </section>
        <section id="skills" className="section-alternate">
          <Skills />
        </section>
        <section id="projects" className="section-default">
          <Projects />
        </section>
        <section id="contact" className="section-alternate">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App

