import { Link } from 'react-router-dom'
import style from './navGeneral.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import LogoAuxie from '../../assets/Logos/logoAuxie.svg'
import { logOut } from '../../redux/Actions/actions'
const NavGeneral = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.loggedUser)
    // const navigate = useNavigate();


    const handleLogOut = () => {
        dispatch(logOut({}))
    }

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
            <Link to={'/'} onClick={handleLogOut}>
                    <p>Desconectarse</p>
            </Link>
                <button>
                    <img
                        src={user.image}
                        // alt="imagen de perfil"
                        height="80rem"
                        width="80rem"
                        
                    />
                </button>
            </div>
        </nav>
    )
}

export default NavGeneral
