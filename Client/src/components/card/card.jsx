import { Link } from 'react-router-dom';
import style from './card.module.scss'

const Card = (user) => {
    const { id, lastName, firstName, averageRating, completedWorks, services } =
        user
    let completeKey = 0

    return (
        <Link to={`/detail/${id}`}>
        <div className={style.card}>
            <p>{firstName}</p>
            <p>{lastName}</p>

            {completedWorks?.map((complete) => {
                return (
                    <div className={style.completedDiv} key={completeKey++}>
                        <h5>Servicios Completados</h5>
                        <p>{complete.service}</p>

                        {complete.reviews.map((review) => {
                            return (
                                <p key={review.review}>
                                    {` Review de ${review.username} :`}
                                    {review.review}
                                </p>
                            )
                        })}
                    </div>
                )
            })}
            {services.map((service) => {
                return (
                    <div className={style.servicesDiv} key={service.price}>
                        <p>{service.service}</p>
                        <p>Precio:{service.price}</p>
                    </div>
                )
            })}
            <p>Average: {averageRating}</p>
        </div></Link>
    )
}

export default Card
