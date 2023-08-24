// hooks
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// actions
import { setServiceStatus, updateConsumer } from '../../redux/actions/actions'

// components
import ButtonMercadoPago from '../buttonMercadoPago/ButtonMercadoPago'
import ReviewForm from '../../views/forms/review-form/ReviewForm'
import Swal from 'sweetalert2'

// style
import style from './clientRequiredService.module.scss'

const ClientRequiredService = job => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const client = useSelector(state => state.loggedUser)
    const nightMode = useSelector(state => state.nightMode)
    const [update, setUpdate] = useState(false)

    // local states para manejar el popup del form review
    const targetRef = useRef(null)
    const [showForm, setShowForm] = useState(false)
    const [shouldCloseForm, setShouldCloseForm] = useState(false)

    // props
    const { id, providerId, providerName, service, requestDate, jobDate, status, description, price, paymentMethod } =
        job

    // objecto para traducir mi estado a español
    const translated = {
        approved: 'Aprobado',
        cancelled: 'Cancelado',
        pending: 'Pendiente',
        done: 'Completado',
        declined: 'Rechazado',
        proposal: 'Propuesta',
    }

    function formatDateFromMilliseconds(milliseconds) {
        const date = new Date(milliseconds)
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return date.toLocaleDateString(undefined, options)
    }
    const formattedDate = formatDateFromMilliseconds(requestDate)

    function formatISOStringToReadable(isoString) {
        const date = new Date(isoString)
        const year = date.getFullYear()
        const month = date.toLocaleString('default', { month: 'long' })
        const day = date.getDate()

        const formattedDate = `${day} de ${month} de ${year}`
        return formattedDate
    }
    const formattedDate2 = formatISOStringToReadable(jobDate)

    // función que hace desaparecer el popup
    const handleClickOutside = event => {
        if (shouldCloseForm && targetRef.current && !targetRef.current.contains(event.target)) {
            setShowForm(false)
            setShouldCloseForm(false)
        }
    }

    // función que acepta o rechaza una propuesta del auxie
    const handleProposal = status => {
        const data = {
            providerId: providerId,
            status: status,
            id: id,
            consumerId: client.id,
        }
        if (status === 'approved') dispatch(setServiceStatus(data))
        else dispatch(setServiceStatus(data))
    }

    const handleRedirect = () => {
        return navigate(`/detail/${providerId}`)
    }

    // función que maneja la acción que va a realizar el botón que se renderiza dependiendo del estado
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

    // hook que escucha si se hace click fuera del form review
    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [shouldCloseForm])

    useEffect(() => {
        dispatch(updateConsumer(client.userUid))
    }, [update])

    return (
        <>
            {showForm && (
                <div className={style.reviewFormContainer}>
                    <div className={style.reviewForm} ref={targetRef}>
                        <ReviewForm
                            serviceName={service}
                            providerName={providerName}
                            serviceId={id}
                            providerId={providerId}
                        />
                    </div>
                </div>
            )}
            <div className={nightMode ? style.cardContNight : style.cardCont}>
                <div className={style.requestDetails}>
                    <div className={style.requestInfo}>
                        <span className={style.auxieLink} onClick={handleRedirect}>
                            {providerName}
                        </span>
                        <p>| Auxie |</p>
                    </div>
                    <div className={style.col1}>
                        <div className={style.requestDesc}>
                            <p className={style.pService}>
                                Servicio: <span> {service}</span>
                            </p>
                            <p>Desripción: </p>
                            {description}
                        </div>

                        <div className={style.requestDate}>
                            <p>Fecha de petición: </p>
                            {formattedDate}
                            <p>Fecha de realización: </p>
                            {formattedDate2}
                        </div>
                        <div className={style.requestPyS}>
                            <p>
                                Precio: <span>${price}</span>{' '}
                            </p>
                            <p>
                                Estado: <span>{translated[status]}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.statusButtonCont}>
                    {status === 'done' && <button onClick={handleClick}>Valorar</button>}
                    {status === 'approved' && paymentMethod === 'app' && (
                        <ButtonMercadoPago
                            providerId={providerId}
                            price={price}
                            description={description}
                            quantity={1}
                        />
                    )}
                    {status === 'approved' && paymentMethod === 'efectivo' && (
                        <button onClick={handleClick}>Efectivo</button>
                    )}
                    {status === 'cancelled' && <button onClick={handleClick}>Cancelado</button>}
                    {status === 'declined' && <button onClick={handleClick}>Rechazado</button>}
                    {status === 'pending' && (
                        <>
                            <button onClick={handleClick}>Pendiente</button>
                            <button onClick={() => handleProposal('cancelled')}>Cancelar</button>
                        </>
                    )}
                    {status === 'proposal' && (
                        <>
                            <button onClick={() => handleProposal('approved')}>Aceptar</button>
                            <button onClick={() => handleProposal('cancelled')}>Cancelar</button>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default ClientRequiredService
