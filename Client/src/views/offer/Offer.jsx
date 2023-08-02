import style from './offer.module.scss'
import NavLanding from '../../components/nav-landing/NavLanding'
import MoneyIcon from '../../sass/Logos/MoneyIcon.svg'
import HelpIcon from '../../sass/Logos/HelpIcon.svg'
import FutureIcon from '../../sass/Logos/FutureIcon.svg'
import ServicesIcon from '../../sass/Logos/ServicesIcon.svg'
import ReviewsIcon from '../../sass/Logos/ReviewsIcon.svg'
import GaranteesIcon from '../../sass/Logos/GaranteesIcon.svg'
import { Link } from 'react-router-dom'
const Offer = () => {
    return (
        <div className={style.offer}>
            <NavLanding />
            <div>
                <div className={style.offers}>
                    <h1>Las ofertas de AUXIE</h1>
                    <h3>Cambiamos la forma en la que recibis ayuda en casa</h3>
                    <button className={style.button}><Link to='/home'>Explora la app</Link></button>
                </div>
            </div>
            <div>
                <section className={style.layout}>
                    <div>
                        <h3>Opciones de ayuda</h3>
                        <div>
                        <img src={HelpIcon} alt="Help Icon" style={{ width: '300px', height: '300px' }}/>
                        </div>
                        <h4>Pide un AUXIE cuando más lo necesites</h4>
                    </div>
                    <div>
                        <h3>Genera ganancias con AUXIE</h3>
                        <div>
                           <img src={MoneyIcon} alt="Money Icon" style={{ width: '300px', height: '300px' }}/>
                        </div>
                        <h4>Hay un mundo de oportunidades</h4>
                    </div>
                    <div>
                        <h3>Te impulsamos al futuro</h3>
                        <img src={FutureIcon} alt="Future Icon" style={{ width: '300px', height: '300px' }} />
                        <h4>
                            Te ayudamos a conectar con el AUXIE que mejor se
                            adecue a tus necesidades
                        </h4>
                    </div>
                    <div>
                        <h3>Servicio en el día</h3>
                        <img src={ServicesIcon} alt="Services Icon" style={{ width: '300px', height: '300px' }}/>
                        <h4>Conoce a nuestros AUXIE instantaneos</h4>
                    </div>
                    <div>
                        <h3>Trabaja cuando y con quien quieras</h3>
                        <img src={ReviewsIcon} alt="Reviews Icon" style={{ width: '300px', height: '300px' }}/>
                        <h4>Crea una clientela fiel a través de la app</h4>
                    </div>
                    <div>
                        <h3>Garantia asegurada</h3>
                        <img src={GaranteesIcon} alt="Garantees Icon" style={{ width: '300px', height: '300px' }}/>
                        <h4>Llama a nuestros Auxies con total seguridad</h4>
                    </div>
                </section>
            </div>
            <div>
                <section className={style.Footer}>
                    <div className={style.Register}>
                        {/* ACA VAN BOTONES A LOS FORMULARIOS */}
                        <h1>Quiero ser un AUXIE</h1> 
                    </div>
                    <div className={style.Register}>
                        <h1>Necesito un AUXIE</h1>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Offer
