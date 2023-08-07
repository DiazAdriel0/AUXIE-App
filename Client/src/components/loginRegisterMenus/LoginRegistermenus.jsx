import style from './loginRegisterMenus.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Animated } from 'react-animated-css'
import { useSelector } from 'react-redux'
import NavLanding from '../nav-landing/NavLanding'

const LoginRegisterMenus = () => {
    const [logInMenu, setLogInMenu] = useState(false)
    const [registerMenu, setRegisterMenu] = useState(false)
    const logOrRegView = useSelector((state) => state.logOrRegView)
    return (
        <div>
            <NavLanding
                logInMenu={logInMenu}
                registerMenu={registerMenu}
                setLogInMenu={setLogInMenu}
                setRegisterMenu={setRegisterMenu}
            />
            {logInMenu && (
                <Animated
                    animationIn="zoomIn"
                    animationOut="zoomDown"
                    animationInDuration={!logOrRegView ? 200 : 0}
                >
                    <div className={style.logInMenu}>
                        <div className={style.container}>
                            <button
                                className={style.closeButton}
                                onClick={() => setLogInMenu()}
                            >
                                X
                            </button>
                            <div>
                                <ul>
                                    <Link to={'/clientLogin'}>
                                        <div>Iniciar Sesion Como Cliente</div>
                                    </Link>
                                    <Link to={'/auxieLogin'}>
                                        <div>Iniciar Sesion Como Auxie</div>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Animated>
            )}

            {registerMenu && (
                <Animated
                    animationIn="zoomIn"
                    animationOut="zoomDown"
                    animationInDuration={!logOrRegView ? 200 : 0}
                    isVisible={true}
                >
                    <div className={style.registerMenu}>
                        <div className={style.container}>
                            <button onClick={() => setRegisterMenu()}>X</button>
                            <div>
                                <ul>
                                    <Link to={'/clientform'}>
                                        <div>Registrarse Como Cliente</div>
                                    </Link>
                                    <Link to={'/auxieform'}>
                                        <div>Registrarse Como Auxie</div>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Animated>
            )}
        </div>
    )
}
export default LoginRegisterMenus
