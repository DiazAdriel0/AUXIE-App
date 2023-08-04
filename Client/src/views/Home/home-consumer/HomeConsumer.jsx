import style from './homeConsumer.module.scss'
import Cards from '../../../components/Cards/Cards'
import Filters from '../../../components/Filters/Filters'
import NavLanding from '../../../components/nav-landing/NavLanding'

const HomeConsumer = () => {
    return (
        <>
            <NavLanding />
            <div className={style.contHome}>
                <div className={style.welcomeMessage}>
                    <h1 className={style.message}>Bienvenido/a @user</h1>
                </div>
                <div className={style.auxieCatalog}>
                    <div className={style.catalogTitleCont}>
                        <h1 className={style.catalogTitle}>
                            Contratar un Auxie
                        </h1>
                    </div>
                    <div className={style.catalog}>
                        <div className={style.filters}>
                            <Filters />
                        </div>
                        <div className={style.cards}>
                            <Cards />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeConsumer
