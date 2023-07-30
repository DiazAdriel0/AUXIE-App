import style from './landing.module.scss'

import NavLanding from '../../components/nav-landing/NavLanding'
const Landing = () => {
    return (
        <div className={style.landing}>
            <NavLanding />
        </div>
    )
}

export default Landing
