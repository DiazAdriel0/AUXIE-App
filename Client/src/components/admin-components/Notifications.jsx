import { Link } from 'react-router-dom'

const Notifications = () => {
    return (
        <div>
            <p> Notifications </p>
            <Link className='underline' to='/dashboard'>
                Go to home
            </Link>
        </div>
    )
}

export default Notifications
