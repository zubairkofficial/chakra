import { Select, Button, Stack, Text, VStack, Radio, RadioGroup } from '@chakra-ui/react'
import SingleInfo from './SingleInfo';
import TimeOption from './TimeOption';
const DepositInfo = () => {
    return (
        <VStack alignItems={"baseline"} mt={3} spacing={3}>
            <Text>Deposit Type</Text>
            <RadioGroup value="Wire Transfer">
                <Stack direction='row' spacing={10}>
                    <Radio value='ACH'>ACH</Radio>
                    <Radio value='Wire Transfer'>Wire Transfer</Radio>
                    <Radio value='Account Transfer'>Account Transfer</Radio>
                </Stack>
            </RadioGroup>
            <SingleInfo title={"Bank"} value={"Bank of America"} />
            <SingleInfo title={"Credit To"} value={"Credit To"} />
            <SingleInfo title={"Benefit Of"} value={"Benefit Of"} />
            <Text>Frequency</Text>
            <Select>
                <option value='onetime'>One Time</option>
                <option value='twotime'>Two Time</option>
                <option value='threetime'>Three Time</option>
            </Select>
            <VStack w={'50%'} spacing={0.5}>
                <TimeOption text={"Weekly"} />
                <TimeOption text={"Every Other Week"} />
                <TimeOption text={"Monthly"} />
                <TimeOption text={"Quarterly"} />
                <TimeOption text={"Annual"} />
            </VStack>
            <Text>Transaction Type</Text>
            <RadioGroup value="60">
                <Stack direction='row' spacing={10}>
                    <Radio value='60'>60-days rollover</Radio>
                </Stack>
            </RadioGroup>
            <Button bg={"#A915AB"} mt={5} size='lg' color={"white"}>Continue</Button>
        </VStack>
    );
}

export default DepositInfo;