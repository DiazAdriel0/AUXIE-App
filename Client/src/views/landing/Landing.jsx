import style from './landing.module.scss'

//* Import components
import Cards from '../../components/cards/cards'
import NavLanding from '../../components/nav-landing/NavLanding'

const Landing = () => {
    return (
        <div className={style.landing}>
            <NavLanding />
            <Cards />
        </div>
    )
}

export default Landing
