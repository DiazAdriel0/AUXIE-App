import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <div className='bg-sky-100'>sidebar</div>
            <div>header</div>
            <div>{<Outlet />}</div>
        </div>
    )
}

export default Layout
