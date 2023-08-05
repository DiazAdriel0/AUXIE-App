import style from './cardsServices.module.scss'

//*Components
import CardServices from '../card-services/CardServices'

//* Hooks

import { useSelector } from 'react-redux'

const CardsServices = () => {
    const services = useSelector((state) => state.services)

    return (
        <div className={style.cardsServices}>
            {services &&
                services.map((services) => (
                    <CardServices
                        key={services.name}
                        name={services.name}
                        image={services.image}
                        providers={services.providers}
                        category={services.category}
                    />
                ))}
        </div>
    )
}

export default CardsServices
