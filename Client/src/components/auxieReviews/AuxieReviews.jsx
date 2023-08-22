import React from 'react'
import AuxieReview from '../auxieReview/AuxieReview'
import style from './auxieReviews.module.scss'
const AuxieReviews = ({ services }) => {
    return (
        <div className={style.reviews}>
            {services &&
                services.map(service => (
                    <AuxieReview
                        key={service.review}
                        username={service.username}
                        service={service.service}
                        review={service.review}
                        score={service.score}
                    />
                ))}
        </div>
    )
}

export default AuxieReviews
