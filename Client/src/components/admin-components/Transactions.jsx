import TableTransactions from './TableTransactions'
import TransactionChart from './TransactionChart'
const Transactions = () => {
    return (
        <div className='mt-16 width-full flex items-center justify-center'>
            <div className='  w-11/12 '>
                <TransactionChart />
                <TableTransactions />
            </div>
        </div>
    )
}

export default Transactions
