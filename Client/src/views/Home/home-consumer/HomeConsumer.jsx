import style from './homeConsumer.module.scss'
import Cards from '../../../components/Cards/Cards'
import Filters from '../../../components/Filters/Filters'
import NavGeneral from '../../../components/nav-general/NavGeneral'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { resetAuxiesCatalog } from '../../../redux/Actions/actions'
import { useNavigate, Link } from 'react-router-dom'
import CircleIconAuxie from '../../../assets/Logos/CircleIconAuxie.png'

const HomeConsumer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.loggedUser)
    
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
                        <div className={style.catalogTitleCont}>
                                <h2 className={style.catalogTitle}>
                                    Contratar un Auxie
                                </h2>
                            </div>
                        <div className={style.auxieCatalog}>
                            
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
                                    <Link to={'/aboutUs'}><p>Quiénes Somos</p></Link>
                                    <Link to={'/offer'}><p>Que ofrecemos</p></Link>
                                    <Link to={'/howItWorks'}>
                                    <p>Como funciona Auxie</p>
                                    </Link>
                                    <Link to={'/guarantee'}><p>Garantías</p> </Link>
                                    <Link to={'/help'}><p>Ayuda</p></Link>
                            </div>
                        <div className={style.divFooterTitle}>
                            <img
                                src={CircleIconAuxie}
                                alt="circle icon"
                                className={style.divFooterImg}
                            />
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
