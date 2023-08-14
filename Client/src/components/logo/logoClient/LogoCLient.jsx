import style from './logoClient.module.scss'
import { Link } from 'react-router-dom'

import Logo from '../../../assets/logos/2.png'

const LogoClient = () => {
    return (
        <div className={style.logo}>
            <Link to={'/homeconsumer'}>
                <img src={Logo} alt="Logo Auxie" className={style.img} />
            </Link>
        </div>
    )
}

export default LogoClient
