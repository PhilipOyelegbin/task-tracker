import { Box, Heading, VStack, Text, Grid, GridItem, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";


const Pricing = () => {

  const [show, setShow]= useState(false);
  const [show1, setShow1]= useState(false);
  const [show2, setShow2]= useState(false);
  const [show3, setShow3]= useState(false);
  const pricing = [
    {
      plan:'FREE',
      price:0,
      client:'Free For Your Whole Team',
      for:'For Individuals or Teams Looking to Organise a Project.',
      benefits:[
        'Unlimited Cards',
        'Up To 10 Boards Per Workspace',
        'Unlimited Power-Ups Per Board',
        'Unlimited Storage (10MB/File)',
        '250 Workspace Command Runs Per Month',
        'Custom Backgrounds and Stickers',
        'Unlimited Activity Log',
        'Assignee and Due Dates',
        'IOS And Android Mobile Apps',
        '2-Factor Authentication'
      ],
      btnContent:'Start For Free',
      toggleShow: ()=>{
        setShow((prev)=>!prev);
      },
      view: show?'block':'none'
    },
    {
      plan:'STANDARD',
      price:4,
      client:'For Small Collaboration Teams',
      for:'For Individuals or Teams Looking to Organise a Project.',
      benefits:[
        'Unlimited Cards',
        'Up To 10 Boards Per Workspace',
        'Unlimited Power-Ups Per Board',
        'Unlimited Storage (10MB/File)',
        '250 Workspace Command Runs Per Month',
        'Custom Backgrounds and Stickers',
        'Unlimited Activity Log',
        'Assignee and Due Dates',
        'IOS And Android Mobile Apps',
        '2-Factor Authentication'
      ],
      btnContent:'Try For Free',
      bColor:'transparent',
      color:'#F2F2F2',
      bgColor:'#003F7D',
      toggleShow: ()=>{
        setShow1((prev)=>!prev);
      },
      view: show1?'block':'none'
    },
    {
      plan:'PREMIUM',
      price:8,
      client:'For Large Collaboration Teams',
      for:'For Individuals or Teams Looking to Organise a Project.',
      benefits:[
        'Unlimited Cards',
        'Up To 10 Boards Per Workspace',
        'Unlimited Power-Ups Per Board',
        'Unlimited Storage (10MB/File)',
        '250 Workspace Command Runs Per Month',
        'Custom Backgrounds and Stickers',
        'Unlimited Activity Log',
        'Assignee and Due Dates',
        'IOS And Android Mobile Apps',
        '2-Factor Authentication'
      ],
      btnContent:'Sign Up Now',
      toggleShow: ()=>{
        setShow2((prev)=>!prev);
      },
      view: show2?'block':'none'
    },
    {
      plan:'ORGANIZATION',
      price:12,
      client:'For Company Collaboration',
      for:'For Individuals or Teams Looking to Organise a Project.',
      benefits:[
        'Unlimited Cards',
        'Up To 10 Boards Per Workspace',
        'Unlimited Power-Ups Per Board',
        'Unlimited Storage (10MB/File)',
        '250 Workspace Command Runs Per Month',
        'Custom Backgrounds and Stickers',
        'Unlimited Activity Log',
        'Assignee and Due Dates',
        'IOS And Android Mobile Apps',
        '2-Factor Authentication'
      ],
      btnContent:'Sign Up Now',
      toggleShow: ()=>{
        setShow3((prev)=>!prev);
      },
      view: show3?'block':'none'
    }

  ];
  
  const [mActive, setMActive]= useState(true);
  const renderPricing =pricing.map((plans,index)=>
      {
        
        return(<GridItem bgColor={'#F2F2F2'} borderRadius={8} boxShadow={'base'} key={index} colSpan={{base:'4',sm:'2', md:'2', lg:'1'}} border={'gray solid 1px'} p={5}>
      <Heading as={'h4'} size={'md'} mt={7} p={1} >{plans.plan}</Heading>
      <Text  fontWeight={"bold"} fontSize={15} display={'flex'} >
      <Text mt={'100px'}>$</Text>
         <Text  pl={1} pr={1} position={'relative'}  fontSize={100}>{mActive?plans.price:plans.price*12}</Text>
         <Text mt={'100px'}>USD</Text>
      </Text>
      <Text fontSize={16} mt={2}>{plans.client}</Text>
      <Text fontSize={16} mt={8}>{plans.for}</Text>
      <Text _hover={{cursor:'pointer'}} mt={4} mb={4} color={'#FF782C'} onClick= {plans.toggleShow} display={['block','block','block','none']}><span style={{fontSize:'20px'}}>{plans.view!=='block'?'+':'-'}</span> {plans.view!=='block'?'View':'Hide'} Package</Text>
      {<VStack display={[plans.view,plans.view, plans.view,'block']} w={'100%'} alignItems={'left'} p={4}>
      <Text fontSize={15} fontWeight={"bold"} mt={8}>INCLUDED IN {plans.plan}</Text>
      {plans.benefits.map((benefit, idx)=><ul><li key={idx} style={{fontSize:'12px'}}>{benefit}</li></ul>
      )}
        
      </VStack>}
      <Button border={'2px solid'} bgColor={plans?.bgColor} borderColor={plans.bColor?plans.bColor:'#003F7D'} color={plans.color?plans.color:'#003F7D'} fontSize={10}>{plans.btnContent}</Button>
      </GridItem>)}
    );
  
  return (
    <Box borderBottomRadius={['87.5px','125px','250px']} p={[2,2,5]} paddingBottom={['10rem','10rem','20rem']} bgColor={'#021528'} >
      <VStack >
      <Heading size={['lg', 'xl', 'xl']} 
        color={'#F2F2F2'}

        p={3}>
        Taskgenic your way.
        </Heading>
      <Text color={'#F2F2F2'} fontSize={[16, 18, 20]} textAlign={'center'}>Trusted by millions, Taskgenic power team all around the world</Text>
      <Text color={'#F2F2F2'} fontSize={18}>Explore which option is right for you.</Text>
      </VStack>
      <HStack alignSelf={'center'} justify={'center'} pt={'2rem'}>
        <Button bgColor={mActive?'#F2F2F2':'transparent'} color={mActive?'#021528':'#F2F2F2'} borderRadius={'20px'} onClick={()=>{setMActive(true)}} w={'90px'}>Monthly</Button>
        <Button bgColor={mActive?'transparent':'#F2F2F2'} color={mActive?'#F2F2F2':'#021528'} borderRadius={'20px'} onClick={()=>{setMActive(false)}} w={'90px'}>Yearly</Button>

      </HStack>
      <Grid templateColumns={'repeat(4, 1fr)'} pl={[4,4,4,8]} pr={[4,4,4,8]}gap={'5'} mt={12}>
        {renderPricing}
      </Grid>
    </Box>
  )
};

export default Pricing;
