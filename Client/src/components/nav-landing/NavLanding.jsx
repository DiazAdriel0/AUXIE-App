import style from './navLanding.module.scss'
import { Link } from 'react-router-dom'
const NavLanding = () => {
    return (
        <div className={style.navLanding}>
            <nav>
                <p>Logo</p>
                <div>
                    <Link to={}>
                        <p>Compañia</p>
                    </Link>

                    <Link to={}>
                        <p>Garantías</p>
                    </Link>

                    <Link to={}>
                        <p>Ayuda</p>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default NavLanding
