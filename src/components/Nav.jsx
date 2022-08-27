import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, CloseButton, Flex, Heading, Link as ChakraLink, MenuButton} from '@chakra-ui/react';

const Nav = () => {
    const menuContent = [
        {id: 1, link: "", label: "Home"},
        {id: 2, link: "", label: "About Us"},
        {id: 3, link: "", label: "Pricing"},
        {id: 4, link: "", label: "Contact Us"},
    ]
  return (
    <nav>
        <Flex flexDir="row" justify="space-between" align="center" padding={["5px 10px", "10px 40px"]} background="transparent">
            <Heading>Taskgenics</Heading>
            <Breadcrumb separator="" fontSize="xl" display={["none", "flex"]} flexDir="row" justify="space-between">
                {menuContent?.map(obj => {
                    return(
                        <BreadcrumbItem key={obj.id}>
                            <BreadcrumbLink _hover={{textDecor: "none"}} href={obj.link}>{obj.label}</BreadcrumbLink>
                        </BreadcrumbItem>
                    )
                })}
                <BreadcrumbItem>
                    <BreadcrumbLink _hover={{textDecor: "none"}} href="">Login</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <ChakraLink _hover={{textDecor: "none"}}  bg="blackAlpha.600" padding="10px" rounded="md" fontSize="xl" href="">Start For Free</ChakraLink>
            {/* <Button>
                <MenuButton></MenuButton>
                <CloseButton></CloseButton>
            </Button> */}
        </Flex>
    </nav>
  )
}

export default Nav