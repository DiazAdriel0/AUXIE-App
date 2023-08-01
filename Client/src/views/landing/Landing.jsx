import style from './landing.module.scss'

//* Import Hooks
import { useState } from 'react'
import { useSelector } from 'react-redux'
//*Import Animations
import { Animated } from 'react-animated-css'

//* Import components
import CardsServices from '../../components/cards-services/CardsServices'
import NavLanding from '../../components/nav-landing/NavLanding'
import Filters from '../../components/Filters/Filters'
import Cards from '../../components/cards/cards'
import skipper from '../../assets/skipper.webp'
const Landing = () => {
    const services = useSelector((state) => state.services)
    const [menuChange, setMenuChange] = useState(true)

    /* Handlers */
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
            <section className={style.serviceCards}>
                <div className={style.serviceCardsTitle}></div>
                <h3>Nuestros servicios mas populares</h3>
                <CardsServices />
            </section>
            {/* Section Auxies */}
            <section className={style.auxies}>
                <div className={style.filterBar}>
                    <Filters />
                </div>
                <Cards />
            </section>

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
            {/* <Cards /> */}
        </main>
    )
}

export default Landing
