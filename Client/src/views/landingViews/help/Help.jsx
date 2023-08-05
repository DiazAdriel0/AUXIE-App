import style from './help.module.scss'
import NavLanding from '../../../components/nav-landing/NavLanding'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Animated } from 'react-animated-css'
import { useSelector } from 'react-redux'

const Help = () => {
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
                            <button onClick={() => setLogInMenu()}>X</button>
                            <div>
                                <ul>
                                    <div>
                                        <Link to={'/clientLogin'}>
                                            Iniciar Sesion Como Cliente
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to={'/auxieLogin'}>
                                            Iniciar Sesion Como Auxie
                                        </Link>
                                    </div>
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
                                    <div>
                                        <Link to={'/clientform'}>
                                            Registrarse Como Cliente
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to={'/auxieform'}>
                                            Registrarse Como Auxie
                                        </Link>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Animated>
            )}
            <div className={style.help}>
                <h2>Ayuda</h2>
            </div>
            <div className={style.helpers}>
                <div className={style.square}>
                    <h1>
                        ¡Te damos la bienvenida al soporte tecnico de AUXIE!
                    </h1>
                    <p>¿Cómo te podemos ayudar hoy?</p>
                </div>
                <section className={style.options}>
                    <Link to="/howItWorks">
                        <div>¿Cómo funciona AUXIE?/ Preguntas Frecuentes</div>
                    </Link>
                    <Link to="/guarantee">
                        <div>Garantia de felicidad</div>
                    </Link>
                    <Link to="/support">
                        <div>Soporte tecnico y reclamos</div>
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default Help
