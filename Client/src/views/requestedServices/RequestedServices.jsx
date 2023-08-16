import style from './requestedServices.module.scss'
import ClientRequiredServices from '../../components/clientRequiredServices/ClientRequiredServices'
import NavGeneral from '../../components/nav-general/NavGeneral'

const RequestedServices = () => {
    return (
        <>
            <NavGeneral />
            <div className={style.requiredServicesCont}>
                <div>
                    <ClientRequiredServices />
                </div>
            </div>
        </>
    )
}

export default RequestedServices
