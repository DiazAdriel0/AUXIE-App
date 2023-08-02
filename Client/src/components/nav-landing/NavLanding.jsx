import style from './navLanding.module.scss'

// Hooks
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavLanding = () => {
    const navigate = useNavigate()

    const [logInMenu, setLogInMenu] = useState(false)
    const [registerMenu, setRegisterMenu] = useState(false)

    const handlerLogIn = () => {
        setLogInMenu(true)
    }
    const handlerRegister = () => {
        setRegisterMenu(true)
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
                            <Link to={'/home'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/guarantee'}>
                                <p>Garantías</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/help'}>
                                <p>Ayuda</p>
                            </Link>
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
            {logInMenu && <div className={style.logInMenu}>LogIn</div>}
        </nav>
    )
}

export default NavLanding
