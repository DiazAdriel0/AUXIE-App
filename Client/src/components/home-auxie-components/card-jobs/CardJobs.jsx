import style from './cardJobs.module.scss'

const CardJobs = ({ data }) => {
    const { name, trabajo, status, price } = data
    return (
        <div className={style.CardJobs}>
            <h4>nombre: {name}</h4>
            <h4>trabajo: {trabajo}</h4>
            <h4>status: {status}</h4>
            <h4>precio: {price}</h4>
        </div>
    )
}

export default CardJobs
