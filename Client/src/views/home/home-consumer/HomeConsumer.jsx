// hooks
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import useNotify from './../../../hooks/useNotify'

// estilos
import style from './homeConsumer.module.scss'

//componentes
import Cards from '../../../components/cards/Cards'
import Filters from '../../../components/filters/Filters'
import NavGeneral from '../../../components/nav-general/NavGeneral'

//actions
import { resetAuxiesCatalog } from '../../../redux/actions/actions'

//assets
import CircleIconAuxie from '../../../assets/logos/CircleIconAuxie.png'

import axios from 'axios'

const HomeConsumer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.loggedUser)
    const isConsumer = Object.keys(user).includes('requiredServices')
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
            sendNotification(`${welcome} a Auxie ${user.firstName}, ingresa a tu perfil para modificar tu bio`)
            axios.put('/providers/firstLogin', { id: user.id })
        }

        dispatch(resetAuxiesCatalog())
    }, [])

    return (
        <>
            {isConsumer ? (
                <>
                    <NavGeneral />
                    <div className={style.contHome}>
                        <div className={style.catalogTitleCont}>
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
                    <footer className={style.footer}>
                        <div className={style.footerInfo}>
                            <Link to={'/aboutUs'}>
                                <p>Quiénes Somos</p>
                            </Link>
                            <Link to={'/offer'}>
                                <p>Que ofrecemos</p>
                            </Link>
                            <Link to={'/howItWorks'}>
                                <p>Como funciona Auxie</p>
                            </Link>
                            <Link to={'/guarantee'}>
                                <p>Garantías</p>{' '}
                            </Link>
                            <Link to={'/help'}>
                                <p>Ayuda</p>
                            </Link>
                        </div>
                        <div className={style.divFooterTitle}>
                            <img src={CircleIconAuxie} alt='circle icon' className={style.divFooterImg} />
                            <h4>Creado con amor por el Auxie Team</h4>
                        </div>
                        <div className={style.divCopy}>
                            <p>Copyright © 2023</p>
                        </div>
                    </footer>
                </>
            ) : null}
        </>
    )
}

export default HomeConsumer
