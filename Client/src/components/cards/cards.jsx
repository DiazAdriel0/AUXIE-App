import style from './cards.module.scss'

import Card from '../card/card'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Cards = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const executor = async () => {
            const { data } = await axios(
                'https://run.mocky.io/v3/2e14d09c-a9cb-4acf-9e56-a01ef1403342'
            )

            setUsers(data)
        }
        executor()
    }, [])

    return (
        <div className={style.cards}>
            {users.map((user) => (
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
