import { Flex, Text } from '@chakra-ui/react'
const SingleInfo = ({title, value, py = 2, fz="16px", fw="normal"}) => {
    return (
        <Flex justifyContent={"space-between"} borderBottom={"1px solid #EAEAEA"} py={py} w={"100%"} >
            <Text fontSize={fz} fontWeight={fw}>{title}</Text>
            <Text fontSize={fz} fontWeight={fw}>{value}</Text>
        </Flex>
    );
}

export default SingleInfo;