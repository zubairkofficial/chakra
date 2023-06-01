import { Flex, Text, Link } from '@chakra-ui/react'
const CashAccount = () => {
    return (
        <Flex bg={'#EAEAEA'} p={8} borderRadius={10}>
            <Flex direction={"column"} grow={1}>
                <Text fontWeight={"bold"}>Cash Account</Text>
                <Text>8786845498 - Muhammad Z.</Text>
            </Flex>
            <Link color={'#1F2391'}>Change</Link>
        </Flex>
    );
}

export default CashAccount;