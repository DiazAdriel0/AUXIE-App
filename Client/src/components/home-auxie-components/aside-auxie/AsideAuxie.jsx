import style from './asideAuxie.module.scss'
import { Link } from 'react-router-dom'
const AsideAuxie = () => {
    return (
        <aside className={style.aside}>
            <div className={style.menuViews}>
                <ul>
                    <li>
                        <Link to={'/homeauxie'}>Home</Link>
                    </li>

                    <li>
                        <Link to={'/profile'}>Perfil</Link>
                    </li>

                    <li>
                        <Link to={'/auxieservices'}>Trabajos</Link>
                    </li>

                    <li>
                        <Link to={'/auxiestatistics'}>Estadisticas</Link>
                    </li>

                    <li>
                        <Link to={'/auxieinbox'}>inbox</Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default AsideAuxie
