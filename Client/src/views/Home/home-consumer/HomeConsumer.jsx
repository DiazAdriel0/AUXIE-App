import style from './homeConsumer.module.scss'
import Cards from '../../../components/Cards/Cards'
import Filters from '../../../components/Filters/Filters'
import NavGeneral from '../../../components/nav-general/NavGeneral'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { resetAuxiesCatalog } from '../../../redux/Actions/actions'
import { useNavigate } from 'react-router-dom'

const HomeConsumer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.loggedUser)
    console.log(user);
    useEffect(() => {
        if (Object.keys(user).length === 0) return navigate('/clientlogin')
        if (Object.keys(user).includes('services'))
            return navigate('/homeAuxie')
        dispatch(resetAuxiesCatalog())
    }, [])

    return (
        <>
            {Object.keys(user).includes('requiredServices') ? (
                <>
                    <NavGeneral />
                    <div className={style.contHome}>
                        <div className={style.welcomeMessage}>
                            <h1 className={style.message}>
                                Bienvenido/a {user.firstName}
                            </h1>
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
            ) : null}
        </>
    )
}

export default HomeConsumer
