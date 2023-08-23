import style from './requestedServices.module.scss'
import ClientRequiredServices from '../../components/clientRequiredServices/ClientRequiredServices'
import NavGeneral from '../../components/nav-general/NavGeneral'
import { useSelector } from 'react-redux'

const RequestedServices = () => {
    const nightMode = useSelector(state => state.nightMode)
    return (
        <>
            <NavGeneral />
            <div className={nightMode ? style.servicesTitleContNight : style.servicesTitleCont}>
                        <h2 className={style.servicesTitle}>Servicios contratados</h2>
            </div>
            <div className={style.requiredServicesCont}>
                <div>
                    <ClientRequiredServices />
                </div>
            </div>
        </>
    )
}

export default RequestedServices
