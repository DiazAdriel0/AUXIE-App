import { useSelector } from 'react-redux'
import style from './clientRequiredServices.module.scss'
import ClientRequiredService from '../clientRequiredService/clientRequiredService'

const ClientRequiredServices = () => {
    const client = useSelector((state) => state.loggedUser)
    return (
        <>
            <div className={style.clientServices}>
                {client.requiredServices.length > 0 &&
                    client.requiredServices.map((service, index) => (
                        <ClientRequiredService
                            key={index}
                            firstName={service.firstName}
                            lastName={service.lastName}
                            name={service.name}
                            status={service.status}
                        />
                    ))}
            </div>
        </>
    )
}

export default ClientRequiredServices
