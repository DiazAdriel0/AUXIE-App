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
            {id}
            {requestDate}
            {description}
            {service}
            {jobDate}
            {price}
            {translated[status]}
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
    )
}

export default ClientRequiredService
