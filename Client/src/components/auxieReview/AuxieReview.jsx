import style from './auxieReview.module.scss'

const AuxieReview = ({ username, service, review, score }) => {
    return (
        <div className={style.review}>
            <p>User: {username}</p>
            <p>Servicio: {service}</p>
            <p>Descripción: {review}</p>
            <p>valoración: {score}</p>
        </div>
    )
}

export default AuxieReview
