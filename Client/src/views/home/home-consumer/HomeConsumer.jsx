// hooks
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useNotify from './../../../hooks/useNotify'

// estilos
import style from './homeConsumer.module.scss'

//componentes
import Cards from '../../../components/cards/Cards'
import Filters from '../../../components/filters/Filters'
import NavGeneral from '../../../components/nav-general/NavGeneral'

//actions
import { resetAuxiesCatalog, updateFirstLogin } from '../../../redux/actions/actions'

//assets

import Footer from '../../../components/footer/Footer'

const HomeConsumer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.loggedUser)
    const nightMode = useSelector(state => state.nightMode)

    const { sendNotification } = useNotify(user.userUid)

    useEffect(() => {
        if (Object.keys(user).length === 0) return navigate('/clientlogin')
        if (Object.keys(user).includes('services')) return navigate('/homeAuxie')
        let welcome
        switch (user.gender) {
            case 'Masculino':
                welcome = 'Bienvenido'
                break
            case 'Femenino':
                welcome = 'Bienvenida'
                break
            case 'Otro':
                welcome = 'Bienvenide'
                break
            default:
                welcome = 'Bienvenidx'
        }
        if (user.firstLogin) {
            sendNotification(`${welcome} a Auxie ${user.firstName}, ingresa a tu perfil para modificar tu biografía`)
            dispatch(updateFirstLogin('consumers', user.id))
        }

        dispatch(resetAuxiesCatalog())
    }, [])

    return (
        <>
            <>
                <NavGeneral />
                <div className={style.contHome}>
                    <div className={nightMode ? style.catalogTitleContNight : style.catalogTitleCont}>
                        <h2 className={style.catalogTitle}>Contratar un Auxie</h2>
                    </div>
                    <div className={style.catalogCont}>
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
                <Footer />
            </>
        </>
    )
}

export default HomeConsumer
