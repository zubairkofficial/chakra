import { Container, Text } from '@chakra-ui/react'
const TimeOption = ({ text }) => {
    return (
        <Container bg={"#ebeefa"} p={2} pl={4}>
            <Text>{text}</Text>
        </Container>
    );
}

export default TimeOption;