import style from './featuredCard.module.scss'

import Rating from '@mui/material/Rating'
import { useSelector } from 'react-redux'

const FeaturedCard = (user) => {
    const nightMode = useSelector(state => state.nightMode)
    const { lastName, firstName, averageRating, services, image, bio } = user
    return (
        <div className={nightMode? style.featuredCardNight : style.featuredCard}>
            <div className={style.contPersonal}>
                <div className={style.profilePic}>
                    <img
                        src={image}
                        alt='imagen de perfil'
                        width='100px'
                        height='100px'
                    />
                </div>
                <div className={style.info}>
                    <div className={style.name}>
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                    </div>
                    <div className={style.rating}>
                        <Rating
                            name='read-only'
                            value={averageRating}
                            readOnly
                            precision={0.5}
                        />
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
            <div className={style.bio}>
                <p>{bio}</p>
            </div>
        </div>
    )
}

export default FeaturedCard
