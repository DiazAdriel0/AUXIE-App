import style from './landing.module.scss'

//* Import Hooks
import { useState } from 'react'

//*Import Animations
import { Animated } from 'react-animated-css'

//* Import components
// import Cards from '../../components/cards/cards'
import CardServices from '../../components/card-services/CardServices'
import NavLanding from '../../components/nav-landing/NavLanding'

const Landing = () => {
    const [menuChange, setMenuChange] = useState(true)

    const handlerMenuSearchAuxie = () => {
        event.preventDefault()
        setMenuChange(true)
    }
    const handlerMenuBeAuxie = () => {
        event.preventDefault()
        setMenuChange(false)
    }

    return (
        <main className={style.landing}>
            <NavLanding />
            <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDuration={1000}
                isVisible={true}
            >
                <section className={style.sectionMenu}>
                    {/* Section Menu Prinipal */}
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
                animationInDuration={1500}
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
            <section className={style.cards}>
                <CardServices />
            </section>

            {/* Footer */}
            <footer className={style.landingFooter}></footer>
            {/* <Cards /> */}
        </main>
    )
}

export default Landing
