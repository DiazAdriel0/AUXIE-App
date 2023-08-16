import { Link, useNavigate} from 'react-router-dom'
import ButtonMercadoPago from '../buttonMercadoPago/ButtonMercadoPago'
import Swal from 'sweetalert2'
import style from './clientRequiredService.module.scss'

const ClientRequiredService = (job) => {
    const navigate = useNavigate()
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

    const translated = {
        approved: 'Aprobado',
        rejected: 'Rechazado',
        pending: 'Pendiente',
        done: 'Completado',
    }

    const handleClick = (e) => {
        if (e.target.innerText === 'Valorar') return navigate('/review')
        if (e.target.innerText === 'Efectivo') return Swal.fire('Pagar en efectivo')
        if (e.target.innerText === 'Rechazado') return Swal.fire('El Auxie ha rechazado tu pedido')
        if (e.target.innerText === 'Pendiente') return Swal.fire('Espera a que el Auxie apruebe tu pedido')
    }

    const mercadoPago = paymentMethod === 'app'
    const completedJob = status === 'done'
    const approved = status === 'approved'
    const rechazado = status === 'rejected'
    const pendiente = status === 'pending'

    return (
        <div className={style.cardCont}>
            <div className={style.requestDetails}>
                <p>Número de solicitud: </p>{id}
                <p>Auxie: </p><Link to={`/detail/${providerId}`}>{providerName}</Link>
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
                {approved && mercadoPago && (
                    <ButtonMercadoPago
                        price={price}
                        description={service}
                        quantity={1}
                    />
                )}
                {approved && paymentMethod === 'efectivo' && (<button onClick={handleClick}>Efectivo</button>)}
                {completedJob && (
                        <button onClick={handleClick}>Valorar</button>
                )}
                {rechazado && (<button onClick={handleClick}>Rechazado</button>)}
                {pendiente && (<button onClick={handleClick}>Pendiente</button>)}
            </div>
        </div>
    )
}

export default ClientRequiredService
