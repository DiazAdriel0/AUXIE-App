import style from './logoClient.module.scss'
import { Link } from 'react-router-dom'

import LogoAuxie2 from '../../../assets/logos/logoAuxie2.svg'

const LogoClient = () => {
    return (
        <div className={style.logo}>
            <Link to={'/homeconsumer'}>
                <img src={LogoAuxie2} alt="Logo Auxie" className={style.img} />
            </Link>
        </div>
    )
}

export default LogoClient
