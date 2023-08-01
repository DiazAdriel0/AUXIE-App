import style from './cards.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../card/card'

import { useEffect} from 'react'
import { getAllAuxies } from '../../redux/Actions/actions'


const Cards = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.filteredAuxies)

    useEffect(() => {
        dispatch(getAllAuxies())
    }, [])

    return (
        <div className={style.cards}>
            {users &&
                users.map((user) => (
                    <Card
                        key={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        services={user.services}
                        averageRating={user.averageRating}
                        completedWorks={user.completedWorks}
                    />
                ))}
        </div>
    )
}

export default Cards
