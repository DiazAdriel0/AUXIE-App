import TableTransactions from './TableTransactions'
import TransactionChart from './TransactionChart'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Transactions = () => {
    const navigate = useNavigate()
    const loggedUser = useSelector(state => state.loggedUser)
    useEffect(() => {
        if (!loggedUser.isAdmin) {
            if (loggedUser.isAuxie) {
                navigate('/homeauxie')
            } else {
                navigate('/homeconsumer')
            }
        }
    }, [])
    return (
        <div className='mt-16 width-full flex items-center justify-center'>
            <div className='  w-[99%] '>
                <TransactionChart />
                <TableTransactions />
            </div>
        </div>
    )
}

export default Transactions
