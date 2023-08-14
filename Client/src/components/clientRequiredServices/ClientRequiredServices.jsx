import { useSelector } from 'react-redux'
import style from './clientRequiredServices.module.scss'
import ClientRequiredService from '../clientRequiredService/ClientRequiredService'

const ClientRequiredServices = () => {
    const client = useSelector((state) => state.loggedUser)
    return (
        <>
            <div className={style.clientServices}>
                {client.requiredServices.length > 0 &&
                    client.requiredServices.map((service) => (
                        <ClientRequiredService
                            key={service.id}
                            service={service.service}
                            requestDate={service.requestDate}
                            status={service.status}
                            description={service.description}
                            price={service.price}
                            paymentMethod={service.paymentMethod}
                        />
                    ))}
            </div>
        </>
    )
}

export default ClientRequiredServices
