import style from './logoAuxie.module.scss'

import LogoAuxie2 from '../../../assets/logos/LogoAuxie2.svg'
import { Link } from 'react-router-dom'

const LogoAuxie = () => {
    return (
        <div className={style.logo}>
            <Link to={'/homeauxie'}>
                <img src={LogoAuxie2} alt="Logo Auxie" className={style.img} />
            </Link>
        </div>
    )
}

export default LogoAuxie
