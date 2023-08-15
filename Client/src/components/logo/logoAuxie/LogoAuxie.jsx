import style from './logoAuxie.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import LogoLight from '../../../assets/logos/2.png'
import LogoNight from '../../../assets/logos/logoLight.png'

const LogoAuxie = () => {
    const nightMode = useSelector((state) => state.nightMode)

    return (
        <div className={style.logo}>
            <Link to={'/homeauxie'}>
                <img src={!nightMode ? LogoLight : LogoNight} alt="Logo Auxie" className={style.img} />
            </Link>
        </div>
    )
}

export default LogoAuxie
