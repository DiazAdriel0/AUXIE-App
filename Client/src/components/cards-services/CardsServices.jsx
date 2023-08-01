import style from './cardServices.module.scss'

//* Hooks
import { useEffect } from 'react'

const CardServices = () => {
    useEffect(() => {}, [])

    return (
        <div className={style.cardServices}>
            <h3>Card Services</h3>
        </div>
    )
}

export default CardServices
