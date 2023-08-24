import { useDispatch, useSelector } from 'react-redux'
import style from './clientRequiredServices.module.scss'
import ButtonMercadoPago from '../buttonMercadoPago/ButtonMercadoPago'
import ClientRequiredService from '../clientRequiredService/ClientRequiredService'
import ReviewForm from '../../views/forms/review-form/ReviewForm'
import Swal from 'sweetalert2'
import { useEffect, useState, useRef } from 'react'
import { updateConsumer, setServiceStatus } from '../../redux/actions/actions'

const ClientRequiredServices = () => {
    const dispatch = useDispatch()
    const client = useSelector(state => state.loggedUser)
    const [cards, setCards] = useState(true)
    const [update, setUpdate] = useState(false)
    const targetRef = useRef(null)
    const [showForm, setShowForm] = useState(false)
    const [shouldCloseForm, setShouldCloseForm] = useState(false)
    const translated = {
        approved: 'Aprobado',
        cancelled: 'Cancelado',
        pending: 'Pendiente',
        done: 'Completado',
        declined: 'Rechazado',
        proposal: 'Propuesta',
    }

    function formatDateFromMilliseconds(milliseconds) {
        const date = new Date(milliseconds);
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        return date.toLocaleDateString(undefined, options);
      }
    // const formattedDate = formatDateFromMilliseconds(requestDate);

    function formatISOStringToReadable(isoString) {
        const date = new Date(isoString);
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
      
        const formattedDate = `${day} de ${month} de ${year}`;
        return formattedDate;
      }
    //   const formattedDate2 = formatISOStringToReadable(jobDate)

    const handleClickOutside = event => {
        if (shouldCloseForm && targetRef.current && !targetRef.current.contains(event.target)) {
            setShowForm(false)
            setShouldCloseForm(false)
        }
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
    }

    const handleClick = e => {
        if (e.target.innerText === 'Valorar') {
            setShowForm(true)
            setShouldCloseForm(false)
            setTimeout(() => {
                setShouldCloseForm(true)
            }, 100)
        }

        if (e.target.innerText === 'Efectivo') return Swal.fire('Pagar en efectivo')
        if (e.target.innerText === 'Cancelado') return Swal.fire('Has cancelado tu pedido')
        if (e.target.innerText === 'Pendiente') return Swal.fire('Espera a que el Auxie apruebe tu pedido')
        if (e.target.innerText === 'Rechazado') return Swal.fire('El auxie ha rechazado tu pedido')
        setUpdate(true)
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [shouldCloseForm, client])

    useEffect(() => {
        dispatch(updateConsumer(client.userUid))
    }, [update])
    return (
        <>
            {showForm && (
                <div className={style.reviewFormContainer} >
                    <div className={style.reviewForm} ref={targetRef}>
                        <ReviewForm />
                    </div>
                </div>
            )}
            <div className={style.servicesCont}>
                <button onClick={handleSwitch}>{cards ? 'Cambiar a tabla' : 'Cambiar a cartas'}</button>
                {cards ? (
                    <div className={style.clientServicesCards}>
                        {client.requiredServices?.map(service => (
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
                            {client.requiredServices?.map((service, index) => (
                                <tr key={service.id}>
                                    <td>{index + 1}</td>
                                    <td>{service.providerName}</td>
                                    <td>{service.service}</td>
                                    <td>{service.description}</td>
                                    <td>{translated[service.status]}</td>
                                    <td>{`$${service.price}`}</td>
                                    <td>{formatDateFromMilliseconds(service.requestDate)}</td>
                                    <td>{formatISOStringToReadable(service.jobDate)}</td>
                                    <td>{service.paymentMethod}</td>
                                    <td className={style.actionButton}>
                                        {service.status === 'done' && <button onClick={handleClick}>Valorar</button>}
                                        {service.status === 'approved' && service.paymentMethod === 'app' && (
                                            <ButtonMercadoPago
                                                price={service.price}
                                                description={service.description}
                                                quantity={1}
                                            />
                                        )}
                                        {service.status === 'approved' && service.paymentMethod === 'efectivo' && (
                                            <tr>
                                                <button onClick={handleClick}>Efectivo</button>
                                            </tr>
                                        )}
                                        {service.status === 'cancelled' && (
                                            <button onClick={handleClick}>Cancelado</button>
                                        )}
                                        {service.status === 'declined' && (
                                            <button onClick={handleClick}>Rechazado</button>
                                        )}
                                        {service.status === 'pending' && (
                                            <>
                                                <button onClick={handleClick}>Pendiente</button>
                                                <button
                                                    onClick={() =>
                                                        handleProposal('cancelled', service.id, service.providerId)
                                                    }
                                                >
                                                    Rechazar
                                                </button>
                                            </>
                                        )}
                                        {service.status === 'proposal' && (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        handleProposal('approved', service.id, service.providerId)
                                                    }
                                                >
                                                    Aceptar
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleProposal('cancelled', service.id, service.providerId)
                                                    }
                                                >
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
            </div>
        </>
    )
}

export default ClientRequiredServices
