import { useEffect } from "react"
import Footer from "./Footer"
import Hero from "./Hero"
import NewsLetter from "./NewsLetter"
import Projects from "./Projects"
import Section2 from "./Section2"
import Testimonials from "./Testimonials"

const Landing = () => {
  useEffect(() => {
    document.title = "Taskgenics - Task management"
  }, []);
  
  return (
    <>
      <Hero/>
      <Section2/>
      <Projects/>
      <Testimonials/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default Landing