import person1 from '../../assets/testimonial1.svg'
import person2 from '../../assets/testimonial2.svg'
import person3 from '../../assets/testtimonial3.svg'
import person4 from '../../assets/person.svg'
import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'
import './testimonial.css'
import { Button } from '@chakra-ui/react'
const Testimonials = () => {
    const testimonials =[
        {
            img:person1,
            name:'Mitchelle Abu',
            position:'Project Manager',
            text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',

        },
        {
            img:person2,
            name:'Kathryn Murphy',
            position:'President Of Sales',
            text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',

        },
        {
            img:person3,
            name:'Markhy Abu',
            position:'Project Manager',
            text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',

        },
        {
            img:person1,
            name:'Mike Abu',
            position:'Project Manager',
            text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',

        },
        {
            img:person1,
            name:'Mike Abu',
            position:'Project Manager',
            text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',

        },
        {
            img:person1,
            name:'Mike Abu',
            position:'Project Manager',
            text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',

        },
        {
            img:person1,
            name:'Mike Abu',
            position:'Project Manager',
            text:'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list',

        },
    ];
    const renderTestiomonials= testimonials.map((testimony,index)=><div className= 'person-div' key={index}>
        <img className='testimonial-img' src={testimony.img} alt=''/>
        <div className='testimony-div'>
            <p className='testimony-name'>{testimony.name}</p>
            <p className='testimony-position'>{testimony.position}</p>
            <p className='testimony'>{testimony.text}</p>
        </div>
    </div>)
        
    const moveLeft =()=>{
        let testimonies = document.getElementById('testimonies');
        testimonies.scrollLeft = testimonies.scrollLeft -380
    };
    const moveRight =()=>{
        let testimonies = document.getElementById('testimonies');
        testimonies.scrollLeft = testimonies.scrollLeft +380
    };
  return (
    <div className='testimonial-div'>
        <h1 className='testimonial-h1'>What Our Users Are Saying</h1>
        <div id = 'testimonies' className='intestimonial-div'>
            {renderTestiomonials}

        </div>
        <div className='testimony-arrow'>
            <img className='arrowBtn' style={{cursor:'pointer'}} onClick={moveLeft} src={arrowLeft} alt='left arrow'/>
            <img className='arrowBtn' onClick={moveRight} src={arrowRight} alt='right arrow'/>
        </div>
        
    </div>
  )
}

export default Testimonials