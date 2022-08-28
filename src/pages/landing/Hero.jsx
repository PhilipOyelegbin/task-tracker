import { Heading, HStack, Image, VStack, Link as ChakraLink, Button, textDecoration } from "@chakra-ui/react";
import react from '../../assets/react.svg'

const Hero = () => {
  return (
    <HStack padding={["10px", "40px"]} align="center">
        <VStack width={["full", "full", "40%"]}>
            <Heading>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aliquam.</Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore? Architecto maxime non expedita, assumenda impedit numquam! Accusamus, omnis vel!</p>
            <Button colorScheme='orange' variant='solid' size='sm' alignSelf={["self-start", "center"]} p={["10px 20px", "10px 50px"]}><ChakraLink textAlign="center" _hover="none" href="">Get Started For Free</ChakraLink></Button>
        </VStack>
        <VStack width="60%" display={["none", "none", "block"]}>
            <Image src={react} mx="auto" w="300" h="300"></Image>
        </VStack>
    </HStack>
  )
}

export default Hero