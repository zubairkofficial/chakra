import Header from "../Components/Header";
import { Stack, Tabs, TabList, Tab, TabPanels, TabPanel, Flex, Card, CardBody, Link } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import CashAccount from "../Components/CashAccount";
import DepositInfo from "../Components/DepositInfo";
import SingleInfo from "../Components/SingleInfo";
import Transactions from "../Components/Transactions";
const Dashboard = () => {
    return (
        <Stack>
            <Header />
            <Navbar />
            <Stack p={"20px 70px"}>
                <Tabs w={"100%"} colorScheme="#1F2391" _active={"#1F2391"}>
                    <TabList>
                        <Tab fontWeight={"bold"}>Deposit</Tab>
                        <Tab>Withdrawals</Tab>
                        <Tab>Journal</Tab>
                        <Tab>Account Transfer</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Flex>
                                <Card flex={1} m={1} p={2} shadow='md'>
                                    <CardBody>
                                        <CashAccount />
                                        <DepositInfo />
                                    </CardBody>
                                </Card>
                                <Flex flex={1} m={1} direction={"column"}>
                                    <Card p={2} shadow='md'>
                                        <CardBody>
                                            <SingleInfo title={"Account Type"} fz="24px" fw="bold" py={5} />
                                            <SingleInfo title={"Cash"} value={"$521,148,28.69"} fz="18px" py={5} />
                                            <SingleInfo title={"Margin"} value={"$120,963,74.14"} fz="18px" py={5} />
                                            <SingleInfo title={"Retirement"} value={"$120,96374.14"} fz="18px" py={5} />
                                            <br/>
                                            <Link color={'#1F2391'}>Go to Balance</Link>
                                        </CardBody>
                                    </Card>
                                    <Card p={2} mt={5} shadow='md'>
                                        <CardBody>
                                            <Transactions />
                                        </CardBody>
                                    </Card>
                                </Flex>
                            </Flex>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Stack>
        </Stack>
    )
}

export default Dashboard;