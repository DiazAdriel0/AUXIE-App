import { Link } from 'react-router-dom'

const Notifications = () => {
    return (
        <div>
            <p> Notificaciones </p>
            <Link className='underline' to='/dashboard'>
                Ir a home
            </Link>
        </div>
    )
}

export default Notifications
