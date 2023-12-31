import { Link } from 'react-router-dom'
import { FcBullish } from 'react-icons/fc'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/consts/navigation'
import { linkClassesDark, linkClassesLight, darkMode, lightMode } from '../../lib/consts/styles'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import ButtonLightNight from '../buttons/button-light-night/ButtonLightNight'
import classNames from 'classnames'
//firebase
import { auth } from '../../config/firebase-config'
import { logOut } from '../../redux/actions/actions'
import { signOut } from 'firebase/auth'

import Swal from 'sweetalert2'
import axios from 'axios'
const Sidebar = () => {
    const navigate = useNavigate()
    const user = useSelector(state => state.loggedUser)
    const dispatch = useDispatch()
    const nightMode = useSelector(state => state.nightMode)
    const handleLogOut = async () => {
        try {
            if (user.googleId) {
                const response = await axios.post('/consumers/logout', {
                    googleId: `${user.googleId}`,
                })
                if (response) {
                    await signOut(auth)
                    dispatch(logOut({}))
                    return navigate('/')
                }
            }
            dispatch(logOut({}))
            await signOut(auth)
            navigate('/')
        } catch (error) {
            console.error('error: ' + error.message)
            Swal.fire(error.message)
        }
    }
    return (
        <div className={nightMode ? darkMode : lightMode}>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcBullish fontSize={24} />
                <span className={nightMode ? 'text-neutral-100 text-lg' : 'text-neutral-700 text-lg'}>Auxie Admin</span>
            </div>
            <div className='flex-1 py-8 flex flex-col gap-0.5'>
                {DASHBOARD_SIDEBAR_LINKS.map(item => {
                    return <SideBarLink key={item.key} item={item} />
                })}
                <div className='pt-2 flex'>
                    <ButtonLightNight />
                </div>
            </div>
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-900'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item => {
                    return <SideBarLink key={item.key} item={item} />
                })}
                <div
                    onClick={() => handleLogOut()}
                    className={
                        nightMode
                            ? classNames('text-red-400 cursor-pointer', linkClassesDark)
                            : classNames(linkClassesLight, 'text-red-600 cursor-pointer')
                    }
                >
                    <span className='text-xl'>
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div>
            </div>
        </div>
    )
}

function SideBarLink({ item }) {
    const { pathname } = useLocation()
    const nightMode = useSelector(state => state.nightMode)

    return (
        <Link
            className={
                nightMode
                    ? pathname === item.path
                        ? 'bg-neutral-600 ' + linkClassesDark
                        : linkClassesDark
                    : pathname === item.path
                    ? 'bg-neutral-100' + linkClassesLight
                    : linkClassesLight
            }
            to={item.path}
        >
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}

export default Sidebar
