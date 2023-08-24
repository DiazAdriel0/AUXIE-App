import style from './cardsServices.module.scss'

import CardServices from '../card-services/CardServices'

import { useSelector } from 'react-redux'

const CardsServices = () => {
    const services = useSelector((state) => state.services)
    const popularServices = services.slice(5, 13)
    return (
        <div className={style.cardsServices}>
            {services &&
                popularServices.map((services) => (
                    <CardServices
                        key={services.name}
                        name={services.name}
                        image={services.image?.secure_url}
                        providers={services.providers}
                        category={services.category}
                    />
                ))}
        </div>
    )
}

export default CardsServices
