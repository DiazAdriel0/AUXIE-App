import style from './pageNotFound.module.scss'
import logo from '../../assets/Logos/CircleIconAuxie.png'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
    return (
        <div className={style.pageNotFound}>
            <div className={style.imgContainer}>
                <img className={style.logo} src={logo} alt="logo pagina 404" />
            </div>

            <div className={style.textContainer}>
                <h2>Página no encontrada</h2>
                <h4>
                    La pagina que estas buscando no existe o esta fuera de uso
                </h4>
            </div>
            <Link to={'/'} className={style.link}>
                <button>Volver al inicio</button>
            </Link>
        </div>
    )
}

export default PageNotFound
