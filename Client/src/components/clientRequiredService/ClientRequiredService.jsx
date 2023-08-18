// hooks
import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// actions
import { setServiceStatus } from '../../redux/actions/actions'

// components
import ButtonMercadoPago from '../buttonMercadoPago/ButtonMercadoPago'
import ReviewForm from '../../views/forms/review-form/ReviewForm'
import Swal from 'sweetalert2'

// style
import style from './clientRequiredService.module.scss'

const ClientRequiredService = (job) => {

    const dispatch = useDispatch()
    const client = useSelector((state) => state.loggedUser)

    // local states para manejar el popup del form review
    const targetRef = useRef(null)
    const [showForm, setShowForm] = useState(false)
    const [shouldCloseForm, setShouldCloseForm] = useState(false)

    // props
    const {
        id,
        providerId,
        providerName,
        service,
        requestDate,
        jobDate,
        status,
        description,
        price,
        paymentMethod,
    } = job

    // objecto para traducir mi estado a español
    const translated = {
        approved: 'Aprobado',
        cancelled: 'Rechazado',
        pending: 'Pendiente',
        done: 'Completado',
        declined: 'Declinado',
        proposal: 'Propuesta',
    }

    // función que hace desaparecer el popup
    const handleClickOutside = (event) => {
        if (
            shouldCloseForm &&
            targetRef.current &&
            !targetRef.current.contains(event.target)
        ) {
            setShowForm(false)
            setShouldCloseForm(false)
        }
    }

    // función que acepta o rechaza una propuesta del auxie
    const handleProposal = (status) => {
        const data = {
            providerId: providerId,
            status: status,
            id: id,
            consumerId: client.id,
        }
        if (status === 'approved') dispatch(setServiceStatus(data))
        else dispatch(setServiceStatus(data))
    }


    // función que maneja la acción que va a realizar el botón que se renderiza dependiendo del estado
    const handleClick = (e) => {
        if (e.target.innerText === 'Valorar') {setShowForm(true)
            setShouldCloseForm(false)
            setTimeout(() => {
                setShouldCloseForm(true)
            }, 100)}
        if (e.target.innerText === 'Efectivo')
            return Swal.fire('Pagar en efectivo')
        if (e.target.innerText === 'Cancelado')
            return Swal.fire('Has cancelado tu pedido')
        if (e.target.innerText === 'Pendiente')
            return Swal.fire('Espera a que el Auxie apruebe tu pedido')
        if (e.target.innerText === 'Declinado')
            return Swal.fire('El auxie ha cancelado tu pedido')
    }

     // hook que escucha si se hace click fuera del form review
    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [shouldCloseForm])

    return (
        <>
        {showForm && (
            <div className={style.reviewFormContainer}>
                <div className={style.reviewForm} ref={targetRef}>
                    <ReviewForm />
                </div>
            </div>
        )}
        <div className={style.cardCont}>
            <div className={style.requestDetails}>
                <p>Número de solicitud: </p>
                {id}
                <p>Auxie: </p>
                <Link to={`/detail/${providerId}`}>{providerName}</Link>
                <p>Fecha de petición: </p>
                {requestDate}
                <p>Desripción: </p>
                {description}
                <p>servicio: </p>
                {service}
                <p>Fecha de realización: </p>
                {jobDate}
                <p>Precio: </p>${price}
                <p>Estado: </p>
                {translated[status]}
            </div>
            <div className={style.statusButtonCont}>
            {status === 'done' && (
                                        <button onClick={handleClick}>
                                            Valorar
                                        </button>
                                    )}
                                    {status === 'approved' &&
                                        paymentMethod === 'app' && (
                                                    <ButtonMercadoPago
                                                        price={price}
                                                        description={
                                                            description
                                                        }
                                                        quantity={1}
                                                    />
                                        )}
                                    {status === 'approved' &&
                                        paymentMethod ===
                                            'efectivo' && (
                                                    <button
                                                        onClick={handleClick}
                                                    >
                                                        Efectivo
                                                    </button>
                                        )}
                                    {status === 'cancelled' && (
                                        <button onClick={handleClick}>
                                            Cancelado
                                        </button>
                                    )}
                                    {status === 'declined' && (
                                        <button onClick={handleClick}>
                                            Declinado
                                        </button>
                                    )}
                                    {status === 'pending' && (<>
                                        <button onClick={handleClick}>
                                            Pendiente
                                        </button>
                                        <button onClick={() => handleProposal('cancelled')}>
                                        Rechazar
                                    </button>
                                    </>
                                    )}
                                    {status === 'proposal' && (<>
                                        <button onClick={() => handleProposal('approved')}>
                                            Aceptar
                                        </button>
                                        <button onClick={() => handleProposal('cancelled')}>
                                            Rechazar
                                        </button>
                                        </>
                                    )}
            </div>
        </div>
        </>
    )
}

export default ClientRequiredService
