import { Link } from 'react-router-dom'
import style from './navGeneral.module.scss'
import { useSelector } from 'react-redux'
import LogoAuxie from '../../assets/Logos/logoAuxie.svg'
const NavGeneral = () => {
    const user = useSelector(state => state.loggedUser)
    // const navigate = useNavigate();
    return (
        <nav className={style.navGeneral}>
            <div className={style.containerLeft}>
                {Object.keys(user).includes("services") ? (<div className={style.viewsGeneral}>
                    <Link to={'/homeauxie'}>
                        {' '}
                        <img
                        src={LogoAuxie}
                        alt="Logo Auxie"
                        className={style.logo}
                    />
                    </Link>
                </div>):(<div className={style.viewsGeneral}>
                    <Link to={'/homeconsumer'}>
                        {' '}
                        <img
                        src={LogoAuxie}
                        alt="Logo Auxie"
                        className={style.logo}
                    />
                    </Link>
                </div>)}
                
            </div>
            <div className={style.profile}>
            <Link to={'/help'}>
                <p>Ayuda</p>
            </Link>
                <button>
                    <img
                        src={user.image}
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
