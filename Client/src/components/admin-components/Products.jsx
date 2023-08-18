import { Link } from 'react-router-dom'
const Products = () => {
    return (
        <div>
            <p>this is a products page</p>
            <Link className='underline' to='/dashboard'>
                Go to home
            </Link>
        </div>
    )
}

export default Products
