
import Hero from "./Hero"
import NewsLetter from "./NewsLetter"
import Projects from "./Projects"
import Section2 from "./Section2"
import Testimonials from "./Testimonials"

const Landing = () => {
  return (
    <div style={{backgroundColor:'#5C5757'}}>
        <Hero/>
        <Section2/>
        <Projects/>
        <Testimonials/>
        <NewsLetter/>
    </div>
  )
}

export default Landing