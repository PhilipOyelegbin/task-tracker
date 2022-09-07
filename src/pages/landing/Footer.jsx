import { Button } from '@chakra-ui/react'
import React from 'react'
import fbIcon from '../../assets/fbicon.svg'
import IGIcon from '../../assets/instagramicon.svg'
import linkedInIcon from '../../assets/linkedinicon.svg'
import youtubeIcon from '../../assets/youtube.svg'
 import './footer.css'
const Footer = () => {
    const footerContents =[
        {
            title:'Taskgenics',
            contents:[
                'Home', 'Pricing' , 'Product'
            ],
            button:'Start For Free'
        
        },
        {
            title:'Support',
            contents:[
                'Contact Center', 'Email Us','Help Center' 
            ]
        
        },
        {
            title:'Service',
            contents:[
                'IT Project Plan', 'Project Management' , 'Professional Service', 'Event planning', 'Construction Control'
            ]
        
        },
        {
            title:'Terms And Policies',
            contents:[
                'Terms Of Service', 'Privacy Policy' ,'Refund Policy', ' Security Information'
            ]
        
        }
    ]
    const renderFooter = footerContents.map( (footerContent,index)=><div className='list-div' key={index}>
        <p className='footer-h1'>{footerContent.title}</p>
        { footerContent.contents.map((item,index)=><p key={index}>
            {item}
        </p>)}
        {footerContent.button&&<Button bgColor={'#5C5757'} width={'120px'}>{footerContent.button}</Button>}
    </div>)
  return (
    <div className='footer' >
        <div className='footer-div'>

            {renderFooter}
        </div>
        <div className='icon-div'>
            <img src ={fbIcon} alt =''/>
            <img src ={IGIcon} alt =''/>
            <img src ={linkedInIcon} alt =''/>
            <img src ={youtubeIcon} alt =''/>
        </div>
        <p className='cc'>© Taskgenics 2022</p>
    </div>
  )
}

export default Footer