import style from './landing.module.scss'

//* Import Hooks
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

//*Import Animations
import { Animated } from 'react-animated-css'
import CircleIconAuxie from '../../assets/logos/CircleIconAuxie.png'

//* Import icons

//* Import components
import CardsServices from '../../components/cards-services/CardsServices'
import NavLanding from '../../components/nav-landing/NavLanding'
import ButtonUp from '../../components/buttons/buttonUp/ButtonUp'
import FeaturedAuxies from '../../components/featuredAuxies/FeaturedAuxies'

const Landing = () => {
    //style tags
    const {
        landing,
        hiden,
        menuLogo,
        menuLogoLight,
        menuLogoNight,
        slogan,
        divSlogan,
        divSloganNight,
        divSloganLight,
        menuSearchAuxieNight,
        buttonSloganCont,
        buttonSloganContLight,
        buttonSloganContNight,
        searchAuxie,
        menuSearchAuxie,
        buttonMenu,
        serviceCards,
        sectionMenu,
    } = style
    //* First Intersection Observer
    const { ref: myRef, inView: firstObserver } = useInView()

    //* Second Intersection Observer
    const { ref: myRef2, inView: secondObserver } = useInView()

    //* Third Intersection Observer
    const { ref: myRef3, inView: thirdObserver } = useInView()

    const [animationObserver, setAnimationObserver] = useState({
        cardsAnimated: false,
        secondCardsAnimated: false,
        footerAnimated: false,
    })
    //* Global State
    const nightMode = useSelector((state) => state.nightMode)
    const user = useSelector((state) => state.loggedUser)
    const menuLanding = useSelector((state) => state.menuLanding)
    //* state for changes
    const [menuChange, setMenuChange] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        if (Object.keys(user).includes('requiredServices')) {
            return navigate('/homeconsumer')
        }
        if (Object.keys(user).includes('services')) {
            return navigate('homeauxie')
        }
    }, [])

    //* useEffect animations
    useEffect(() => {
        if (firstObserver) {
            setAnimationObserver((prevAnimationObserver) => ({
                ...prevAnimationObserver,
                cardsAnimated: true,
            }))
        }
        if (secondObserver) {
            setAnimationObserver((prevAnimationObserver) => ({
                ...prevAnimationObserver,
                secondCardsAnimated: true,
            }))
        }

        if (thirdObserver) {
            setAnimationObserver((prevAnimationObserver) => ({
                ...prevAnimationObserver,
                footerAnimated: true,
            }))
        }
    }, [firstObserver, secondObserver, thirdObserver])

    const handlerMenuSearchAuxie = () => {
        setMenuChange(true)
    }
    const handlerMenuBeAuxie = () => {
        setMenuChange(false)
    }

    const handleClick = (event) => {
        switch (event.target.value) {
            case 'toAuxieForm':
                navigate('/auxieform')
                break
            case 'toClientForm':
                navigate('/clientform')
                break
            case 'toHelp':
                navigate('/help')
        }
    }

    const { cardsAnimated, secondCardsAnimated, footerAnimated } =
        animationObserver

    return (
        <>
            <NavLanding />

            {/* Button to go up */}
            <ButtonUp
                observersLanding={{
                    firstObserver,
                    secondObserver,
                    thirdObserver,
                }}
            />

            {/* main */}
            <main className={!menuLanding ? landing : hiden}>
                {/* Section Menu Prinipal */}
                <Animated
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    animationInDuration={1000}
                    isVisible={true}
                >
                    <section className={sectionMenu}>
                        <div
                            className={
                                !nightMode
                                    ? `${menuLogo} ${menuLogoLight}`
                                    : `${menuLogo} ${menuLogoNight}`
                            }
                        >
                            <div
                                className={
                                    !nightMode
                                        ? `${style.menuMainLight} ${style.menuMain}`
                                        : `${style.menuMainNight} ${style.menuMain}`
                                }
                            >
                                <div className={style.buttonsMenuMain}>
                                    <button
                                        onClick={handlerMenuSearchAuxie}
                                        className={searchAuxie}
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
                                    <div
                                        className={
                                            !nightMode
                                                ? menuSearchAuxie
                                                : `${menuSearchAuxie} ${menuSearchAuxieNight}`
                                        }
                                    >
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
                                            className={buttonMenu}
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
                                            className={buttonMenu}
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
                    <section className={slogan}>
                        <div
                            className={
                                !nightMode
                                    ? `${divSlogan} ${divSloganLight}`
                                    : `${divSlogan} ${divSloganNight}`
                            }
                        >
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
                        <div
                            className={
                                !nightMode
                                    ? `${buttonSloganCont} ${buttonSloganContLight}  `
                                    : `${buttonSloganCont} ${buttonSloganContNight}  `
                            }
                        >
                            <button
                                className={style.buttonSlogan}
                                onClick={handleClick}
                                value={'toClientForm'}
                            >
                                Contratar
                            </button>
                        </div>
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
                            <section ref={myRef} className={serviceCards}>
                                <div className={style.serviceCardsTitle}></div>
                                <h3 className={style.h3}>
                                    Nuestros servicios mas populares
                                </h3>
                                <CardsServices />
                            </section>
                        </Animated>
                    </div>
                ) : (
                    <section ref={myRef} className={serviceCards}>
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
                        <section ref={myRef2} className={slogan}>
                            <div
                                className={
                                    !nightMode
                                        ? `${divSlogan} ${divSloganLight}`
                                        : `${divSlogan} ${divSloganNight}`
                                }
                            >
                                <h3>Trabaja con nosotros y genera ganancias</h3>
                                <p>
                                    <span>
                                        Somos la mejor herramienta para
                                        potenciar tu independencia laboral
                                    </span>
                                </p>
                            </div>
                            <div
                                className={
                                    !nightMode
                                        ? `${buttonSloganCont} ${buttonSloganContLight}  `
                                        : `${buttonSloganCont} ${buttonSloganContNight}  `
                                }
                            >
                                <button
                                    className={style.buttonSlogan}
                                    onClick={handleClick}
                                    value={'toHelp'}
                                >
                                    Mas informacion
                                </button>
                            </div>
                        </section>

                        {/* Section Auxies */}
                        <section className={style.auxies}>
                            <h3>Auxies Destacados</h3>
                            <div className={style.featuredAuxiesCont}>
                                <FeaturedAuxies />
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
