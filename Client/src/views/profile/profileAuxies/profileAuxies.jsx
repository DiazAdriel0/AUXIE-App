import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDetails } from '../../../redux/Actions/actions'

const ProfileAuxies = () => {
    const { id } = useParams()
    const providers = useSelector((state) => state.id)
    const token = useSelector((state) => state.token)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDetails(id, token))
    }, [dispatch, id])
    return (
        <div>
            {providers.map((provider) => (
                <div key={provider.id}>
                    <img src={provider.image} alt={provider.image} />
                    <h1>
                        {provider.firstName} {provider.lastName}
                    </h1>
                    <h4>Gender: {provider.gender}</h4>
                    <h3>Email: {provider.email}</h3>
                    <h3>{provider.bio}</h3>
                    <h6>Te uniste:{provider.registerDate}</h6>
                    <div>
                        <h5>
                            Servicios que ofrece: {provider.services.join(', ')}
                        </h5>
                        <h5>Trabajos realizados: {provider.jobs.join(', ')}</h5>
                        <h5>Rating: {provider.ratings}</h5>
                        <h5>Average Rating: {provider.averageRating}</h5>
                        <h5>Reviews: {provider.reviews}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProfileAuxies
