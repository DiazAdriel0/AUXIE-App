import style from './cardsServices.module.scss'

//*Components
import CardServices from '../card-services/CardServices'

//* Hooks
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllServices } from '../../redux/Actions/actions'

const CardsServices = () => {
    const dispatch = useDispatch()
    const services = useSelector((state) => state.services)

    useEffect(() => {
        dispatch(getAllServices())
    }, [])

    return (
        <div className={style.cardsServices}>
            {services &&
                services.map((services) => (
                    <CardServices
                        key={services.name}
                        name={services.name}
                        providers={services.providers}
                        category={services.category}
                    />
                ))}
        </div>
    )
}

export default CardsServices
