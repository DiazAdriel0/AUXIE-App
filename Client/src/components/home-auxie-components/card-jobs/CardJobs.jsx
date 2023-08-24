import style from './cardJobs.module.scss'
import {useSelector} from 'react-redux'
const CardJobs = ({ data }) => { 
    const { service, description, status, price } = data
    const nightMode = useSelector(state => state.nightMode)

    return (
        <div className={nightMode ? `${style.CardJobsDark}` : `${style.CardJobsDay}`}>
            <h4>Nombre: {service}</h4>
            <h4>Trabajo: {description}</h4>
            <h4>Status: {status}</h4>
            <h4>Precio: {price}</h4>
        </div>
    )
}

export default CardJobs
