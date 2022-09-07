import { Button } from '@chakra-ui/react'
import React from 'react'
import './newsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter-div'>
        <h1 className='newsLetter-h1'>Signup To Our NewsLetter</h1>
        <p className='newsLetter-p'>want to receive updates about our pricings and new service? Signup with your email address. No spamming!</p>
        <div className='input-div'>
            <input className='input' placeholder='Enter Email address'/>
            <Button bgColor={'#D9D0D0'} className='button'>Sign Up</Button>
        </div>
    </div>
  )
}

export default NewsLetter