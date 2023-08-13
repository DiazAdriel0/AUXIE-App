import style from './navLanding.module.scss'
import LogoAuxie from '../../assets/logos/LogoAuxie.svg'

// Hooks

import useMenuStates from '../../hooks/useMenuStates'
import { Animated } from 'react-animated-css'
// Actions

import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ButtonLightNight from '../buttons/button-light-night/ButtonLightNight'
const NavLanding = () => {
    const navigate = useNavigate()
    const menuLanding = useSelector((state) => state.menuLanding)
    const {
        handlerLogIn,
        handlerRegister,
        logInMenu,
        registerMenu,
        setLogInMenu,
        setRegisterMenu,
    } = useMenuStates()

    const handlerChange = (event) => {
        const { value } = event.target
        navigate('/' + value)
    }
    return (
        <>
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
                            <option value="howItWorks">
                                Como funciona Auxie
                            </option>
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
                            <button
                                onClick={handlerLogIn}
                                className={style.login}
                            >
                                Ingresar
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => handlerRegister()}
                                className={style.register}
                            >
                                Regístrarse
                            </button>
                        </li>
                    </ul>
                </div>
                <ButtonLightNight />
            </nav>
            {logInMenu && (
                <Animated
                    animationIn="zoomIn"
                    animationOut="zoomDown"
                    animationInDuration={!menuLanding ? 200 : 0}
                >
                    <div className={style.logInMenu}>
                        <div className={style.container}>
                            <button
                                className={style.closeButton}
                                onClick={() => setLogInMenu(false)}
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
                    animationInDuration={!menuLanding ? 200 : 0}
                    isVisible={true}
                >
                    <div className={style.registerMenu}>
                        <div className={style.container}>
                            <button onClick={() => setRegisterMenu(false)}>
                                X
                            </button>
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
        </>
    )
}

export default NavLanding
