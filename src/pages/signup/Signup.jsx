import React from 'react'
import { useNavigate } from 'react-router-dom';
import { HStack, Text, VStack } from "@chakra-ui/react"
import { useState } from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa"
// import TGLogo  from '../../assets/TGLogo.jpg';
import '../signup/signup.css'

const Signup = () => {
  let navigate = useNavigate();
  const [type , setType] = useState({visible: false, input:"password"});
  function tooglePassword() {
    setType((value)=>{
      return {
        ...value,
        visible : !value.visible,
        input : !value.visible ? "text" : "password"
      }
    })
  }          

  return (
    <>
      <div className='signup-form-container'>
        {/* <img src={TGLogo} alt="TGLogo" className='signup-logo'/> */}
        <form onSubmit={(e)=>e.preventDefault()} className='reg-form'>
          <h1 className='signup-heading'>Start Your Free Trial</h1>
          <div className='input-box'>
            <label>First Name</label>
            <input type="text" placeholder='Enter First Name' />
          </div>
          <div className='input-box'>
            <label>Last Name</label>
            <input type="text" placeholder='Enter Last Name' />
          </div>
          <div className='input-box'>
          <label>Email Address</label>
            <input type="email" placeholder='Enter Email' />
          </div>
          <div className='input-box'>
            <label>Password</label>
            <input type={type.input} placeholder='Enter Password' />
            <i className={`show-btn ${type.visible ? "fas fa-eye" : "fas fa-eye-slash"}`} onClick={tooglePassword}></i>
          </div>
          <div className='input-box'>
            <label>Confirm Password</label>
            <input type={type.input} placeholder='Confirm Password' />
            <i className={`show-btn ${type.visible ? "fas fa-eye" : "fas fa-eye-slash"}`} onClick={tooglePassword}></i>
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
            <p style={{fontSize: '0.9rem', paddingTop:'1rem', }}>Already have an account ? <span style={{color:'#DD6B20', cursor:'pointer', paddingTop:'5px', fontWeight:'bold', fontSize: '0.9rem'}} onClick={()=>navigate('/login')}>Sign In</span></p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup