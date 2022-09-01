import { Button, Center, Flex, FormControl, FormLabel, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react"
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <Flex py="5">
        <Center flexDir="column" gap="5" mx="auto" bg="gray.400" w={["90%", "60%"]} rounded="lg" p="40px 20px">
            <VStack as="form" w="100%" gap="5">
                <Heading alignSelf="self-start">Sign In</Heading>
                <FormControl>
                    <FormLabel>Email Address</FormLabel>
                    <Input variant='outline' placeholder='Enter Email' size='md'/>
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input variant='outline' placeholder='8 Characters or more' size='md'/>
                </FormControl>
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