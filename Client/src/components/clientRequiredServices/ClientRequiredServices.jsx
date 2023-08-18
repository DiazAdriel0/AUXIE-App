import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DateTime } from 'luxon'
import style from './clientRequiredServices.module.scss'
import ButtonMercadoPago from '../buttonMercadoPago/ButtonMercadoPago'
import ClientRequiredService from '../clientRequiredService/ClientRequiredService'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import { updateConsumer, setServiceStatus } from '../../redux/actions/actions'

const ClientRequiredServices = () => {
    const dispatch = useDispatch()
    const client = useSelector((state) => state.loggedUser)
    const navigate = useNavigate()
    const [cards, setCards] = useState(false)
    const [updated, setUpdated] = useState(false)
    const translated = {
        approved: 'Aprobado',
        cancelled: 'Rechazado',
        pending: 'Pendiente',
        done: 'Completado',
        declined: 'Declinado',
        proposal: 'Propuesta',
    }

    const handleSwitch = () => {
        if (cards) return setCards(false)
        if (!cards) return setCards(true)
    }


    const handleProposal = (status, service, provider) => {
        const data = {
            providerId: provider,
            status: status,
            id: service,
            consumerId: client.id,
        }
        if (status === 'approved') dispatch(setServiceStatus(data))
        else dispatch(setServiceStatus(data))
        setUpdated(true)
    }

    const handleClick = (e) => {
        if (e.target.innerText === 'Valorar') return navigate('/review')
        if (e.target.innerText === 'Efectivo')
            return Swal.fire('Pagar en efectivo')
        if (e.target.innerText === 'Cancelado')
            return Swal.fire('Has cancelado tu pedido')
        if (e.target.innerText === 'Pendiente')
            return Swal.fire('Espera a que el Auxie apruebe tu pedido')
        if (e.target.innerText === 'Declinado')
            return Swal.fire('El auxie ha cancelado tu pedido')
    }

    useEffect(() => {
        dispatch(updateConsumer(client.userUid))
    },[updated])
    return (
        <>
            <button onClick={handleSwitch}>Switch</button>
            {cards ? (
                <div className={style.clientServicesCards}>
                    {client.requiredServices?.map((service) => (
                        <ClientRequiredService
                            key={service.id}
                            id={service.id}
                            providerId={service.providerId}
                            providerName={service.providerName}
                            service={service.service}
                            requestDate={service.requestDate}
                            jobDate={service.jobDate}
                            status={service.status}
                            description={service.description}
                            price={service.price}
                            paymentMethod={service.paymentMethod}
                        />
                    ))}
                </div>
            ) : (
                <table className={style.servicesTable}>
                    <thead>
                        <tr>
                            <th>Número de pedido</th>
                            <th>Auxie</th>
                            <th>Servicio</th>
                            <th>Descripción</th>
                            <th>Estado</th>
                            <th>Precio</th>
                            <th>Fecha de petición</th>
                            <th>Fecha de realización</th>
                            <th>Método de pago</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {client.requiredServices?.map((service) => (
                            <tr key={service.id}>
                                <td>{service.id}</td>
                                <td>{service.providerName}</td>
                                <td>{service.service}</td>
                                <td>{service.description}</td>
                                <td>{translated[service.status]}</td>
                                <td>{`$${service.price}`}</td>
                                <td>{DateTime.fromISO(service.requestDate)?.toLocaleString(DateTime.DATE_MED)}</td>
                                <td>{service.jobDate}</td>
                                <td>{service.paymentMethod}</td>
                                <td>
                                    {service.status === 'done' && (
                                        <button onClick={handleClick}>
                                            Valorar
                                        </button>
                                    )}
                                    {service.status === 'approved' &&
                                        service.paymentMethod === 'app' && (
                                            <tr>
                                                <td className={style.payButton}>
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
                                    {service.status === 'approved' &&
                                        service.paymentMethod ===
                                            'efectivo' && (
                                            <tr>
                                                <td className={style.payButton}>
                                                    <button
                                                        onClick={handleClick}
                                                    >
                                                        Efectivo
                                                    </button>
                                                </td>
                                            </tr>
                                        )}
                                    {service.status === 'cancelled' && (
                                        <button onClick={handleClick}>
                                            Cancelado
                                        </button>
                                    )}
                                    {service.status === 'declined' && (
                                        <button onClick={handleClick}>
                                            Declinado
                                        </button>
                                    )}
                                    {service.status === 'pending' && (<>
                                        <button onClick={handleClick}>
                                            Pendiente
                                        </button>
                                        <button onClick={() => handleProposal('cancelled',service.id, service.providerId)}>
                                        Rechazar
                                    </button>
                                    </>
                                    )}
                                    {service.status === 'proposal' && (<>
                                        <button onClick={() => handleProposal('approved', service.id, service.providerId)}>
                                            Aceptar
                                        </button>
                                        <button onClick={() => handleProposal('cancelled',service.id, service.providerId)}>
                                            Rechazar
                                        </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}

export default ClientRequiredServices
