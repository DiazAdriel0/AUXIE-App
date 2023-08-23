import style from './cardJobs.module.scss'
import {useSelector} from 'react-redux'
const CardJobs = ({ data }) => { 
    const { service, description, status, price } = data
    const nightMode = useSelector(state => state.nightMode)

    return (
        <div className={nightMode ? `${style.CardJobsDark}` : `${style.CardJobsDay}`}>
            <h4>nombre: {service}</h4>
            <h4>trabajo: {description}</h4>
            <h4>status: {status}</h4>
            <h4>precio: {price}</h4>
        </div>
    )
}

export default CardJobs
