import { Button } from '@chakra-ui/react'
import './projects.css'
import IMG from '../../assets/cushion1.svg'
import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'

const Projects = () => {
  const projects = [
    {
      img:IMG,
      text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',
      title:'IT Project Plan'
    },
    {
      img:IMG,
      text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',
      title:'Professional Service'
    },
    {
      img:IMG,
      text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',
      title:'Construction Control'
    },
    {
      img:IMG,
      text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',
      title:'Project Launch'
    },
    {
      img:IMG,
      text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',
      title:'Marketing Campaign'
    },
    {
      img:IMG,
      text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',
      title:`Event Plan`
    },
  ]
  const moveRight= ()=>{
    let projects = document.getElementById('projects');
    projects.scrollLeft = projects.scrollLeft+300;
  };
  const moveLeft= ()=>{
    let projects = document.getElementById('projects');
    projects.scrollLeft = projects.scrollLeft-300;
  }
  const renderProjects = projects.map((project,index)=><div className='projectDiv' key={index}>
    <img className='project-img' src={project.img} alt=''/>
    <p className='project-p'>{project.text}</p>
    <p className='project-h2'>{project.title}</p>
    <Button bgColor={'#C9C0C0'}>Learn More</Button>
  </div>)
  return (
    <div className ='project-main'>
      <h1 className='project-h1'>Project Template For Businesses</h1>
      <div id='projects' className='project-div'>
        {renderProjects}
      </div>
      <Button className='vMoreBtn'>View More</Button>
      <div className='button-div'>
        <img  onClick= {moveLeft} className='buttons' src ={arrowLeft} alt=''/>
        <img onClick= {moveRight} className='buttons' src ={arrowRight} alt =''/>
        
      </div>
    </div>
  )
}

export default Projects