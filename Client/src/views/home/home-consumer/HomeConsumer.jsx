import style from './home.module.scss'
import Cards from '../../components/Cards/Cards'
import Filters from '../../components/Filters/Filters'
import NavLanding from '../../components/nav-landing/NavLanding'

const Home = () => {
    return (
        <>
            <NavLanding />
            <div className={style.title}>
                    <h1>Home</h1>
                </div>
            <div className={style.contHome}>
                <div className={style.filters}>
                    <Filters />
                </div>
                <div className={style.cards}>
                    <Cards />
                </div>
            </div>
        </>
    )
}

export default Home
