import style from './cards.module.scss'

//* Components
import Card from '../card/card'

import { useSelector } from 'react-redux'

const Cards = () => {
    const users = useSelector((state) => state.filteredAuxies)

    return (
        <div className={style.cards}>
            {users &&
                users.map((user) => (
                    <Card
                        key={user.id}
                        id={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        services={user.services}
                        averageRating={user.averageRating}
                        completedWorks={user.completedWorks}
                        image={user.image}
                    />
                ))}
        </div>
    )
}

export default Cards
