import { NavLink } from 'react-router-dom'
import {Flex, Heading, HStack, Image} from '@chakra-ui/react';
import react from '../assets/react.svg';

const Nav = () => {
    const menuContent = [
        {id: 1, link: "/", label: "Home"},
        {id: 2, link: "/about", label: "About Us"},
        {id: 3, link: "/price", label: "Pricing"},
        {id: 4, link: "/contact", label: "Contact Us"},
    ]
  return (
    <Flex flexDir="row" justify="space-between" align="center" p={["5px 10px", "10px 40px"]} background="transparent">
        <HStack gap="5">
            <HStack>
                <Image src={react} w="10" h="10"/>
                <Heading display={["none", "none", "none", "block"]}>TASKGENICS</Heading>
            </HStack>
            <HStack display={["none", "none", "flex"]} flexFlow={["column", "row"]} alignItems="center" gap="3">
                {menuContent?.map(obj => {
                    return (
                        <NavLink key={obj.id} to={obj.link}>{obj.label}</NavLink>
                    )
                })}
            </HStack>
        </HStack>

        <HStack gap="10">
            <NavLink className="nav-link" to="/login">Login</NavLink>
            <NavLink style={{background: "gray", padding: "10px", borderRadius: "10px"}} to="/signup">Start For Free</NavLink>
            {/* <FaBars display={["block", "none"]}></FaBars> */}
        </HStack>
    </Flex>
  )
}

export default Nav