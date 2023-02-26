import { NavLink } from 'react-router-dom'
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri'
import {Button, Flex, Heading, HStack, Image} from '@chakra-ui/react';
import logo from '../assets/tglogo.svg';
import arrowDown from '../assets/caret-down.svg';
import { useState } from 'react';

const Nav = () => {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(prev=> !prev);
    }

    const menuContent = [
        {id: 1, link: "/", label: "Home"},
        {id: 2, link: "/product", label: "Product", img:arrowDown},
        {id: 3, link: "/price", label: "Pricing"},
        {id: 4, link: "/contact", label: "Contact Us"},
    ]
  return (
    <Flex justify="space-between" p={["10px", "20px 40px"]}>
        <HStack gap="5">
            <HStack className='logo'>
                <Image src={logo} w="10" h="10"/>
                <Heading style={{color:'#003F7D', fontSize:'2rem'}} display={["none", "none", "none", "block"]}>TASKGENICS</Heading>
            </HStack>
            <Flex className={`menu-container ${show ? "active" : undefined}`} gap={4}>
                {menuContent?.map(obj => {
                    return (
                        <HStack>
                            <NavLink color='#003F7D' _active={{backgroundColor:'gray', opacity:'0.6'}} key={obj.id} className={({isActive}) => isActive ? "menu-is-active" : undefined} style={{margin: "0 auto"}} to={obj.link} onClick={handleToggle}>{obj.label}</NavLink>
                            <Image ml={'-2rem'} w={'10px'} src={obj?.img}/>
                        </HStack>
                    )
                })}
            </Flex>
        </HStack>

        <HStack className='nav-btn'>
            <Button color='#003F7D' border='solid #003F7D 2px' borderRadius='4px' bgColor='white' size='sm' display={['none','none','block','block']}><NavLink className="nav-link" to="/login">Login</NavLink></Button>
            <Button bgColor='#003F7D' color='white' size='sm'><NavLink to="/signup">Start For Free</NavLink></Button>
            <RiMenu3Fill className={`${show ? "hidden" : "show"}`} fontSize="30px" onClick={handleToggle}/>
            <RiCloseFill className={`${show ? "show" : "hidden"}`} fontSize="30px" onClick={handleToggle}/>
        </HStack>
    </Flex>
  )
}

export default Nav