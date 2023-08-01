import style from './landing.module.scss'

//* Import components
import Cards from '../../components/cards/cards'
import NavLanding from '../../components/nav-landing/NavLanding'
import Filters from '../../components/Filters/Filters'

const Landing = () => {
    return (
        <div className={style.landing}>
            <NavLanding />
            <Filters/>
            <Cards />
        </div>
    )
}

export default Landing
