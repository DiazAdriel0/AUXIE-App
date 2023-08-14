import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './clientRequiredServices.module.scss'
import ButtonMercadoPago from '../buttonMercadoPago/ButtonMercadoPago'

// import ClientRequiredService from '../clientRequiredService/ClientRequiredService'

const ClientRequiredServices = () => {
    const client = useSelector((state) => state.loggedUser)
    return (
        <>
            <table className={style.servicesTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Servicio</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                        <th>Precio</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {client.requiredServices?.map((service) => (
                        <>
                            <tr key={service.id}>
                                <td>{service.id}</td>
                                <td>{service.service}</td>
                                <td>{service.description}</td>
                                <td>{service.status}</td>
                                <td>{service.price}</td>
                                <td>{service.jobDate}</td>
                            </tr>
                            {service.status === 'approved' && (
                                <tr>
                                    <td colSpan="6" className={style.payButton}>
                                        <ButtonMercadoPago
                                            price={service.price}
                                            description={service.description}
                                            quantity={1}
                                        />
                                    </td>
                                </tr>
                            )}
                            {service.status === 'done' && (
                                <tr>
                                    <td colSpan="6" className={style.payButton}>
                                        <Link to="/review">
                                            <button>Valorar</button>
                                        </Link>
                                    </td>
                                </tr>
                            )}
                            <tr className={style.separacion}>
                                <td colSpan="6"></td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
            {/* <div className={style.clientServices}>
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
            </div> */}
        </>
    )
}

export default ClientRequiredServices
