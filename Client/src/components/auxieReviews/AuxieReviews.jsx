import { useRef } from 'react'
import AuxieReview from '../auxieReview/AuxieReview'
import style from './auxieReviews.module.scss'
import { useState } from 'react'
const AuxieReviews = ({ services }) => {
    const [more, setMore] = useState(true)
    const [num, setNum] = useState (2)
    const miRef = useRef()
    const handleMore = ()=>{
        setNum(services.length)
        miRef.current?.scrollIntoView()
        setMore(false)
    }
    return (
        <div className={style.reviews}>
            <div ref={miRef}></div>
            {services &&
                services.slice(0,num).map(service => ( 
                    <AuxieReview
                        key={service.review + Math.random()}
                        username={service.username}
                        service={service.service}
                        review={service.review}
                        score={service.score}
                        log={service}
                    />
                ))}
            {more && <p onClick={handleMore} className="underline p-4 text-center">Mostrar más</p>}
        </div>
    )
}

export default AuxieReviews
