import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/admin-components/Sidebar'
import Header from './Header'
const Layout = () => {
    return (
        <div className='flex flex-row h-screen'>
            <Sidebar />
            <div className=' w-full'>
                <Header />
                {<Outlet />}
            </div>
        </div>
    )
}

export default Layout
