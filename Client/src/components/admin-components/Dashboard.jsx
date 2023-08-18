import { Link } from 'react-router-dom'
function Dashboard() {
    return (
        <div>
            <p>this is a dashboard</p>
            <Link className='underline ' to='products'>
                Go to products
            </Link>
        </div>
    )
}

export default Dashboard
