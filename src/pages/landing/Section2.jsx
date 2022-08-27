import { Heading, HStack, Image, Link as ChakraLink, VStack, Wrap } from "@chakra-ui/react";
import {} from '@emotion/react';
import react from '../../assets/react.svg';

const Section2 = () => {
  return (
    <>
        <VStack py="10">
            <Wrap p={["10px", "20px 40px"]} justify="center" gap="5" align="center">
                <VStack w={["full","30%"]}>
                    <Heading>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aliquam.</Heading>
                </VStack>
                <VStack w={["full","30%"]}>
                    <Heading fontSize="24px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aliquam.</Heading>
                    <p style={{fontSize: "18px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore? Architecto maxime non expedita, assumenda impedit numquam! Accusamus, omnis vel!</p>
                </VStack>
                <VStack w={["full","30%"]}>
                    <Heading fontSize="24px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aliquam.</Heading>
                    <p style={{fontSize: "18px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore? Architecto maxime non expedita, assumenda impedit numquam! Accusamus, omnis vel!</p>
                </VStack>
            </Wrap>

            <Wrap p={["10px", "20px 40px"]} justify="center" gap="5" align="center">
                <VStack w={["full","60%"]}>
                    <Image src={react} mx="auto" w="300" h="300"></Image>
                </VStack>
                <VStack w={["full","35%"]}>
                    <Heading fontSize="24px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aliquam.</Heading>
                    <p style={{fontSize: "18px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore? Architecto maxime non expedita, assumenda impedit numquam! Accusamus, omnis vel!</p>
                </VStack>
            </Wrap>

            <VStack>
                <Image src={react} p="5" w="100" h="100"/>
            </VStack>

            <Heading textAlign="center">Software Built For Remote And Hybrid Team</Heading>
            <Wrap p={["10px", "20px 40px"]} justify="center" gap="5" align="center">
                <VStack w={["full","35%"]}>
                    <Heading fontSize="24px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aliquam.</Heading>
                    <p style={{fontSize: "18px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore? Architecto maxime non expedita, assumenda impedit numquam! Accusamus, omnis vel!</p>
                    <HStack justify="space-between">
                        <p>Get Started</p>
                        <Image src="" />
                    </HStack>
                </VStack>
                <VStack w={["full","60%"]}>
                    <Image src={react} mx="auto" w="300" h="300"></Image>
                </VStack>
            </Wrap>
            <Wrap p={["10px", "20px 40px"]} justify="center" gap="5" align="center">
                <VStack w={["full","60%"]}>
                    <Image src={react} mx="auto" w="300" h="300"></Image>
                </VStack>
                <VStack w={["full","35%"]}>
                    <Heading fontSize="24px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aliquam.</Heading>
                    <p style={{fontSize: "18px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore? Architecto maxime non expedita, assumenda impedit numquam! Accusamus, omnis vel!</p>
                    <HStack justify="space-between">
                        <p>Get Started</p>
                        <Image src="" />
                    </HStack>
                </VStack>
            </Wrap>
            <ChakraLink bg="blackAlpha.600" mb="10px" p="10px 50px" rounded="md" href="">Learn More About The Product</ChakraLink>
        </VStack>
    </>
  )
}

export default Section2