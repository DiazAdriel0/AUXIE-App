import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/admin-components/Sidebar'

const Layout = () => {
    return (
        <div className='flex flex-row h-screen w-screen overflow-hidden  '>
            <Sidebar />
            <div className='p-4 '>
                {<Outlet />}
                <div className='bg-teal-200'>header</div>
                <p className='bg-sky-100'>footer</p>
            </div>
        </div>
    )
}

export default Layout
