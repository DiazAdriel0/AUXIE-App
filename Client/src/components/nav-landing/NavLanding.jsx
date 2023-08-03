import style from './navLanding.module.scss'

// Hooks

import { Link, useNavigate } from 'react-router-dom'

const NavLanding = ({
    setLogInMenu,
    setRegisterMenu,
    logInMenu,
    registerMenu,
}) => {
    const navigate = useNavigate()

    const handlerLogIn = () => {
        if (registerMenu) setRegisterMenu(false)
        setLogInMenu(!logInMenu)
    }

    const handlerRegister = () => {
        if (logInMenu) setLogInMenu(false)
        setRegisterMenu(!registerMenu)
    }
    const handlerChange = (event) => {
        const { value } = event.target
        navigate('/' + value)
    }
    return (
        <nav className={style.navLanding}>
            <div className={style.containerLeft}>
                <p>Logo</p>

                <div className={style.viewsLanding}>
                    <select
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
                            <Link to={'/guarantee'}>
                                <p>Garantías</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/help'}>
                                <p>Ayuda</p>
                            </Link>
                            <Link to={'/home'}>Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.logInOrRegister}>
                <ul>
                    <li>
                        <button onClick={handlerLogIn}>
                            <p>Ingresar</p>
                        </button>
                    </li>

                    <li>
                        <button onClick={handlerRegister}>
                            <p>Registrarse</p>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavLanding
