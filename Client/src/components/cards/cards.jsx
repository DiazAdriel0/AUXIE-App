import Card from '../card/card'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Cards = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const executor = async () => {
            const { data } = await axios(
                'https://run.mocky.io/v3/36a5fcf5-b5d5-4d4f-8553-dc4ac1b34a7f'
            )

            setUsers([data])
        }
        executor()
    }, [])
    console.log(users)
    return (
        <div>
            {users?.map((user) => (
                <Card key={user.id} user={user} />
            ))}
        </div>
    )
}

export default Cards
