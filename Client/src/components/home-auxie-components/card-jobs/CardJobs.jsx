import style from './cardJobs.module.scss'

const CardJobs = ({ data }) => {
    const { service, description, status, price } = data

    return (
        <div className={style.CardJobs}>
            <h4>nombre: {service}</h4>
            <h4>trabajo: {description}</h4>
            <h4>status: {status}</h4>
            <h4>precio: {price}</h4>
        </div>
    )
}

export default CardJobs
