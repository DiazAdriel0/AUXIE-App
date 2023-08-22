import style from './guarantee.module.scss'
import { Link } from 'react-router-dom'

import NavGeneral from '../../../components/nav-general/NavGeneral'
import { useSelector } from 'react-redux'
import NavLanding from '../../../components/nav-landing/NavLanding'
import Footer from '../../../components/footer/Footer.jsx'
import Satisfaction from '../../../assets/Satisfaction.jpg'
const Guarantee = () => {
    const user = useSelector((state) => state.loggedUser)
    const menuLanding = useSelector((state) => state.menuLanding)
    const isLogged = Object.keys(user).length > 0
    return (
        <>
            {isLogged ? <NavGeneral /> : <NavLanding />}
            <div
                className={!menuLanding ? style.guarantee : style.guaranteeHide}
                lang='scss'
            >
                <div className={style.reset} lang='scss'>
                    <div>
                        <div className={style.title} lang='scss'>
                            <h2>Garantías</h2>
                        </div>
                    </div>
                </div>
                <div className={style.square} lang='scss'>
                    <h1>La Garantía de felicidad AUXIE</h1>
                    <p>
                        Tu felicidad es nuestra meta. Si no estás feliz, es
                        nuestro deber arreglarlo.
                    </p>
                    <img src={Satisfaction} />

                </div>
                <div className={style.anotherSection} lang='scss'>
                    <h2>Tu experiencia importa</h2>
                    <p>
                        AUXIE se esfuerza por conectarlo con el profesional
                        adecuado para usted y su hogar cada vez. Si no está
                        satisfecho con la calidad del servicio que reservó y
                        pagó directamente en la plataforma, enviaremos otro
                        profesional sin cargo adicional para su próxima reserva.
                    </p>
                    <div className={style.section1} lang='scss'>
                       
                        <h2>¡Contáctanos!</h2>
                        <p>
                            Si no estás satisfecho, ¡háznoslo saber y
                            trabajaremos para corregirlo!
                        </p>
                        <button className={style.contact} lang='scss'>
                            <Link to='/support'>Contáctanos</Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Guarantee
