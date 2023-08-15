// hooks
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom'

// estilos
import style from './homeConsumer.module.scss'

//componentes
import Cards from '../../../components/cards/Cards'
import Filters from '../../../components/filters/Filters'
import NavGeneral from '../../../components/nav-general/NavGeneral'
// import ClientRequiredServices from '../../../components/clientRequiredServices/ClientRequiredServices'

//actions
import { resetAuxiesCatalog } from '../../../redux/actions/actions'

//assets
import CircleIconAuxie from '../../../assets/logos/CircleIconAuxie.png'

const HomeConsumer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.loggedUser)
    const isConsumer = Object.keys(user).includes('requiredServices')
    const isOtro = !user.gender ? true : user.gender === 'Otro' ? true : false

    const location = useLocation()
    if (location.state) {
        const from = location.state.from;
        console.log('Redirigido desde:', from);
      }
    console.log('Current URL:', location.pathname)

    useEffect(() => {
        if (Object.keys(user).length === 0) return navigate('/clientlogin')
        if (Object.keys(user).includes('services'))
            return navigate('/homeAuxie')

        dispatch(resetAuxiesCatalog())
    }, [])

    return (
        <>
            {isConsumer ? (
                <>
                    <NavGeneral />
                    <div className={style.contHome}>
                        <div className={style.welcomeMessage}>
                            {user.gender && user.gender === 'Masculino' ? (
                                <h1 className={style.message}>
                                    Bienvenido {user.firstName}
                                </h1>
                            ) : null}
                            {user.gender && user.gender === 'Femenino' ? (
                                <h1 className={style.message}>
                                    Bienvenida {user.firstName}
                                </h1>
                            ) : null}
                            {isOtro ? (
                                <h1 className={style.message}>
                                    Bienvenide {user.firstName}
                                </h1>
                            ) : null}
                        </div>
                        <div className={style.catalogTitleCont}>
                            <h2 className={style.catalogTitle}>
                                Contratar un Auxie
                            </h2>
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
                    {/* <div className={style.servicesTitleCont}>
                        <h2 className={style.servicesTitle}>
                            Servicios contratados
                        </h2>
                    </div>
                    <div className={style.services}>  
                        { <ClientRequiredServices/> } // Componente que muestra los objectos de la propiedad requiredServices del usuario, falta agregarles servicios a los usuarios
                    </div> */}
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
