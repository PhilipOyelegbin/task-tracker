import { Heading, HStack, Image, VStack, Link as ChakraLink } from "@chakra-ui/react";
import react from '../../assets/react.svg'

const Hero = () => {
  return (
    <HStack padding={["10px", "40px"]} align="center">
        <VStack width={["full","40%"]}>
            <Heading>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aliquam.</Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore? Architecto maxime non expedita, assumenda impedit numquam! Accusamus, omnis vel!</p>
            <ChakraLink bg="blackAlpha.600" padding="10px 50px" rounded="md" href="">Get Started For Free</ChakraLink>
        </VStack>
        <VStack width="60%" display={["none", "block"]}>
            <Image src={react} mx="auto" width="300" height="300"></Image>
        </VStack>
    </HStack>
  )
}

export default Hero