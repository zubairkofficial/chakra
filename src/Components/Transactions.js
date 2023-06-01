import { Table,Tbody, Tr, Td, Th } from '@chakra-ui/react'
const Transactions = () => {
    const transactions = [
        {id:1, date: "05/02/2023", account_no: "DB875465413", account_name: "Zubair", trans_type: "Deposit", net_amount: 541, status: "Complete"},
        {id:2, date: "05/02/2023", account_no: "DB875465413", account_name: "Zubair", trans_type: "Deposit", net_amount: 541, status: "Complete"},
        {id:3, date: "05/02/2023", account_no: "DB875465413", account_name: "Zubair", trans_type: "Deposit", net_amount: 541, status: "Complete"},
        {id:4, date: "05/02/2023", account_no: "DB875465413", account_name: "Zubair", trans_type: "Deposit", net_amount: 541, status: "Upcoming"},
        {id:5, date: "05/02/2023", account_no: "DB875465413", account_name: "Zubair", trans_type: "Deposit", net_amount: 541, status: "Complete"},
    ]
    return (
        <Table variant="striped" colorScheme="gray">
            <Tr>
                <Th>Date</Th>
                <Th>Account Number</Th>
                <Th>Account Name</Th>
                <Th>Transaction Type</Th>
                <Th>Net Amount</Th>
                <Th>Status</Th>
            </Tr>
            <Tbody>
            {transactions.map(transaction => {
                return <Tr>
                    <Td>{ transaction.date }</Td>
                    <Td>{ transaction.account_no }</Td>
                    <Td>{ transaction.account_name }</Td>
                    <Td>{ transaction.trans_type }</Td>
                    <Td>${ transaction.net_amount.toFixed(2) }</Td>
                    <Td>{ transaction.status }</Td>
                </Tr>;
            })}
            </Tbody>
        </Table>
    );
}

export default Transactions;