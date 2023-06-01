import { Flex, Text, HStack } from '@chakra-ui/react'
const Navbar = () => {
    return (
        <Flex bg={'#1F2391'} color={'white'} p={"10px 50px"} >
            <HStack>
                <Text p={'10px 30px'}>My Apex</Text>
                <Text p={'10px 30px'}>Accounts</Text>
                <Text p={'10px 30px'}>Tradings</Text>
                <Text p={'10px 30px'} bg={'#2727A9'}>Move Money</Text>
                <Text p={'10px 30px'}>Education</Text>
                <Text p={'10px 30px'}>Tools</Text>
                <Text p={'10px 30px'}>Research</Text>
            </HStack>
        </Flex>
    );
}

export default Navbar;