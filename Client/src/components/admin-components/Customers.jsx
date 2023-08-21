import { Link } from 'react-router-dom'

const Customers = () => {
    return (
        <div>
            <p>Customers</p>
            <Link className='underline' to='/dashboard'>
                Go to home
            </Link>
        </div>
    )
}

export default Customers
