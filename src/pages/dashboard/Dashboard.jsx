import React from'react'
import {Box, Button, HStack,VStack} from '@chakra-ui/react'
import caretLeft from '../../assets/caret-left.svg'
import caretDown from '../../assets/caret-down.svg'
import person from '../../assets/person.svg'
import boards from '../../assets/boards.svg'
import member from '../../assets/member-icon.svg'
import settings from '../../assets/settings.svg'
import addition from '../../assets/plus.svg'
import table from '../../assets/table.svg'
import calendar from '../../assets/calendar.svg'
import toDo from '../../assets/todo.svg'
import help from '../../assets/help.svg'
import logOut from '../../assets/log-out.svg'
import Dots from '../../assets/3dots.svg'
import addTitle from '../../assets/addTitle.svg'
import copy from '../../assets/copyIcon.svg'
const Dashboard = () => {
  return (
    <HStack>
      <VStack bg={'#f5f5f5'} width={['30%','40%','30%']} alignItems={'flex-start'} pt={'2rem'} pb={'6rem'}>
        <HStack gap="1rem" w={'60%'} margin={'auto'}>
          <HStack width={'95%'}>
            <img src ={person} alt =''/>
            <VStack gap='0' alignItems={'flex-start'}>
              <p style={{fontSize:'1rem', fontWeight:'500'}}>Brooklyn Simmons</p>
              <p>Free</p>
            </VStack>
          </HStack>
          <img style={{height:'12px'}} src={caretLeft} alt=''/>
        </HStack>
        <VStack w={'100%'} alignItems={'flex-start'} gap="5" style={{marginTop:'40px'}}>
          <HStack w={'60%'} margin={'auto'}>
            <img src ={boards} alt =''/>
            <p>Boards</p>
          </HStack>
          <HStack w={'60%'} alignSelf={'center'} gap={'5%'}>
            <HStack width={'95%'}>
              <img src ={member} alt =''/>
              <p>Members</p>
            </HStack>
            <img style={{width:'12px'}} src ={addition} alt =''/>
          </HStack>
          <HStack w={'60%'} alignSelf={'center'} gap={'5%'}>
            <HStack width={'95%'}>
              <img src ={settings} alt =''/>
              <p>Settings</p>
            </HStack>
            <img style={{width:'12px'}} src ={caretDown} alt =''/>
          </HStack>
          <p style={{width:'60%',fontWeight:'500', alignSelf:'center'}}>Workspace Views</p>
          <HStack w={'60%'} alignSelf={'center'}>
            <img src ={table} alt =''/>
            <p>Table</p>
          </HStack>
          <HStack w={'60%'} alignSelf={'center'}>
            <img src ={calendar} alt =''/>
            <p>Calendar</p>
          </HStack>
          <HStack w={'60%'} alignSelf={'center'} gap={'5%'}>
            <p style={{width:'95%'}}>Your boards</p>
            <img style={{width:'12px'}} src ={addition} alt =''/>
          </HStack>
          <HStack w={'60%'} alignSelf={'center'}>
            <img src ={toDo} alt =''/>
            <p>Todo</p>
          </HStack>
          <HStack style={{marginTop:'3rem'}} w={'60%'} alignSelf={'center'}>
            <img src ={help} alt =''/>
            <p>Help</p>
          </HStack>
          <HStack w={'60%'} alignSelf={'center'}>
            <img src ={logOut} alt =''/>
            <p>Log out</p>
          </HStack>
        </VStack>
      </VStack>
      <VStack alignItems={'flex-start'} marginTop={'0px'} width={['70%','60%','70%']} gap={'30px'}>
        <HStack  justifyContent={'center'} w={'100%'} gap="5">
          <Box as={HStack} bgColor={'#F2F2F2'} boxShadow={'base'} p={'0.5rem'} borderRadius={'0.5rem'}>
            <img src ={boards} alt =''/>
            <p>Boards</p>
          </Box>
          <Box as={HStack} boxShadow={'base'} p={'0.5rem'} borderRadius={'0.5rem'}>
            <img src ={toDo} alt =''/>
            <p>To do</p>
          </Box>
          <Box as={HStack} bgColor={'#F2F2F2'} boxShadow={'base'} p={'0.5rem'} borderRadius={'0.5rem'}>
            <img style={{width:'30px'}} src ={person} alt =''/>
            <p style={{fontSize:'0.8rem',fontWeight:'500'}}>Brooklyn Simmons</p>
          </Box>
          <Box as={HStack} bgColor={'#F2F2F2'} boxShadow={'base'} p={'0.5rem'} borderRadius={'0.5rem'}>
            <p>Filter</p>
            <img style={{width:'12px'}} src ={caretDown} alt =''/>
          </Box>
          <Box bgColor={'#FF5004'} boxShadow={'base'} p={'0.5rem'} borderRadius={'0.5rem'}>
            Share
          </Box>
        </HStack>
        <div style={{width:'100%',gap:'10%',justifyContent:'center',display:'flex',paddingBottom:'2rem'}}>
          <VStack gap={'5'}>
            <VStack boxShadow={'md'} alignItems='flex-start' width={['100%']} padding='2rem'>
              <HStack width={'100%'} gap={'40%'}>
                <p style={{ width:'50%',fontSize:'1.5rem'}}>To Do</p>
                <img  src={Dots} alt =''/>
              </HStack>
              <VStack>
                <textarea style={{width:'334px', padding:'1rem', backgroundColor:'#F2F2F2', height:'180px'}} placeholder='Enter a title for this card' />
                <img style={{position:'absolute',marginTop:'150px', marginLeft:'290px', zIndex:'1'}} src={addTitle} alt =''/>
              </VStack>
              <HStack gap={'35%'} >
                <HStack gap={'4'}>
                  <Button height={'30px'} bgColor='#003F7D' fontSize={'0.8rem'} color={'white'}>Add Card</Button> 
                  <Button height={'30px'} borderWidth={'1px'} fontSize={'0.8rem'} borderColor='#003F7D' color={'black'}>Delete Card</Button> 
                </HStack>
                <img style={{alignSelf:'flex-start'}} src ={Dots} alt =''/>
              </HStack>
            </VStack>
            <VStack boxShadow={'md'} alignItems='flex-start' width={['100%']} padding='1rem'>
              <HStack width={'100%'} gap={'25%'} marginLeft='1rem' mt={'1rem'} mr={'1rem'}>
                <p style={{ width:'50%',fontSize:'1.5rem'}}>To Do</p>
                <img  src={Dots} alt =''/>
              </HStack>
            <Box as={HStack} bgColor={'#F2F2F2'} width={'100%'} pl='1rem' height={'88px'} borderRadius={'4px'}>
              <img style={{width:'12px'}} src={addition} alt =''/>
              <span style={{width:'85%'}}>Add new card</span>
              <img style={{width:'20px'}} src={copy} alt =''/>            
            </Box>
          </VStack>
          </VStack>
          <VStack gap={'5'}>
            <VStack boxShadow={'md'} alignItems='flex-start' width={['100%']} padding='2rem'>
              <HStack width={'100%'} gap={'40%'}>
                <p style={{ width:'50%',fontSize:'1.5rem'}}>Doing</p>
                <img  src={Dots} alt =''/>
              </HStack>
              <VStack>
                <textarea style={{width:'334px', padding:'1rem', backgroundColor:'#F2F2F2', height:'180px'}} placeholder='Enter a title for this card' />
                <img style={{position:'absolute',marginTop:'150px', marginLeft:'290px', zIndex:'1'}} src={addTitle} alt =''/>
              </VStack>
              <HStack gap={'35%'} >
                <HStack gap={'4'}>
                  <Button height={'30px'} bgColor='#003F7D' fontSize={'0.8rem'} color={'white'}>Add Card</Button> 
                  <Button height={'30px'} borderWidth={'1px'} fontSize={'0.8rem'} borderColor='#003F7D' color={'black'}>Delete Card</Button> 
                </HStack>
                <img style={{alignSelf:'flex-start'}} src ={Dots} alt =''/>
              </HStack>
            </VStack>
            <HStack boxShadow={'md'} bgColor={'#F2F2F2'} alignItems='center' width={['100%']} padding='2rem'>
              <img style={{width:'12px'}} src={addition} alt =''/>
              <span>Add another list</span>
            </HStack>
          </VStack>

        </div>
      </VStack>
      
    </HStack>
  )
}

export default Dashboard