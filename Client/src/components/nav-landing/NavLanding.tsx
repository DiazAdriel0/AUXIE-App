import style from './navLanding.module.scss'
import { Link } from 'react-router-dom'
const NavLanding = () => {
    return (
        <nav className={style.navLanding}>
            <div className={style.logo}>
                <p>Logo</p>
            </div>
            <div className={style.viewsLanding}>
                <Link to={'/company'}>
                    <p>Compañia</p>
                </Link>

                <Link to={'/guarantee'}>
                    <p>Garantías</p>
                </Link>

                <Link to={'/help'}>
                    <p>Ayuda</p>
                </Link>
            </div>
            <div className={style.logInOrRegister}>
                <Link to={'/form'}>
                    <p>Ingresar</p>
                </Link>
                <Link to={'/form'}>
                    <p>Registrarse</p>
                </Link>
            </div>
        </nav>
    )
}

export default NavLanding
