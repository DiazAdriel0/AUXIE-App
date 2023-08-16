import style from './offer.module.scss'

import MoneyIcon from '../../../assets/logos/MoneyIcon.svg'
import HelpIcon from '../../../assets/logos/HelpIcon.svg'
import FutureIcon from '../../../assets/logos/FutureIcon.svg'
import ServicesIcon from '../../../assets/logos/ServicesIcon.svg'
import ReviewsIcon from '../../../assets/logos/ReviewsIcon.svg'
import GuaranteesIcon from '../../../assets/logos/GuaranteesIcon.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavGeneral from '../../../components/nav-general/NavGeneral'
import NavLanding from '../../../components/nav-landing/NavLanding'
import Footer from '../../../components/footer/Footer.jsx'

const Offer = () => {
    const menuLanding = useSelector((state) => state.menuLanding)
    const user = useSelector((state) => state.loggedUser)
    const isLogged = Object.keys(user).length > 0
    return (
        <>
            {isLogged ? <NavGeneral /> : <NavLanding />}
            <div className={!menuLanding ? style.offerShow : style.offerHide}>
            </div>
                <div className={style.offer}>
                    <div className={style.offers}>
                        <h1>Las ofertas de AUXIE</h1>
                        {/* <h3>Cambiamos la forma en la que recibis ayuda en casa</h3>
                    <Link to="/">
                        <button className={style.button}>Explora la app</button>
                    </Link> */}
                    </div>
                </div>
                <div>
                    <section className={style.layout}>
                        <div>
                            <h3>Opciones de ayuda</h3>
                            <div>
                                <img
                                    src={HelpIcon}
                                    alt="Help Icon"
                                    style={{ width: '300px', height: '300px' }}
                                />
                            </div>
                            <h4>Pide un AUXIE cuando más lo necesites</h4>
                        </div>
                        <div>
                            <h3>Genera ganancias</h3>
                            <div>
                                <img
                                    src={MoneyIcon}
                                    alt="Money Icon"
                                    style={{ width: '300px', height: '300px' }}
                                />
                            </div>
                            <h4>Hay un mundo de oportunidades</h4>
                        </div>
                        <div>
                            <h3>Te impulsamos al futuro</h3>
                            <img
                                src={FutureIcon}
                                alt="Future Icon"
                                style={{ width: '300px', height: '300px' }}
                            />
                            <h4>
                                Conecta con el AUXIE que mejor se adecue a vos.
                            </h4>
                        </div>
                        <div>
                            <h3>Servicios en el día</h3>
                            <img
                                src={ServicesIcon}
                                alt="Services Icon"
                                style={{ width: '300px', height: '300px' }}
                            />
                            <h4>Conoce a nuestros AUXIE instantaneos</h4>
                        </div>
                        <div>
                            <h3>Trabaja cuando quieras</h3>
                            <img
                                src={ReviewsIcon}
                                alt="Reviews Icon"
                                style={{ width: '300px', height: '300px' }}
                            />
                            <h4>Crea una clientela fiel a través de la app</h4>
                        </div>
                        <div>
                            <h3>Garantia asegurada</h3>
                            <img
                                src={GuaranteesIcon}
                                alt="Garantees Icon"
                                style={{ width: '300px', height: '300px' }}
                            />
                            <h4>Llama a nuestros Auxies con total seguridad</h4>
                        </div>
                    </section>
                </div>
                <div>
                    <section className={style.Footer}>
                        <div className={style.Register}>
                            {/* ACA VAN BOTONES A LOS FORMULARIOS */}
                            <Link to="/auxieform">
                                <h1>Quiero ser un AUXIE</h1>
                            </Link>
                        </div>
                        <div className={style.Register}>
                            <Link to="/clientform">
                                <h1>Necesito un AUXIE</h1>
                            </Link>
                        </div>
                    </section>
                </div>
           <Footer/>
        </>
    )
}

export default Offer
