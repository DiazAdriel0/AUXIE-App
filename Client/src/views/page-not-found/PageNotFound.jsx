import style from './pageNotFound.module.scss'
import logo from '../../assets/logos/6.png'
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
                    La página que estás buscando no existe o está fuera de uso
                </h4>
            </div>
            <Link to={'/'} className={style.link}>
                <button>Volver al inicio</button>
            </Link>
        </div>
    )
}

export default PageNotFound
