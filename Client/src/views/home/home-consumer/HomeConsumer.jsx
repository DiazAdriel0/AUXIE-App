import style from './homeConsumer.module.scss'
import Cards from '../../../components/Cards/Cards'
import Filters from '../../../components/Filters/Filters'
import NavLanding from '../../../components/nav-landing/NavLanding'

const HomeConsumer = () => {
    return (
        <>
            <NavLanding />
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

export default HomeConsumer
