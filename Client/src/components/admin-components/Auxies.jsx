import { Link } from 'react-router-dom'
const Auxies = () => {
    return (
        <div>
            <p>Auxies page</p>
            <Link className='underline' to='/dashboard'>
                Go to home
            </Link>
        </div>
    )
}

export default Auxies
