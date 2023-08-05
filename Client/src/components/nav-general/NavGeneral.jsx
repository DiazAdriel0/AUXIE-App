import { Link } from 'react-router-dom'
import style from './navGeneral.module.scss'

const NavGeneral = () => {
    // const navigate = useNavigate();

    return (
        <nav className={style.navGeneral}>
            <div className={style.containerLeft}>
                <div className={style.viewsGeneral}>
                    <Link to={'/homeconsumer'}> <h1>Logo</h1></Link>
                </div>
            </div>
            <div className={style.profile}>
                        <button>
                        <img
                        src="https://img.freepik.com/free-icon/user_318-563642.jpg"
                        alt="imagen de perfil"
                        height="50px"
                        width="50px"
                    />
                        </button>
            </div>
        </nav>
    )
}

export default NavGeneral
