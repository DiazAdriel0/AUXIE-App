import React from 'react'
import { useSelector } from 'react-redux'
// import { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { getDetailsConsumer } from '../../../redux/Actions/actions'

const ProfileConsumers = () => {
    // const { id } = useParams()
    const consumer = useSelector((state) => state.loggedUser)
    // const token = useSelector((state) => state.token)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getDetailsConsumer(id, token))
    // }, [dispatch, id])
    return (
        <div>
            <div key={consumer.id}>
                <img src={consumer.image.secure_url} alt="imagen de perfil" />
                <h1>{`${consumer.firstName} ${consumer.lastName}`}</h1>
                <h4>
                    {consumer.isAdmin && (
                        <div>
                            <h4>Admin</h4>
                        </div>
                    )}
                </h4>
                <h4>Genero: {consumer.gender}</h4>
                <h3>Email: {consumer.email}</h3>
                <h6>Te uniste: {consumer.registerDate}</h6>
                <div>
                    <h5>Auxies favoritos: {consumer.favoritesProviders}</h5>
                    <h5>Servicios contratados: {consumer.requiredServices}</h5>
                    <h5>Servicios requeridos: {consumer.requiredServices}</h5>
                    <h5>Average Rating: {consumer.averageRating}</h5>
                    <h5>Ratings: {consumer.ratings}</h5>
                </div>
            </div>
        </div>
    )
}

export default ProfileConsumers
