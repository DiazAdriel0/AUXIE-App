import style from './landing.module.scss'

//* Import Hooks
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

//*Import Animations
import { Animated } from 'react-animated-css'
import CircleIconAuxie from '../../assets/Logos/CircleIconAuxie.png'

//* Import icons
import arrowUp from '../../assets/icons/arrow-up.svg'

//* Import components
import CardsServices from '../../components/cards-services/CardsServices'
import NavLanding from '../../components/nav-landing/NavLanding'

//anonimos tokens y actions
import { getAllAuxies, getAllServices } from '../../redux/Actions/actions'
import { auth } from '../../config/firebase-config'
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth'


const Landing = () => {
    //* First Intersection Observer
    const { ref: myRef, inView: myElementIsVisible } = useInView()

    //* Second Intersection Observer
    const { ref: myRef2, inView: mySecondElementIsVisible } = useInView()

    //* Third Intersection Observer
    const { ref: myRef3, inView: myThirdElementIsVisible } = useInView()

    const [animationObserver, setAnimationObserver] = useState({
        cardsAnimated: false,
        secondCardsAnimated: false,
        footerAnimated: false,
    })
    //* Global State
    // const services = useSelector((state) => state.services)
    const logOrRegView = useSelector((state) => state.logOrRegView)
    const user = useSelector((state) => state.loggedUser)
    const auxies = useSelector((state) => state.auxies)
    const services = useSelector((state) => state.services)

    //* state for changes
    const [menuChange, setMenuChange] = useState(true)
    const [logInMenu, setLogInMenu] = useState(false)
    const [registerMenu, setRegisterMenu] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(user)
        if (Object.keys(user).includes('requiredServices')){
            return navigate('/homeconsumer')
        }
        if (Object.keys(user).includes('services')){
            return navigate('homeauxie')
        } 
    
        //crea un token anonimo
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const token = await user.getIdToken();
                if (!auxies.length) {
                    dispatch(getAllAuxies(token))
                }
                if (!services.length) {
                    dispatch(getAllServices(token))
                }
            } else {
                const generateAnonymousToken = async () => {
                    try {
                        const userCredential = await signInAnonymously(auth);
                        const user = userCredential.user;
                        const token = await user.getIdToken();
                        console.log('anonimo:'+ token);
                        // Puedes utilizar el token como token para tus solicitudes
                            dispatch(getAllAuxies(token))
                            dispatch(getAllServices(token))
                    } catch (error) {
                        console.error('Error al generar token anónimo:', error);
                    }
                };
                generateAnonymousToken();
            }
        });
    
        return () => unsubscribe();
    }, [])

    //* useEffect animations
    useEffect(() => {
        if (myElementIsVisible) {
            setAnimationObserver((prevAnimationObserver) => ({
                ...prevAnimationObserver,
                cardsAnimated: true,
            }))
        }
        if (mySecondElementIsVisible) {
            setAnimationObserver((prevAnimationObserver) => ({
                ...prevAnimationObserver,
                secondCardsAnimated: true,
            }))
        }

        if (myThirdElementIsVisible) {
            setAnimationObserver((prevAnimationObserver) => ({
                ...prevAnimationObserver,
                footerAnimated: true,
            }))
        }
    }, [myElementIsVisible, mySecondElementIsVisible, myThirdElementIsVisible])

    const handlerMenuSearchAuxie = () => {
        setMenuChange(true)
    }
    const handlerMenuBeAuxie = () => {
        setMenuChange(false)
    }

    const handleButtonUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    const handleClick = (event) => {
        switch (event.target.value) {
            case 'toAuxieForm':
                navigate('/auxieform')
                break
            case 'toClientForm':
                navigate('/clientform')
                break
        }
    }

    const { cardsAnimated, secondCardsAnimated, footerAnimated } =
        animationObserver
    return (
        <>
            <NavLanding
                logInMenu={logInMenu}
                registerMenu={registerMenu}
                setLogInMenu={setLogInMenu}
                setRegisterMenu={setRegisterMenu}
            />

            {myElementIsVisible ||
            mySecondElementIsVisible ||
            myThirdElementIsVisible ? (
                <div className={style.upDiv}>
                    <button onClick={handleButtonUp} className={style.buttonUp}>
                        <img src={arrowUp} alt="" />
                    </button>
                </div>
            ) : (
                <div className={style.upDiv}>
                    <button
                        onClick={handleButtonUp}
                        className={style.buttonUpHide}
                    >
                        <img src={arrowUp} alt="" />
                    </button>
                </div>
            )}
            <main
                className={
                    !logInMenu && !registerMenu ? style.landing : style.hiden
                }
            >
                {logInMenu && (
                    <Animated
                        animationIn="zoomIn"
                        animationOut="zoomDown"
                        animationInDuration={!logOrRegView ? 200 : 0}
                    >
                        <div className={style.logInMenu}>
                            <div className={style.container}>
                                <button onClick={() => setLogInMenu()}>
                                    X
                                </button>
                                <p>
                                    <span></span>
                                    <span></span>
                                </p>
                                <div>
                                    <ul>
                                        <Link to={'/clientLogin'}>
                                            <div>
                                                Iniciar Sesion Como Cliente
                                            </div>
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
                                <button onClick={() => setRegisterMenu()}>
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
                                        <h3>
                                            Contrata a un Auxie que te ayude
                                        </h3>
                                        {/*  <select defaultValue="default">
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
                                        </select> */}
                                        <button
                                            onClick={handleClick}
                                            value={'toClientForm'}
                                            className={style.buttonMenu}
                                        >
                                            Necesito un Auxie
                                        </button>
                                    </div>
                                ) : (
                                    <div className={style.menuTurnAuxie}>
                                        <h3>
                                            Convertite en Auxie y genera
                                            ganancias
                                        </h3>
                                        {/* <select defaultValue="default">
                                            <option disabled value="default">
                                                Servicios a los que Aplicar
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
                                        </select> */}
                                        <button
                                            onClick={handleClick}
                                            value={'toAuxieForm'}
                                            className={style.buttonMenu}
                                        >
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
                            <h3>TU VIDA COTIDIANA AHORA ES MÁS FÁCIL</h3>
                            <p>
                                <span>
                                    Esta aplicación esta diseñada para tu
                                    comodidad, con
                                </span>
                                <span>
                                    unos pocos clicks podras solucionar tus
                                    problemas.
                                </span>
                            </p>
                        </div>
                        <button className={style.buttonSlogan}>
                            Contratar
                        </button>
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
                                <h3 className={style.h3}>
                                    Nuestros servicios mas populares
                                </h3>
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

                {secondCardsAnimated ? (
                    <Animated
                        animationIn="slideInUp"
                        animationOut="fadeOut"
                        animationInDuration={1000}
                    >
                        {/* Section Slogan */}
                        <section ref={myRef2} className={style.slogan}>
                            <div className={style.divSlogan}>
                                <h3>Trabaja con nosotros y genera ganancias</h3>
                                <p>
                                    <span>
                                        Somos la mejor herramienta para
                                        potenciar tu independencia laboral
                                    </span>
                                </p>
                            </div>
                            <Link to="/help">
                                <button className={style.buttonSlogan1}>
                                    Mas informacion
                                </button>
                            </Link>
                        </section>

                        {/* Section Auxies */}
                        <section className={style.auxies}>
                            <h3>Auxies Destacados</h3>
                            <div className={style.featuredAuxies}>
                                <ul className={style.featuredlist}>
                                    <li className={style.cardFeatured}>
                                        Josecito
                                    </li>
                                    <li className={style.cardFeatured}>
                                        Manueh
                                    </li>
                                    <li className={style.cardFeatured}>
                                        Abril
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </Animated>
                ) : (
                    <>
                        <section
                            className={style.sloganNone}
                            ref={myRef2}
                        ></section>
                        <section
                            className={style.auxies}
                            ref={myRef2}
                        ></section>
                    </>
                )}
                {/* Footer */}
                {footerAnimated ? (
                    <footer ref={myRef3} className={style.landingFooter}>
                        <div className={style.divFooterTitle}>
                            <img
                                src={CircleIconAuxie}
                                alt="circle icon"
                                className={style.divFooterImg}
                            />
                            <h4>Creado con amor por el Auxie Team</h4>
                        </div>
                        <div className={style.divCopy}>
                            <p>Copyright © 2023</p>
                        </div>
                    </footer>
                ) : (
                    <footer
                        className={style.landingFooter}
                        ref={myRef3}
                    ></footer>
                )}
            </main>
        </>
    )
}

export default Landing
