import { Heading, HStack,Box, Image,Text, VStack, Link as ChakraLink, Button, textDecoration } from "@chakra-ui/react";
import heroBg from '../../assets/heribg.svg'

const Hero = () => {
  return (
    <HStack h={'full'}  align="center" bgImage= {['none','none',heroBg]}  bgSize='cover'  bgRepeat='no-repeat'>
      <Box padding={["10px", "20px",'40px']} bgColor={['white','white','transparent']} backdropFilter='auto' backdropBrightness='30%' >

        <VStack width={["full", "full", "60%"]} mt={['2rem', '2rem', '20%']} mb={['2rem','2rem', '5%']} ml={['0rem','0rem','2rem']}>
            <Heading fontSize={['1.5rem','2rem','3rem']} color={['black','black','white']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aliquam.</Heading>
            <Text fontSize={['0.8rem','1rem','1.2rem']} color={['gray','gray','#F2F2F2']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore? Architecto maxime non expedita, assumenda impedit numquam! Accusamus, omnis vel!</Text>
            <Button color='white' bgColor='#003F7D' variant='solid' h={['50px','70px']} fontSize={['1rem','1.5rem']} w={['200px', '350px','250px']}  alignSelf={["self-start", "flex-start"]} p={["10px 20px", "10px 50px"]}><ChakraLink textAlign="center" _hover="none" href="/signup">Start For Free</ChakraLink></Button>
        </VStack>
      </Box>
    </HStack>
  )
}

export default Hero