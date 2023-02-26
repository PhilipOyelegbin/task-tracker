import React from 'react'
import { useNavigate } from 'react-router-dom';
import { HStack, Text, VStack } from "@chakra-ui/react"
import { useState } from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa"
import personIcon  from '../../assets/personicon.svg';
import emailIcon  from '../../assets/emailIcon.svg';
import lockIcon  from '../../assets/lockIcon.svg';
import showP  from '../../assets/showP.svg';
import hideP  from '../../assets/hideP.svg';
import '../signup/signup.css'
import Nav from '../../components/Nav';

const Signup = () => {
  let navigate = useNavigate();
  const [pshow , setPShow] = useState(false);
  const [cpshow , setCPShow] = useState(false);
 

  return (
    <>
      <Nav/>
      <div className='signup-form-container'>
        {/* <img src={TGLogo} alt="TGLogo" className='signup-logo'/> */}
        <form onSubmit={(e)=>e.preventDefault()} className='reg-form'>
          <h1 className='signup-heading'>Start Your Free Trial</h1>
          <div className='input-box'>
            <label>First Name</label>
            <div style={{width:'100%',display:'flex'}}>
              <img className='icon' src={personIcon} alt=''/>
              <input type="text" placeholder='Enter First Name' />
            </div>
          </div>
          <div className='input-box'>
            <label>Last Name</label>
            <div style={{width:'100%',display:'flex'}}>
              <img className='icon' src={personIcon} alt=''/>
              <input type="text" placeholder='Enter Last Name' />
            </div>
          </div>
          <div className='input-box'>
            <label>Email Address</label>
            <div style={{width:'100%',display:'flex'}}>
              <img className='icon' src={emailIcon} alt=''/>  
              <input type="email" placeholder='Enter Email' />
            </div >
          </div>
          <div className='input-box'>
            <label>Password</label>
            <div style={{width:'100%', display:'flex'}}>
              <img className='icon' src={lockIcon} alt=''/>
              <input type={pshow?'password':'text'} placeholder='Enter Password' />
              <img className='icon1' src={pshow?showP:hideP} onClick={(e)=>{setPShow((prev)=>!prev)}}/>
            </div>
          </div>
          <div className='input-box'>
            <label>Confirm Password</label>
            <div style={{width:'100%', display:'flex'}}>
              <img className='icon' src={lockIcon} alt=''/>
              <input type={cpshow?'password':'text'} placeholder='Confirm Password' />
              <img className='icon1' src={cpshow?showP:hideP} onClick={(e)=>{setCPShow((prev)=>!prev)}}/>
            </div>
          </div>
          <div className='input-box'>
            <button className='signup-btn' onClick={()=>navigate('/login')}>Sign Up</button>
          </div>
          <Text fontWeight="semibold">OR</Text>
            <VStack>
                <Text py="3">Sign Up Using</Text>
                <HStack gap="5" style={{cursor: 'pointer'}}>
                    <FaGoogle/>
                    <FaFacebook/>
                    <FaLinkedin/>
                </HStack>
            </VStack>
          <div>
            <p style={{fontSize: '0.9rem', paddingTop:'1rem', }}>Already have an account ? <span style={{color:'#003F7D', cursor:'pointer', paddingTop:'5px', fontWeight:'bold', fontSize: '0.9rem'}} onClick={()=>navigate('/login')}>Sign In</span></p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup