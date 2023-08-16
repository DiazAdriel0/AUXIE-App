import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './clientRequiredServices.module.scss'
import ButtonMercadoPago from '../buttonMercadoPago/ButtonMercadoPago'
import ClientRequiredService from '../clientRequiredService/ClientRequiredService'
import Swal from 'sweetalert2'
import { useState } from 'react'

const ClientRequiredServices = () => {
    const client = useSelector((state) => state.loggedUser)
    const navigate = useNavigate()
    const [cards, setCards] =  useState(false)
    const translated = {
        'approved': 'Aprobado',
        'rejected': 'Rechazado',
        'pending': 'Pendiente',
        'done': 'Completado',
    }

    const handleSwitch = () => {
        if (cards) return setCards(false)
        if (!cards) return setCards(true)
        
    }

    const handleClick = (e) => {
        if (e.target.innerText === 'Valorar') return navigate('/review')
        if (e.target.innerText === 'Efectivo') return Swal.fire('Pagar en efectivo')
        if (e.target.innerText === 'Rechazado') return Swal.fire('El Auxie ha rechazado tu pedido')
        if (e.target.innerText === 'Pendiente') return Swal.fire('Espera a que el Auxie apruebe tu pedido')
    }
    return (
        <>
        <button onClick={handleSwitch}>Switch</button>
        {cards ? (<div className={style.clientServicesCards}>
                {client.requiredServices.length > 0 &&
                    client.requiredServices?.map((service) => (
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
            </div> ) :(<table className={style.servicesTable}>
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
                            <tr key={service.id}>
                                <td>{service.id}</td>
                                <td>{service.service}</td>
                                <td>{service.description}</td>
                                <td>{translated[service.status]}</td>
                                <td>{`$${service.price}`}</td>
                                <td>{service.jobDate}</td>
                                <td>
                                    {service.status === 'done' && (
                                            <button onClick={handleClick}>Valorar</button>
                                    )}
                                    {service.status === 'approved' && service.paymentMethod === 'app' && (
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
                                    {service.status === 'approved' && service.paymentMethod === 'efectivo' && (
                                        <tr>
                                            <td
                                                className={style.payButton}
                                            >
                                                <button onClick={handleClick}>Efectivo</button>
                                            </td>
                                        </tr>
                                    )}
                                    {service.status === 'rejected' && (<button onClick={handleClick}>Rechazado</button>)}
                                    {service.status === 'pending' && (<button onClick={handleClick}>Pendiente</button>)}
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>)}
        </>
    )
}

export default ClientRequiredServices
