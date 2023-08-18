import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/admin-components/Sidebar'

const Layout = () => {
    return (
        <div className='flex flex-row h-screen w-screen overflow-hidden  '>
            <Sidebar />
            <div className='p-4 '>
                <div className='bg-teal-800'>header</div>
                {<Outlet />}
                <p className='bg-sky-800'>footer</p>
            </div>
        </div>
    )
}

export default Layout
