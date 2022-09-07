import { NavLink } from 'react-router-dom'
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri'
import {Button, Flex, Heading, HStack, Image} from '@chakra-ui/react';
import logo from '../assets/tglogo.jpg';
import { useState } from 'react';

const Nav = () => {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(prev=> !prev);
    }

    const menuContent = [
        {id: 1, link: "/", label: "Home"},
        {id: 2, link: "/about", label: "About Us"},
        {id: 3, link: "/price", label: "Pricing"},
        {id: 4, link: "/contact", label: "Contact Us"},
    ]
  return (
    <Flex justify="space-between" p={["10px", "20px 40px"]}>
        <HStack gap="5">
            <HStack className='logo'>
                <Image src={logo} w="10" h="10"/>
                <Heading display={["none", "none", "none", "block"]}>TASKGENICS</Heading>
            </HStack>
            <Flex className={`menu-container ${show ? "active" : undefined}`}>
                {menuContent?.map(obj => {
                    return (
                        <NavLink key={obj.id} className={({isActive}) => isActive ? "menu-is-active" : undefined} style={{margin: "0 auto"}} to={obj.link} onClick={handleToggle}>{obj.label}</NavLink>
                    )
                })}
            </Flex>
        </HStack>

        <HStack className='nav-btn'>
        <Button colorScheme='orange' variant='ghost' size='sm'><NavLink className="nav-link" to="/login">Login</NavLink></Button>
            <Button colorScheme='orange' variant='solid' size='sm'><NavLink to="/signup">Start For Free</NavLink></Button>
            <RiMenu3Fill className={`${show ? "hidden" : "show"}`} fontSize="30px" onClick={handleToggle}/>
            <RiCloseFill className={`${show ? "show" : "hidden"}`} fontSize="30px" onClick={handleToggle}/>
        </HStack>
    </Flex>
  )
}

export default Nav