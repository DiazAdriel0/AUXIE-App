import style from './homeConsumer.module.scss'
import Cards from '../../../components/Cards/Cards'
import Filters from '../../../components/Filters/Filters'

const HomeConsumer = () => {
    return (
        <div className={style.home}>
            <h1>Home</h1>
            <Filters />
            <Cards />
        </div>
    )
}

export default HomeConsumer
