import { Link } from 'react-router-dom'

const Transactions = () => {
    return (
        <div>
            <p>Transactions</p>
            <Link className='underline' to='/dashboard'>
                Go to home
            </Link>
        </div>
    )
}

export default Transactions
