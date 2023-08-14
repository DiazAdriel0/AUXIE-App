//estilos
import style from './navGeneral.module.scss'

//hooks
import { useSelector } from 'react-redux'

//Components
import LogoAuxie from '../logo/logoAuxie/LogoAuxie'
import ProfilePic from '../profile-pic/profile-pic-auxie/ProfilePic'
import LogoClient from '../logo/logoClient/LogoCLient'
import ButtonLightNight from '../buttons/button-light-night/ButtonLightNight'

const NavGeneral = () => {
    const user = useSelector((state) => state.loggedUser)
    const isAuxie = Object.keys(user).includes('services') ? true : false

    return (
        <nav className={style.navGeneral}>
            {isAuxie ? (
                <>
                    <LogoAuxie />
                    <ProfilePic />
                    <ButtonLightNight />
                </>
            ) : (
                <>
                    <LogoClient />
                    <div className={style.right}>
                        <ProfilePic />
                        <div className={style.nightswitch}>
                            <ButtonLightNight />
                        </div>
                    </div>
                </>
            )}
        </nav>
    )
}

export default NavGeneral
