import React from'react'
import { Button, Center, Flex, FormControl, FormLabel, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react"
//import axios from "axios"
import { useEffect, useState } from "react"
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import './login.css'
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
    
    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value});
    };

    useEffect(() => {
        document.title = "Taskgenics - Login Page"
    }, []);
    
  return (
    <Flex bg="#f5f5f5" py="5">
        <Center flexDir="column" gap="5" mx="auto" boxShadow={'-1px 2px 6px 0px rgba(0,0,0,0.75)'} bg="#f5f5f5" w={["100%", "100%", '30%']} rounded="lg" p="40px 20px">
            <VStack as="form" onSubmit={handleLogin} w="100%" gap="5">
                <Heading alignSelf="center">Sign In</Heading>
                <FormControl>
                    <FormLabel>Email Address</FormLabel>
                    <input  
                        className='emailInput'
                        name="email" 
                        value={user.email} 
                        onChange={handleChange} 
                        placeholder='Enter Email' 
                        
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <input 
                        className='passwordInput' 
                        name="password" 
                        value={user.password} 
                        onChange={handleChange} 
                        placeholder='8 Characters or more' 
                        
                    />
                </FormControl>

                {/* feedback message */}
                {loading ? <Text>Loading...</Text> : error && <Text>{error}</Text>}

                {/* sign in button */}
                <Button colorScheme='orange' variant='solid' width={'100%'} size='sm' p={["5px 30%", "5px 15%"]} my="10">Sign In</Button>
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
            <Text>Are You A New Member? <Link to="/signup" style={{color: "#DD6B20",fontWeight:500}}>Sign Up</Link></Text>
        </Center>
    </Flex>
  )
}

export default Login