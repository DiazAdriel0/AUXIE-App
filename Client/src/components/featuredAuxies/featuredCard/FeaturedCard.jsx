import style from './featuredCard.module.scss'

const FeaturedCard = (user) => {
    const { lastName, firstName, averageRating, services, image, bio } = user
    return (
        <div className={style.featuredCard}>
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
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className={style.star}
                            width='25'
                            height='25'
                            viewBox='0 0 24 24'
                            strokeWidth='2'
                            stroke='#ffec00'
                            fill='#ffec00'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <path
                                stroke='#000'
                                d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z'
                                fill='none'
                                strokeWidth='4px'
                            />
                            <path d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z' />
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
            <div className={style.bio}>
                <span>{bio}</span>
            </div>
        </div>
    )
}

export default FeaturedCard
