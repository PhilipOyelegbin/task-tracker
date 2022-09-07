import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
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
        <h1 className='signup-heading'>Start Your Free Trial</h1>
        <form onSubmit={(e)=>e.preventDefault()} className='reg-form'>
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
          <div>
            <p style={{fontSize: '0.9rem'}}>Already have an account ? <span style={{color:'#DD6B20', cursor:'pointer', fontWeight:'bold', fontSize: '0.9rem'}} onClick={()=>navigate('/login')}>Login</span></p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup