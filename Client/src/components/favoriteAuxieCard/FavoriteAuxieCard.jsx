import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import style from './favoriteAuxieCard.module.scss'
import { addFavorite, removeFavorite } from '../../redux/actions/actions'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import Rating from '@mui/material/Rating'

const FavoriteAuxieCard = (user) => {
    const dispatch = useDispatch()
    const { id, lastName, firstName, averageRating, services } = user
    const consumer = useSelector((state) => state.loggedUser)
    const navigate = useNavigate()
    const [isFav, setIsFav] = useState(false)

    const handleFavorite = () => {
        const remover = {
            consumerId: consumer.id,
            id: id,
        }
        if (isFav) {
            dispatch(removeFavorite(remover))
            setIsFav(false)
        }
        if (!isFav) {
            dispatch(addFavorite({ ...user, consumerId: consumer.id }))
            setIsFav(true)
        }
    }

    const handleDetail = () => {
        navigate(`/detail/${id}`)
    }

    useEffect(() => {
        consumer.favoritesProviders.forEach((fav) => {
            if (fav.id === id) {
                setIsFav(true)
            }
        })
    }, [])

    return (
        <div className={style.card}>
            <div className={style.contPersonal}>
                <div className={style.info}>
                    <div className={style.name}>
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                    </div>
                    <div className={style.rating}>
                    <Rating name="read-only" value={averageRating} readOnly precision={0.5}/>
                    </div>
                </div>
                <div className={style.favorite}>
                    <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        onClick={handleFavorite}
                        checked={isFav}
                    />
                </div>
            </div>
            <div className={style.contServices}>
                {services.length > 0 ? (
                    services.map((service) => {
                        return (
                            <div
                                className={style.serviceDiv}
                                key={service.name}
                            >
                                <p className={style.serviceName}>
                                    {service.name}
                                </p>
                                <p>${service.price}/hr.</p>
                            </div>
                        )
                    })
                ) : (
                    <div className={style.noServices}>
                        <p className={style.serviceName}>No ofrece servicios</p>
                    </div>
                )}
            </div>
            <button className={style.button} onClick={handleDetail}>
                <div className={style.text}>Contratar</div>
            </button>
        </div>
    )
}

export default FavoriteAuxieCard
