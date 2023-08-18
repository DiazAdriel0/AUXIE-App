import { Link } from 'react-router-dom'
const Services = () => {
    return (
        <div>
            <p>Services</p>
            <Link className='underline' to='/dashboard'>
                Go to home
            </Link>
        </div>
    )
}

export default Services
