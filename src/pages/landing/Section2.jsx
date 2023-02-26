import { Button, Heading, HStack, Image, Link as ChakraLink, VStack, Wrap } from "@chakra-ui/react";
import section2 from '../../assets/section2.svg';
import star from '../../assets/star.svg';
import team1 from '../../assets/team1.svg';
import caretRight from '../../assets/caret-right.svg';
import team2 from '../../assets/team2.svg';

const Section2 = () => {
  return (
    <>
        <VStack py="10" px="2" bgColor={'#F2F2F2'}>
            <VStack>
                <Image src={star} p="5" w="100" h="100"/>
            </VStack>

            <Heading color={'#003F7D'} textAlign="center" fontSize={['1.5rem','1.6rem','2rem']}>Software Built For Remote And Hybrid Team</Heading>
            
            <HStack p={["10px", "20px 40px"]}  h={['550px','700px','500px']}  flexDir={["column", "column", "row"]} justify={['flex-start','flex-start',"center"]}>
                <Image src={section2}  w={['400','600',"400"]} h={['400','600',"400"]}></Image>
                <VStack w={["95%", "95%", "35%"]}>
                    <Heading alignSelf={'flex-start'} color={'black'} fontSize="24px">Get The Reports You Need</Heading>
                    <p style={{fontSize: "12px", color:'black'}}>Gain hidden insights into the progress and profitability of your projects with real-time budget and resource tracking. Adjust schedules and workload allocation to quickly pivot and reach goals.nd resource tracking. Adjust schedules and workload allocation to quickly pivot and reach goals.Gand workload allocation to quickly pivot and reach goals.</p>
                    <HStack as={'button'} p={'1rem'} border={'1px solid'} height={'40px'} borderRadius={'4px'} borderColor={'#FF5004'} alignSelf="self-start" justifyContent="space-between"w="200px">
                        <p style={{ fontSize:'0.8rem', color:' #FF5004'}}>Get Started</p>
                        <img style={{width:'6px'}} src={caretRight}/>
                    </HStack>
                </VStack>
            </HStack>

            <HStack  p={["10px", "20px 40px"]}  h={['550px','700px','500px']} flexDir={["column-reverse", "column-reverse", "row"]} justify="center" gap="1" align="center">
                <VStack w={["95%", "95%", "35%"]}>
                    <Heading alignSelf={'flex-start'} color={'black'} fontSize="24px">Get The Reports You Need</Heading>
                    <p style={{fontSize: "12px", color:'black'}}>Gain hidden insights into the progress and profitability of your projects with real-time budget and resource tracking. Adjust schedules and workload allocation to quickly pivot and reach goals.nd resource tracking. Adjust schedules and workload allocation to quickly pivot and reach goals.Gand workload allocation to quickly pivot and reach goals.</p>
                    <HStack as={'button'} p={'1rem'} border={'1px solid'} height={'40px'} borderRadius={'4px'} borderColor={'#FF5004'} alignSelf="self-start" justifyContent="space-between"w="200px">
                        <p style={{ fontSize:'0.8rem', color:' #FF5004'}}>Get Started</p>
                        <img style={{width:'6px'}} src={caretRight}/>
                    </HStack>
                </VStack>
                <Image src={team1} w={['400','600',"400"]} h={['400','600',"400"]}></Image>
            </HStack>

            <HStack p={["10px", "20px 40px"]} h={['550px','700px','500px']} mb={'5'} flexDir={["column", "column", "row"]} justify="center" gap={['1','1','5','5']} align="center">
                <Image src={team2}  w={['400','600',"400"]} h={['400','600',"400"]}></Image>
                <VStack w={["95%", "95%", "35%"]}>
                    <Heading color={'black'} fontSize="24px" alignSelf={'flex-start'}>Collaborative To The Core</Heading>
                    <p style={{fontSize: "12px", color:'black'}}>Gain hidden insights into the progress and profitability of your projects with real-time budget and resource tracking. Adjust schedules and workload allocation to quickly pivot and reach goals.nd resource tracking. Adjust schedules and workload allocation to quickly pivot and reach goals.Gand workload allocation to quickly pivot and reach goals.</p>
                    <HStack as={'button'} p={'1rem'} border={'1px solid'} height={'40px'} borderRadius={'4px'} borderColor={'#FF5004'} alignSelf="self-start" justifyContent="space-between" w="200px">
                        <p style={{ fontSize:'0.8rem', color:' #FF5004'}}>Get Started </p>
                        <img style={{width:'6px'}} src={caretRight}/>
                    </HStack>
                </VStack>
            </HStack>

        </VStack>
    </>
  )
}

export default Section2