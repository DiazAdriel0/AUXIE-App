import style from './home.module.scss'
import Cards from '../../components/Cards/cards'
import Filters from '../../components/Filters/Filters'


const Home = () => {
    return (
        <div className={style.home}>
            <h1>Home</h1>
            <Filters />
            <Cards />
        </div>
    )
}

export default Home
