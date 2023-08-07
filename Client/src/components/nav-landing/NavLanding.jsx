import style from './navLanding.module.scss'
import LogoAuxie from '../../assets/Logos/logoAuxie.svg'
// Hooks
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { toggleLogOrRegView } from '../../redux/Actions/actions'

import { Link, useNavigate } from 'react-router-dom'

const NavLanding = ({
    setLogInMenu,
    setRegisterMenu,
    logInMenu,
    registerMenu,
}) => {
    const dispatch = useDispatch()
    const logOrRegView = useSelector((state) => state.logOrRegView)

    const navigate = useNavigate()

    const handlerLogIn = () => {
        if (registerMenu) setRegisterMenu(false)

        if (logOrRegView && !registerMenu && !logInMenu) {
            dispatch(toggleLogOrRegView(false))
        }

        if (!logOrRegView) dispatch(toggleLogOrRegView(true))

        setLogInMenu(!logInMenu)
    }

    const handlerRegister = () => {
        if (logInMenu) setLogInMenu(false)

        if (logOrRegView && !registerMenu && !logInMenu) {
            dispatch(toggleLogOrRegView(false))
        }

        if (!logOrRegView) dispatch(toggleLogOrRegView(true))

        setRegisterMenu(!registerMenu)
    }

    const handlerChange = (event) => {
        const { value } = event.target
        navigate('/' + value)
    }
    return (
        <nav className={style.navLanding}>
            <div className={style.containerLeft}>
                <div className={style.logoDiv}>
                    <Link to={'/'}>
                        <img
                            src={LogoAuxie}
                            alt="Logo Auxie"
                            className={style.logo}
                        />
                    </Link>
                </div>
                <div className={style.viewsLanding}>
                    <select
                        className={style.select}
                        onChange={handlerChange}
                        name="company"
                        defaultValue={'default'}
                    >
                        <option
                            className={style.default}
                            disabled
                            value="default"
                        >
                            Compañia
                        </option>
                        <option value="aboutUs">Quiénes Somos</option>
                        <option value="offer">Que ofrecemos</option>
                        <option value="howItWorks">Como funciona Auxie</option>
                    </select>

                    <ul>
                        <li>
                            <Link to={'/guarantee'}>Garantías</Link>
                        </li>
                        <li>
                            <Link to={'/help'}>Ayuda</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.logInOrRegister}>
                <ul>
                    <li>
                        <button onClick={handlerLogIn} className={style.login}>
                            Ingresar
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={handlerRegister}
                            className={style.register}
                        >
                            Regístrarse
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavLanding
