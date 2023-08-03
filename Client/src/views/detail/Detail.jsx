import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetails } from '../../redux/Actions/actions'
import style from './detail.module.scss'

const Detail = () => {
    const dispatch = useDispatch()
    const auxieDetails = useSelector((state) => state.details)
    let { id } = useParams()

    useEffect(() => {
        dispatch(getDetails(id))
        return
    }, [])

    return (
        <div className={style.detail}>
            <h1>{auxieDetails.firstName}</h1>
            <h1>{auxieDetails.lastName}</h1>
        </div>
    )
}

export default Detail
