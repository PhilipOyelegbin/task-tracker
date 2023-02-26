import React from'react'
import { Button, Center, Flex, FormControl, FormLabel, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react"
//import axios from "axios"
import { useEffect, useState } from "react"
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import './login.css'
import lockIcon  from '../../assets/lockIcon.svg';
import showP  from '../../assets/showP.svg';
import emailIcon  from '../../assets/emailIcon.svg';
import landingBg  from '../../assets/landing.svg';
import hideP  from '../../assets/hideP.svg';
import Nav from '../../components/Nav'
const Login = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser] = useState({email: "", password: ""});

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        /*const logData = async () => {
            try {
                let loginData = {email: user.email, password: user.password};
                await axios.post('/login', loginData)
                setLoading(false);
                setUser(loginData);
                navigate("/dashboard");
                sessionStorage.setItem('email', user.email)
            } catch (error) {
                setLoading(false);
                error?.message && setError("Login failed");
            }
        }
        logData();
        */
    };
    /*
     <input 
                        className='passwordInput' 
                        name="password" 
                        value={user.password} 
                        onChange={handleChange} 
                        placeholder='8 Characters or more' 
                        
                    />
    */
    
    const [pshow , setPShow] = useState(false);
    const [cpshow , setCPShow] = useState(false);
    
    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value});
    };

    useEffect(() => {
        document.title = "Taskgenics - Login Page"
    }, []);
    
  return (
      <>
        <Nav/>
        <Flex bg={landingBg} py="5">
            <Center flexDir="column" gap="5" mx="auto" boxShadow={'-1px 2px 6px 0px rgba(0,0,0,0.75)'} bg="#f5f5f5" w={["100%", "100%", '30%']} rounded="lg" p="40px 20px">
                <VStack as="form" onSubmit={handleLogin} w="100%" gap="3">
                    <Heading alignSelf="center">Sign In</Heading>
                    <div className='input-box'>
                        <label>Email Address</label>
                        <div style={{width:'100%',display:'flex'}}>
                            <img className='icon2' src={emailIcon} alt=''/>
                            <input type="text" placeholder='Enter First Name' />
                        </div>
                    </div>
                    <div className='input-box'>
                        <label>Password</label>
                    
                        <div style={{width:'100%', display:'flex'}}>
                            <img className='icon2' src={lockIcon} alt=''/>
                            <input type={pshow?'password':'text'} placeholder='Enter Password' />
                            <img className='icon1' src={pshow?showP:hideP} onClick={(e)=>{setPShow((prev)=>!prev)}}/>
                        </div>
                    </div>

                    {/* feedback message */}
                    {loading ? <Text>Loading...</Text> : error && <Text>{error}</Text>}

                    {/* sign in button */}
                    <button className='loginBtn'>Sign In</button>
                </VStack>
                <Text fontWeight="semibold">OR</Text>
                <VStack>
                    <Text>Sign In Using</Text>
                    <HStack gap="5">
                        <FaGoogle/>
                        <FaFacebook/>
                        <FaLinkedin/>
                    </HStack>
                </VStack>
                <Text>Are You A New Member? <Link to="/signup" style={{color: "#003F7D",fontWeight:500}}>Sign Up</Link></Text>
            </Center>
        </Flex>
      </>
  )
}

export default Login