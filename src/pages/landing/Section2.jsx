import { Heading, HStack, Image, Link as ChakraLink, VStack, Wrap } from "@chakra-ui/react";
import {FaArrowRight} from 'react-icons/fa';
import react from '../../assets/react.svg';

const Section2 = () => {
  return (
    <>
        <VStack py="10" px="2">
            <Wrap p={["10px", "20px 40px"]} justify="center" gap="5" align="center">
                <VStack w={["full", "full", "30%"]}>
                    <Heading>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aliquam.</Heading>
                </VStack>
                <VStack w={["full", "full", "30%"]}>
                    <Heading fontSize="24px">Work How You Want</Heading>
                    <p style={{fontSize: "18px"}}>Whether You're Working From Home,At The Office Or At The Job Sites,We Provide Flexible Tools So You Can Connect And Collaborate On Waterfall Projects, Agile Projects And Everything In Between</p>
                </VStack>
                <VStack w={["full", "full", "30%"]}>
                    <Heading fontSize="24px">Manage Budget And Resources</Heading>
                    <p style={{fontSize: "18px"}}>Gain Hidden Insights Into The Progress And Profitability Of Your Projects With Real-Time Budget And Resource Tracking. Adjust Schedules And Workload Allocation To Quickly Pivot And Reach Goals.</p>
                </VStack>
            </Wrap>

            <HStack p={["10px", "20px 40px"]} flexDir={["column-reverse", "column-reverse", "row"]} justify="center" gap="5" align="center">
                <VStack w={["full", "full", "60%"]}>
                    <Image src={react} mx="auto" w="300" h="300"></Image>
                </VStack>
                <VStack w={["full", "full", "35%"]}>
                    <Heading fontSize="24px">Get The Reports You Need</Heading>
                    <p style={{fontSize: "18px"}}>Gain Hidden Insights Into The Progress And Profitability Of Your Projects With Real-Time Budget And Resource Tracking. Adjust Schedules And Workload Allocation To Quickly Pivot And Reach Goals.</p>
                </VStack>
            </HStack>

            <VStack>
                <Image src={react} p="5" w="100" h="100"/>
            </VStack>

            <Heading textAlign="center">Software Built For Remote And Hybrid Team</Heading>
            <HStack p={["10px", "20px 40px"]} flexDir={["column-reverse", "column-reverse", "row"]} justify="center" gap="5" align="center">
                <VStack w={["full", "full", "35%"]}>
                    <Heading fontSize="24px">Get The Reports You Need</Heading>
                    <p style={{fontSize: "18px"}}>Gain Hidden Insights Into The Progress And Profitability Of Your Projects With Real-Time Budget And Resource Tracking. Adjust Schedules And Workload Allocation To Quickly Pivot And Reach Goals.</p>
                    <HStack justify="space-between">
                        <p>Get Started</p>
                        <FaArrowRight/>
                    </HStack>
                </VStack>
                <VStack w={["full", "full", "60%"]}>
                    <Image src={react} mx="auto" w="300" h="300"></Image>
                </VStack>
            </HStack>
            <Wrap p={["10px", "20px 40px"]} justify="center" gap="5" align="center">
                <VStack w={["full", "full", "60%"]}>
                    <Image src={react} mx="auto" w="300" h="300"></Image>
                </VStack>
                <VStack w={["full", "full", "35%"]}>
                    <Heading fontSize="24px">Collaborative To The Core</Heading>
                    <p style={{fontSize: "18px"}}>Gain Hidden Insights Into The Progress And Profitability Of Your Projects With Real-Time Budget And Resource Tracking. Adjust Schedules And Workload Allocation To Quickly Pivot And Reach Goals.</p>
                    <HStack justify="space-between">
                        <p>Get Started</p>
                        <FaArrowRight/>
                    </HStack>
                </VStack>
            </Wrap>
            <ChakraLink bg="blackAlpha.600" mb="10px" p={["10px 20px", "10px 50px"]} textAlign="center" rounded="md" href="">Learn More About The Product</ChakraLink>
        </VStack>
    </>
  )
}

export default Section2