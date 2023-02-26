import {VStack,HStack, Image,Text, Button, Heading, Grid, GridItem} from '@chakra-ui/react'
import ariga from '../../assets/ariga.svg';
import alphax from '../../assets/alphax.svg';
import Busha from '../../assets/Busha.svg';
import acumen from '../../assets/acumen.svg';
import Panda from '../../assets/panda.svg';
import clock from '../../assets/clock.svg';
import portfolio from '../../assets/portfolio.svg';
import task_tools from '../../assets/task_tools.svg';
import assignment from '../../assets/assignment.svg';

const Section1 =()=>{
    const features= [
        {
            img: clock,
            title:'track and review',
            tagline:'Sit back and watch the project become alive'
        },
        {
            img: task_tools,
            title:'assign tasks',
            tagline:'assign tasks to team members so that each members know what to do'
        },
        {
            img: portfolio,
            title:'create projects',
            tagline:'create projects, tasks , subtasks and everything else the project requires for best results'
        },
        {
            img: assignment,
            title:'set deadlines and prioritites',
            tagline:'set start dates, deadlines & priority so that members know when and what to focus on'
        }
    ]

    return(
        <>
            <VStack>
                <HStack bgColor={'#A0C1FF'} opacity={'0.99'} mt={'-2rem'} h={['50px','100px']} borderRadius={'8px'} p={['1rem','2rem','2rem','4rem']} justifyContent={'space-between'} w={'80%'}>
                    <Image w={'15%'} src={ariga} ></Image>
                    <Image w={'15%'} src={alphax} ></Image>
                    <Image w={'15%'} src={Busha} ></Image>
                    <Image w={'15%'} src={acumen} ></Image>
                    <Image w={'15%'} src={Panda} ></Image>
                </HStack>
                <HStack flexDir={['column', 'column','column','row']} padding={['1rem','1rem','1rem','5rem']} justify={'center'} gap={['1rem','1rem','5rem']}>
                    <VStack w={['90%','90%','90%','50%']}>
                        <Heading textTransform={'capitalize'} textAlign={'center'}> Manage and track your projects on taskgenic</Heading>
                        <Text textTransform={'capitalize'} > No more need to switch between two or more tools, save time and data by working on a single project management platform that has all the necessary features integrated</Text>
                        <Button color={'#FF782C'}  border={'1px solid'}>View all features</Button>
                    </VStack>
                
                    <VStack>
                        <Grid w={['100%', '100%', '100%', '50%']} templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(2,1fr)','repeat(2, 1fr)']} gap={'5'} mt={'3'} >

                            {
                                features.map((feature,idx)=>
                                    <GridItem  w={'250px'} borderRadius={'8px'} bgColor={'#FFFFFF'} h={'250px'} mb={'2rem'} p={'20px'} justifyItems={'center'} key={idx}>
                                        <Image w={'30px'} pb={'1rem'} src={feature.img} alt={feature.name} />
                                        <Text fontSize={['0.8rem','0.8rem','1.3rem','1.3rem']} pb={'1rem'} textTransform={'capitalize'}>{feature.title}</Text>
                                        <Text fontSize={'1rem'} textTransform={'capitalize'}>{feature.tagline}</Text>
                                    </GridItem>   
                                )
                            }
                        </Grid>
                    </VStack>
                </HStack>
            </VStack>
        </>
    )
}
export default Section1