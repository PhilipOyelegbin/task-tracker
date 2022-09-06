import { Button, Center, Flex, FormControl, FormLabel, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react"
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [user, setUser] = useState({email: "", password: ""});

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        const logData = async () => {
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
    };

    // const handleChange = (e) => {
    //     setValues({...values, [e.target.name] : e.target.value});
    // };

    useEffect(() => {
        document.title = "Taskgenics - Login Page"
    }, []);
    
  return (
    <Flex py="5">
        <Center flexDir="column" gap="5" mx="auto" bg="gray.400" w={["90%", "60%"]} rounded="lg" p="40px 20px">
            <VStack as="form" onSubmit={handleLogin} w="100%" gap="5">
                <Heading alignSelf="self-start">Sign In</Heading>
                <FormControl>
                    <FormLabel>Email Address</FormLabel>
                    <Input variant='outline' name="email" value={user.email} onChange={(e) => e.target.value} placeholder='Enter Email' size='md' required/>
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input variant='outline' name="password" value={user.password} onChange={(e) => e.target.value} placeholder='8 Characters or more' size='md' required/>
                </FormControl>

                {/* feedback message */}
                {loading ? <Text>Loading...</Text> : error && <Text>{error}</Text>}

                {/* sign in button */}
                <Button colorScheme='orange' variant='solid' size='sm' p={["5px 30%", "5px 15%"]} my="10">Sign In</Button>
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
            <Text>Are You A New Member? <Link to="/signup" style={{color: "blue"}}>Sign Up</Link></Text>
        </Center>
    </Flex>
  )
}

export default Login