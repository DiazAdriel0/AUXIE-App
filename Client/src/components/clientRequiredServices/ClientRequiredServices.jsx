import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './clientRequiredServices.module.scss'
import ButtonMercadoPago from '../buttonMercadoPago/ButtonMercadoPago'

const ClientRequiredServices = () => {
    const client = useSelector((state) => state.loggedUser)
    return (
        <>
            <table className={style.servicesTable}>
                <thead>
                    <tr>
                        <th>Número de pedido</th>
                        <th>Servicio</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                        <th>Precio</th>
                        <th>Fecha</th>
                        <th>Acción</th>
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
                                <td>
                                    {service.status === 'done' && (
                                        <Link to="/review">
                                            <button>Valorar</button>
                                        </Link>
                                    )}
                                    {service.status === 'approved' && (
                                        <tr>
                                            <td
                                                className={style.payButton}
                                            >
                                                <ButtonMercadoPago
                                                    price={service.price}
                                                    description={
                                                        service.description
                                                    }
                                                    quantity={1}
                                                />
                                            </td>
                                        </tr>
                                    )}
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ClientRequiredServices


// mappeo de servicios como cards, por si preferimos un diseño de presentación de servicios como cards en vez de una tabla
/* <div className={style.clientServices}>
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
            </div> */
