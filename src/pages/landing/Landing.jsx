import { useEffect } from "react"
import Hero from "./Hero"
import Section2 from "./Section2"

const Landing = () => {
  useEffect(() => {
    document.title = "Taskgenics - Task management"
  }, []);
  
  return (
    <>
      <Hero/>
      <Section2/>
    </>
  )
}

export default Landing