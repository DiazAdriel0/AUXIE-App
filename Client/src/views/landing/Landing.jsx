import style from './landing.module.scss'

//* Import Hooks
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

//*Import Animations
import { Animated } from 'react-animated-css'

//* Import components
import CardsServices from '../../components/cards-services/CardsServices'
import NavLanding from '../../components/nav-landing/NavLanding'
import skipper from '../../assets/skipper.webp'

const Landing = () => {
    //* First Intersection Observer
    const { ref: myRef, inView: myElementIsVisible } = useInView()
    const [cardsAnimated, setCardsAnimated] = useState(false)
    //* Second Intersection Observer
    const { ref: myRef2, inView: mySecondElementIsVisible } = useInView()
    const [secondCardsAnimated, setSecondCardsAnimated] = useState(false)

    //* Global State
    const services = useSelector((state) => state.services)
    const logOrRegView = useSelector((state) => state.logOrRegView)
    //* state for menu changes
    const [menuChange, setMenuChange] = useState(true)

    const [logInMenu, setLogInMenu] = useState(false)
    const [registerMenu, setRegisterMenu] = useState(false)

    //* use Effect to obtain data

    // Use effect animations
    useEffect(() => {
        if (myElementIsVisible) {
            setCardsAnimated(true)
        }
        if (mySecondElementIsVisible) {
            setSecondCardsAnimated(true)
        }
    }, [myElementIsVisible, mySecondElementIsVisible])

    const handlerMenuSearchAuxie = () => {
        setMenuChange(true)
    }
    const handlerMenuBeAuxie = () => {
        setMenuChange(false)
    }

    return (
        <main
            className={
                !logInMenu && !registerMenu ? style.landing : style.hiden
            }
        >
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
                            <button onClick={() => setLogInMenu()}>
                                Cerrar
                            </button>
                            <div>
                                <ul>
                                    <li>
                                        <Link to={'/clientLogin'}>
                                            Iniciar Sesion Como Cliente
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/auxieLogin'}>
                                            Iniciar Sesion Como Auxie
                                        </Link>
                                    </li>
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
                            <button onClick={() => setRegisterMenu()}>
                                Cerrar
                            </button>
                            <div>
                                <ul>
                                    <li>
                                        <Link to={'/clientform'}>
                                            Registrarse Como Cliente
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/auxieform'}>
                                            Registrarse Como Auxie
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Animated>
            )}

            {/* Section Menu Prinipal */}
            <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDuration={1000}
                isVisible={true}
            >
                <section className={style.sectionMenu}>
                    <div className={style.menuLogo}>
                        <div className={style.menuMain}>
                            <div className={style.buttonsMenuMain}>
                                <button
                                    onClick={handlerMenuSearchAuxie}
                                    className={style.searchAuxie}
                                >
                                    Busco un Auxie
                                </button>
                                <button
                                    onClick={handlerMenuBeAuxie}
                                    className={style.turnAuxie}
                                >
                                    Convertirme en Auxie
                                </button>
                            </div>
                            {menuChange === true ? (
                                <div className={style.menuSearchAuxie}>
                                    <h3>Contrata a un Auxie que te ayude</h3>
                                    <select defaultValue="default">
                                        <option disabled value="default">
                                            Servicios Mas Solicitados
                                        </option>
                                        {services &&
                                            services.map((service) => {
                                                return (
                                                    <option
                                                        key={service.name}
                                                        value={service.name}
                                                    >
                                                        {service.name}
                                                    </option>
                                                )
                                            })}
                                        {}
                                    </select>
                                    <button className={style.buttonMenu}>
                                        Necesito un Auxie
                                    </button>
                                </div>
                            ) : (
                                <div className={style.menuTurnAuxie}>
                                    <h3>
                                        Convertite en Auxie y genera ganancias
                                    </h3>
                                    <select defaultValue="default">
                                        <option disabled value="default">
                                            Servicios a los que Aplicar
                                        </option>
                                    </select>
                                    <button className={style.buttonMenu}>
                                        Convertirme en Auxie
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </Animated>
            {/* Section Slogan */}
            <Animated
                animationIn="slideInUp"
                animationOut="fadeOut"
                animationInDuration={1000}
                isVisible={true}
            >
                <section className={style.slogan}>
                    <div className={style.divSlogan}>
                        <h3>LA VIDA COTIDIANA AHORA ES MAS FACIL</h3>
                        <p>
                            <span>
                                Esta aplicación esta diseñada para tu comodidad,
                                con
                            </span>
                            <span>
                                unos pocos clicks podras solucionar tus
                                problemas.
                            </span>
                        </p>
                    </div>
                    <button className={style.buttonSlogan}>Contratar</button>
                </section>
            </Animated>
            {/* Section Cards */}
            {cardsAnimated ? (
                <div>
                    <Animated
                        animationIn="slideInUp"
                        animationOut="fadeOut"
                        animationInDuration={1000}
                        isVisible={true}
                    >
                        <section ref={myRef} className={style.serviceCards}>
                            <div className={style.serviceCardsTitle}></div>
                            <h3>Nuestros servicios mas populares</h3>
                            <CardsServices />
                        </section>
                    </Animated>
                </div>
            ) : (
                <section ref={myRef} className={style.serviceCards}>
                    <div className={style.serviceCardsTitle}></div>
                    <h3>Nuestros servicios mas populares</h3>
                    <CardsServices />
                </section>
            )}
            {/* Section Auxies */}
            {secondCardsAnimated ? (
                <Animated
                    animationIn="slideInUp"
                    animationOut="fadeOut"
                    animationInDuration={1000}
                    isVisible={true}
                >
                    <section ref={myRef2} className={style.auxies}>
                        <div className={style.filterBar}></div>
                    </section>
                </Animated>
            ) : (
                <section ref={myRef2} className={style.auxies}>
                    <div className={style.filterBar}></div>
                </section>
            )}
            {/* Footer */}
            <footer className={style.landingFooter}>
                <div className={style.divFooterTitle}>
                    <h3>AUXIE</h3>
                    <h4>Creado con amor por </h4>
                </div>
                <div className={style.divFooterImg}>
                    <img src={skipper} alt="Imagen  gorditos" />
                    <img src={skipper} alt="Imagen  gorditos" />
                    <img src={skipper} alt="Imagen  gorditos" />
                    <img src={skipper} alt="Imagen  gorditos" />
                    <img src={skipper} alt="Imagen  gorditos" />
                    <img src={skipper} alt="Imagen  gorditos" />
                    <img src={skipper} alt="Imagen  gorditos" />
                </div>
                <div className={style.divCopy}>
                    <p>Copyright © 2023</p>
                </div>
            </footer>
        </main>
    )
}

export default Landing
