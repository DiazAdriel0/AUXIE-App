import { Link } from 'react-router-dom'
import style from './card.module.scss'

const Card = (user) => {
    const { id, lastName, firstName, averageRating, services, image } = user

    return (
        <div className={style.card}>
            <div className={style.contPersonal}>
                <div className={style.profilePic}>
                    <img
                        src={image}
                        alt="imagen de perfil"
                        height="100px"
                        width="100px"
                    />
                </div>
                <div className={style.info}>
                    <div className={style.name}>
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                    </div>
                    <div className={style.rating}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={style.star}
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#ffec00"
                            fill="#ffec00"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path
                                stroke="#000"
                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                                fill="none"
                                strokeWidth="4px"
                            />
                            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                        </svg>
                        <p>{averageRating}</p>
                    </div>
                </div>
            </div>
            <div className={style.contServices}>
                {services.length > 0 ? (
                    services.map((service) => {
                        return (
                            <div
                                className={style.serviceDiv}
                                key={service.name}
                            >
                                <p className={style.serviceName}>
                                    {service.name}
                                </p>
                                <p>${service.price}/hr.</p>
                            </div>
                        )
                    })
                ) : (
                    <div className={style.noServices}>
                        <p className={style.serviceName}>No ofrece servicios</p>
                    </div>
                )}
            </div>
            <Link to={`/detail/${id}`}>
                <button className={style.button}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        ></path>
                    </svg>

                    <div className={style.text}>Contratar</div>
                </button>
            </Link>
        </div>
    )
}

export default Card

/* {completedWorks?.map((complete) => {
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
            })} */
