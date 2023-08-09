import ProfileConsumers from '../profileConsumers/profileConsumers'
import ProfileAuxies from '../../home-views/auxie-views/profileAuxies/ProfileAuxies'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProfilePage = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.loggedUser)
    const isAuxie = Object.keys(user).includes('services')
    useEffect(() => {
        if (Object.keys(user).length === 0) return navigate('/')
    }, [])

    return <div>{isAuxie ? <ProfileAuxies /> : <ProfileConsumers />}</div>
}

export default ProfilePage
