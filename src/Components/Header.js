import { Flex, Image, InputGroup, InputLeftElement, Input, Stack, Text } from '@chakra-ui/react'
import { FileText, Search, Bell, ShoppingBag, HelpCircle, Settings, ChevronDown } from 'react-feather'

const Header = () => {
    return (
        <Flex background={"white"} p={"20px 50px"} alignItems={"center"}>
            <Flex grow={1}>
                <Stack>
                    <Image src='images/logo.png' height={"50px"} />
                </Stack>
                <Stack spacing={4} ml={20}>
                    <InputGroup border={"1px solid black"} borderRadius={5} p={2}>
                        <InputLeftElement pointerEvents='none' paddingTop={4} paddingLeft={2} >
                            <Search size={25} color='grey' />
                        </InputLeftElement>
                        <Input type='text' placeholder='What are you looking for?' border={'none'} />
                    </InputGroup>
                </Stack>
                <Stack spacing={4} ml={5}>
                    <InputGroup border={"1px solid black"} borderRadius={5} p={2}>
                        <InputLeftElement pointerEvents='none' paddingTop={4} paddingLeft={2} >
                            <FileText size={25} color={'grey'} />
                        </InputLeftElement>
                        <Input type='text' placeholder='Quote number, name etc' border={'none'} />
                    </InputGroup>
                </Stack>
            </Flex>
            <Flex grow={1} justifyContent={'end'} alignItems={'center'}>
                <Stack margin={'0 20px'}>
                    <Bell size={25} />
                </Stack>
                <Stack margin={'0 20px'}>
                    <ShoppingBag size={25} />
                </Stack>
                <Stack margin={'0 20px'}>
                    <HelpCircle size={25} />
                </Stack>
                <Stack margin={'0 20px'}>
                    <Settings size={25} />
                </Stack>
                <Flex alignItems={'center'} margin={'0 20px'}>
                    <Stack>
                        <Image src='images/user.png' height={10} borderRadius={"50px"} />
                    </Stack>
                    <Flex direction={'column'} marginLeft={3}>
                        <Flex alignItems={'center'}>
                            <Text fontWeight={'bold'}>Muhammad Z.</Text>
                            <ChevronDown size={20} />
                        </Flex>
                        <Text fontSize={10} color={'grey'}>Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Header;