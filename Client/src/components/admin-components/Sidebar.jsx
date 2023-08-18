import { Link } from 'react-router-dom'
import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation'
import { useSelector } from 'react-redux'
import ButtonLightNight from '../buttons/button-light-night/ButtonLightNight'

import { useLocation } from 'react-router-dom'

const Sidebar = () => {
    const nightMode = useSelector((state) => state.nightMode)
    const darkMode = 'bg-neutral-900 text-white w-60 p-3 flex flex-col h-screen'
    const lightMode = 'bg-white text-black w-60 p-3 flex flex-col h-screen'
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
            </div>
            <div>
                <ButtonLightNight />
            </div>
        </div>
    )
}

function SideBarLink({ item }) {
    const { pathname } = useLocation()
    const nightMode = useSelector((state) => state.nightMode)
    const linkClassesDark =
        ' flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active-neutral-600 rounded-sm text-base'
    const linkClassesLight =
        ' flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-100 hover:no-underline active-neutral-600 rounded-sm text-base'
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
