import style from './cardJobs.module.scss'
import {useSelector} from 'react-redux'
const CardJobs = ({ data }) => { 
    const { service, description, status, price } = data
    const nightMode = useSelector(state => state.nightMode)
    const translated = {
        approved: 'Aprobado',
        cancelled: 'Cancelado',
        pending: 'Pendiente',
        done: 'Completado',
        declined: 'Rechazado',
        proposal: 'Propuesta',
    }
    return (
        <div className={nightMode ? `${style.CardJobsDark}` : `${style.CardJobsDay}`}>
            <h4><p>Nombre:</p>{service}</h4>
            <h4><p>Trabajo: </p>{description}</h4>
            <h4><p>Status:</p> {translated[status]}</h4>
            <h4><p>Precio:</p> {price}</h4> 
        </div>
    )
}

export default CardJobs
