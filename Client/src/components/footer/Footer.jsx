import style from './footer.module.scss' 
import CircleIconAuxie from '../../assets/logos/CircleIconAuxie.png'
import {Link}  from 'react-router-dom'
const Footer = () => {
    return (
        <footer className={style.landingFooter}>
                        <div className={style.divFooterTitle}>
                            <img
                                src={CircleIconAuxie}
                                alt="circle icon"
                                className={style.divFooterImg}
                            />
                            <div className={style.links}>
                            <p><Link>Condiciones de Uso</Link></p>
                            <p><Link>Políticas de Privacidad</Link></p>
                            <p><Link>Condiciones de Uso</Link></p>    
                            </div>
                        </div>
                        <div className={style.divCopy}>
                            <p>Auxie © 2023 Auxie Team. Todos los derechos reservados.</p>
                        </div>
                    </footer>
    )
}

export default Footer