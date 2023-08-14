import style from './logoAuxie.module.scss'

import Logo from '../../../assets/logos/2.png'
import { Link } from 'react-router-dom'

const LogoAuxie = () => {
    return (
        <div className={style.logo}>
            <Link to={'/homeauxie'}>
                <img src={Logo} alt="Logo Auxie" className={style.img} />
            </Link>
        </div>
    )
}

export default LogoAuxie
