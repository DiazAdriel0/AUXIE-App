// import ProfileConsumers from '../profileConsumers/ProfileConsumers'
import NewProfileConsumers from '../new-profile-consumers/NewProfileConsumers'
import NewProfileAuxies from '../new-profile-auxies/NewProfileAuxies'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProfilePage = () => {
    const navigate = useNavigate()
    const user = useSelector(state => state.loggedUser)
    const isAuxie = Object.keys(user).includes('services')
    useEffect(() => {
        if (Object.keys(user).length === 0) return navigate('/')
    }, [])

    return (
        <div>
            <div>
                {isAuxie ? (
                    <div>
                        <NewProfileAuxies />
                    </div>
                ) : (
                    <div>
                        <NewProfileConsumers />
                        {/*  <ProfileConsumers /> */}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfilePage
