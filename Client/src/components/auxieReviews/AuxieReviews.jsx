import React from 'react'
import AuxieReview from '../auxieReview/AuxieReview'

const AuxieReviews = ({ services }) => {
    return (
        <div>
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
