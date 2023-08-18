import { Link } from 'react-router-dom'
import { FcBullish } from 'react-icons/fc'
import { HiOutlineLogout } from 'react-icons/hi'
import {
    DASHBOARD_SIDEBAR_LINKS,
    DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from '../../lib/consts/navigation'
import {
    linkClassesDark,
    linkClassesLight,
    darkMode,
    lightMode,
} from '../../lib/consts/styles'
import { useSelector } from 'react-redux'
import ButtonLightNight from '../buttons/button-light-night/ButtonLightNight'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
    const nightMode = useSelector((state) => state.nightMode)

    return (
        <div className={nightMode ? darkMode : lightMode}>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcBullish fontSize={24} />
                <span
                    className={
                        nightMode
                            ? 'text-neutral-100 text-lg'
                            : 'text-neutral-700 text-lg'
                    }
                >
                    Auxie
                </span>
            </div>
            <div className='flex-1 py-8 flex flex-col gap-0.5'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => {
                    return <SideBarLink key={item.key} item={item} />
                })}
                <div className='pt-2 flex'>
                    <ButtonLightNight />
                </div>
            </div>
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-900'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => {
                    return <SideBarLink key={item.key} item={item} />
                })}
                <div
                    className={
                        nightMode
                            ? classNames(
                                  'text-red-400 cursor-pointer',
                                  linkClassesDark
                              )
                            : classNames(
                                  linkClassesLight,
                                  'text-red-600 cursor-pointer'
                              )
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
    const nightMode = useSelector((state) => state.nightMode)

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
