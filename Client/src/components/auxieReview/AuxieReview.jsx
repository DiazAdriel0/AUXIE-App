import style from './auxieReview.module.scss'
import Rating from '@mui/material/Rating'

const AuxieReview = ({ username, service, review, score }) => {
    return (
        <article className={style.review}>

            <div className={style.service}>
                <p className={style.sername}>Servicio <span>| {service}</span></p>
                <div className={style.datos}>  
                    <p>{score}</p> 
                    <Rating  name='read-only' value={score}readOnly precision={0.5}></Rating>
                </div>
            </div>
            <div className={style.nyv}>
                <p className={style.name}>{username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()}</p>
                
            </div>
            
            <div className={style.desc}>
            <p className={style.campo}>Descripción: </p><span>{review}</span>
            </div>
        </article>
    )
}

export default AuxieReview
