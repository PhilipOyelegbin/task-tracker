import { Box, Heading, VStack, Text, Grid, GridItem } from "@chakra-ui/react";


const Pricing = () => {
  return (
    <Box p={5} bgGradient={'linear(to-b, orange.100, blue.200, white)'} >
      <VStack >
      <Heading size={['lg', 'xl', 'xl']} 
        bgGradient={'radial(orange, blue, orange)'}
        bgClip={'text'}
        p={3}>
        Taskgenic your way.
        </Heading>
      <Text fontSize={[16, 18, 20]} textAlign={'center'}>Trusted by millions, Taskgenic power team all around the world</Text>
      <Text fontSize={18}>Explore which option is right for you.</Text>
      </VStack>
      <Grid templateColumns={'repeat(4, 1fr)'} mt={12}>
        <GridItem colSpan={{base:'4', md:'2', lg:'1'}} border={'gray solid 1px'} p={5}>
          <Heading as={'h4'} size={'md'} p={1} >FREE</Heading>
          <Text as={'sub'} fontSize={15} display={'flex'} mt={10}>
            $ <Text pb={3} position={'relative'} top={-2} fontSize={30}>0</Text> USD
          </Text>
          <Text fontSize={16} mt={2}>Free your whole team</Text>
          <Text fontSize={18} mt={8}>For individaul or team looking to organise any project.</Text>
        </GridItem>

        <GridItem colSpan={{base:'4', md:'2', lg:'1'}} border={'gray solid 1px'} p={5}>
          <Heading as={'h4'} size={'md'} p={1} >STANDARD</Heading>
          <Text as={'sub'} fontSize={15} display={'flex'} mt={10}>
            $ <Text pb={3} position={'relative'} top={-2} fontSize={30}>5</Text> USD
          </Text>
          <Text fontSize={16} mt={2}>Per user/month if billed annually (so billed monthly)</Text>
          <Text fontSize={18} mt={8}>For small teams that need to manage work and scale collaboration.</Text>
        </GridItem>

        <GridItem colSpan={{base:'4', md:'2', lg:'1'}} border={'blue solid 2px'} p={5}>
          <Heading as={'h4'} size={'md'} p={1} >PREMIUM</Heading>
          <Text as={'sub'} fontSize={15} display={'flex'} mt={10}>
            $ <Text pb={3} position={'relative'} top={-2} fontSize={30}>10</Text> USD
          </Text>
          <Text fontSize={16} mt={2}>Per user/month if billed annually ($12.50 billed monthly)</Text>
          <Text fontSize={18} mt={8}>For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc.</Text>
        </GridItem>

        <GridItem colSpan={{base:'4', md:'2', lg:'1'}} border={'gray solid 1px'} p={5}>
          <Heading as={'h4'} size={'md'} p={1} >ENTERPRISE</Heading>
          <Text as={'sub'} fontSize={15} display={'flex'} mt={10}>
            $ <Text pb={3} position={'relative'} top={-2} fontSize={30}>17.50</Text> USD
          </Text>
          <Text fontSize={16} mt={2}>Per user/month - billed annually ($210.00 annual price per user)</Text>
          <Text fontSize={18} mt={8}>For organizations that need to connect work across teams with more security and controls.</Text>
        </GridItem>
      </Grid>
    </Box>
  )
};

export default Pricing;
