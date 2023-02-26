import { useEffect } from "react"
import Hero from "./Hero"
import NewsLetter from "./NewsLetter"
import Projects from "./Projects"
import Section2 from "./Section2"
import Section1 from "./Section1"
import Testimonials from "./Testimonials"

const Landing = () => {
  useEffect(() => {
    document.title = "Taskgenics - Task management"
  }, []);
  
  return (
    <div style={{backgroundColor:'#E1ECFF'}}>
        <Hero/>
        <Section1/>
        <Section2/>
        <Projects/>
        <Testimonials/>
        <NewsLetter/>
    </div>
  )
}

export default Landing