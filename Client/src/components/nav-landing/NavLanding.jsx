import style from './navLanding.module.scss'

import LogoLight from '../../assets/logos/7.png'
import LogoNight from '../../assets/logos/7.png'
// Hooks
import useMenuStates from '../../hooks/useMenuStates'
import { Animated } from 'react-animated-css'

// Actions
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

//Components
import BasicSelect from '../selects/Select'
import ButtonLightNight from '../buttons/button-light-night/ButtonLightNight'
const NavLanding = () => {
    const menuLanding = useSelector(state => state.menuLanding)
    const nightMode = useSelector(state => state.nightMode)
    const { handlerLogIn, handlerRegister, logInMenu, registerMenu, setLogInMenu, setRegisterMenu } = useMenuStates()

    return (
        <>
            <nav className={style.navLanding}>
                <div className={style.containerLeft}>
                    <div className={style.logoDiv}>
                        <Link to={'/'}>
                            <img
                                style={nightMode ? { filter: 'invert(100%)' } : null}
                                src={!nightMode ? LogoLight : LogoNight}
                                alt='Logo Auxie'
                                className={style.logo}
                            />
                        </Link>
                    </div>
                    <div className={style.viewsLanding}>
                        <BasicSelect />

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

             
                    </ul>
                    <div className='flex items-center'>
                        <ButtonLightNight />
                    </div>
                </div>
            </nav>
            {logInMenu && (
                <Animated animationIn='zoomIn' animationOut='zoomDown' animationInDuration={!menuLanding ? 200 : 0}>
                    <div className={style.logInMenu}>
                        <div className={style.container}>
                            <button className={style.closeButton} onClick={() => setLogInMenu(false)}>
                                X
                            </button>
                            <div>
                                <ul>
                                    <Link to={'/clientLogin'}>
                                        <div>Iniciar Sesión Como Cliente</div>
                                    </Link>
                                    <Link to={'/auxieLogin'}>
                                        <div>Iniciar Sesión Como Auxie</div>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Animated>
            )}

            {registerMenu && (
                <Animated
                    animationIn='zoomIn'
                    animationOut='zoomDown'
                    animationInDuration={!menuLanding ? 200 : 0}
                    isVisible={true}
                >
                    <div className={style.registerMenu}>
                        <div className={style.container}>
                            <button onClick={() => setRegisterMenu(false)}>X</button>
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
