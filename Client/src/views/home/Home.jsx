import style from './home.module.scss'
import Filters from '../../components/Filters/Filters'
import Cards from '../../components/cards/cards'

const Home = () => {
    return (
        <div className={style.home}>
            <h1>Home</h1>
            <Filters/>
            <Cards/>
        </div>
    )
}

export default Home
