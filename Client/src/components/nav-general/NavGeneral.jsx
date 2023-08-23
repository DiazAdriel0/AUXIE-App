//estilos
import style from './navGeneral.module.scss'

//hooks
import { useSelector } from 'react-redux'

//Components
import ProfilePic from '../profile-pic/profile-pic-auxie/ProfilePic'
import ButtonLightNight from '../buttons/button-light-night/ButtonLightNight'
import NotificationButton from '../notifications/NotificationButton'
import LogoLight from '../../assets/logos/7.png'
import LogoNight from '../../assets/logos/7.png'
import { Link } from 'react-router-dom'
const NavGeneral = () => {
    const user = useSelector(state => state.loggedUser)
    const isAuxie = Object.keys(user).includes('services') ? true : false
    const nightMode = useSelector(state => state.nightMode)
    return (
        <nav className={style.navGeneral}>
            {isAuxie ? (
                <>
                <div className={style.containerLeft}>
                    <div className={style.logoDiv}>
                        <Link to={'/'}>
                            <img
                                style={nightMode ? { filter: 'invert(100%)' } : null}
                                src={!nightMode ? LogoLight : LogoNight}
                                alt='Logo Auxie'
                                className={style.logo}
                            />
                        </Link>
                    </div>
                    </div>

                    <div className={style.right}>
                        <div className={style.notifications}>
                            <NotificationButton />
                        </div>
                        <div className={style.nightswitch}>
                            <ButtonLightNight />
                        </div>
                        <ProfilePic />
                    </div>
                </>
            ) : (
                <>
                    <div className={style.containerLeft}>
                    <div className={style.logoDiv}>
                        <Link to={'/'}>
                            <img
                                style={nightMode ? { filter: 'invert(100%)' } : null}
                                src={!nightMode ? LogoLight : LogoNight}
                                alt='Logo Auxie'
                                className={style.logo}
                            />
                        </Link>
                    </div>
                    </div>

                    <div className={style.right}>
                        <div className={style.notifications}>
                            <NotificationButton />
                        </div>
                        <div className={style.nightswitch}>
                            <ButtonLightNight />
                        </div>

                        <ProfilePic />
                    </div>
                </>
            )}
        </nav>
    )
}

export default NavGeneral
