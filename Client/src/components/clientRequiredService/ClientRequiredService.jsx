import { Link } from 'react-router-dom'
import ButtonMercadoPago from '../buttonMercadoPago/ButtonMercadoPago'
import style from './clientRequiredService.module.scss'

const ClientRequiredService = (job) => {
    const {
        id,
        service,
        requestDate,
        description,
        status,
        jobDate,
        price,
        paymentMethod,
    } = job

    const translated = {
        'approved': 'Aprobado',
        'rejected': 'Rechazado',
        'pending': 'Pendiente',
        'done': 'Completado',
    }
    
    const mercadoPago = paymentMethod === 'app'
    const completedJob = status === 'done'
    const approved = status === 'approved'

    return (
        <div className={style.cardCont}>
            <div className={style.requestDetails}>
            <p>Auxie: {id}</p>
            <p>Fecha de petición: </p>{requestDate}
            <p>Desripción: </p>{description}
            <p>servicio: </p>{service}
            <p>Fecha de realización: </p>{jobDate}
            <p>Precio: </p>${price}
            <p>Estado: </p>{translated[status]}
            </div>
            <div className={style.statusButtonCont}>

            {approved && mercadoPago && (
                <ButtonMercadoPago
                price={price}
                    description={service}
                    quantity={1}
                    />
                    )}
            {completedJob && (
                <Link to="/review">
                    <button>Valorar</button>
                </Link>
            )}
            </div>
        </div>
    )
}

export default ClientRequiredService
