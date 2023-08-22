import style from './footer.module.scss'
import CircleIconAuxie from '../../assets/logos/CircleIconAuxie.png'
import pinLocation from '../../assets/icons/pin-location.svg'
import { Link } from 'react-router-dom'
const Footer = ({ myRef3 }) => {
    return (
        <footer ref={myRef3} className={style.landingFooter}>
            <img
                src={CircleIconAuxie}
                alt='circle icon'
                className={style.divFooterImg}
            />
            <div className={style.section}>
                <div className={style.divFooterTitle}>
                    <p>Descubri</p>
                    <p>
                        <Link>Convertite en Auxie</Link>
                    </p>
                    <p>
                        <Link>Servicios en tu ciudad</Link>
                    </p>
                    <p>
                        <Link>Todos los servicios</Link>
                    </p>
                    <p>
                        <Link>Ayuda</Link>
                    </p>
                </div>
                <div className={style.social}>
                    <p>Español(Internacional)</p>
                    <p>
                        <img src={pinLocation}></img>Argentina y Mexico
                    </p>
                </div>
            </div>
            <div className={style.links}>
                <p>
                    <Link to='/aboutUs'>Auxie Team</Link>
                </p>
                <p>
                    <Link>Políticas de Privacidad</Link>
                </p>
                <p>
                    <Link>Condiciones de Uso</Link>
                </p>
            </div>
            <div className={style.divCopy}>
                <p>Auxie © 2023 Auxie Team. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer
