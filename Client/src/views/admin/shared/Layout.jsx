import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/admin-components/Sidebar'
import Header from './Header'
const Layout = () => {
    return (
        <div className='flex flex-row h-screen w-screen overflow-hidden  '>
            <Sidebar />
            <div className=' w-full'>
                <Header />
                {<Outlet />}
                {/* <p className='bg-sky-800'>footer</p> */}
            </div>
        </div>
    )
}

export default Layout
