import {  HStack, VStack} from '@chakra-ui/react'
import './projects.css'
import IMG1 from '../../assets/projectImg1.svg'
import IMG2 from '../../assets/projectImg2.svg'
import IMG3 from '../../assets/projectImg3.svg'
import IMG4 from '../../assets/projectsImg4.svg'
import IMG5 from '../../assets/projectImg5.svg'
import IMG6 from '../../assets/projectImg6.svg'
import caretRight from '../../assets/caret-right.svg';

const Projects = () => {
  const projects = [
    {
      img:IMG1,
      text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',
      title:'IT Project Plan'
    },
    {
      img:IMG2,
      text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',
      title:'Professional Service'
    },
    {
      img:IMG3,
      text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',
      title:'Construction Control'
    },
    {
      img:IMG4,
      text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',
      title:'Project Launch'
    },
    {
      img:IMG5,
      text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',
      title:'Marketing Campaign'
    },
    {
      img:IMG6,
      text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',
      title:`Event Plan`
    },
  ]
 
  const renderProjects = projects.map((project,index)=><VStack w={['340px','300px','340px']} p={['1rem']} className='projectDiv' key={index}>
    <img className='project-img' src={project.img} alt=''/>
    <p className='project-p'>{project.text}</p>
    <p className='project-h2'>{project.title}</p>
    <HStack as ='button' color={ '#FF5004'} alignSelf={'flex-start'} >
      <p>Learn More</p>
      <img src= {caretRight} style={{width:'5px'}} />
    </HStack>
  </VStack>)
  return (
    <div className ='project-main'>
      <h1 className='project-h1'>Project Template For Businesses</h1>
      <HStack id='projects'  className='project-div'>
        {renderProjects}
      </HStack>
    </div>
  )
}

export default Projects