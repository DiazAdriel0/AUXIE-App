import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './detail.module.scss'

const Detail = () => {
    const [auxieDetails, setAuxieDetails] = useState({})
    let { id } = useParams()

    useEffect(() => {
        const getDetails = async function () {
            const res = await axios.get(`http://localhost:3001/providers/${id}`)
            setAuxieDetails(res.data)
        }
        getDetails()
    }, [])
    return (
        <>
            {auxieDetails && (
                <>
                    <div className={style.detail}>
                        <h1>{auxieDetails.firstName}</h1>
                        <h1>{auxieDetails.lastName}</h1>
                    </div>
                </>
            )}
        </>
    )
}

export default Detail
