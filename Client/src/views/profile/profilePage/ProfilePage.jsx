import ProfileConsumers from '../profileConsumers/ProfileConsumers'
import ProfileAuxies from '../profileAuxies/ProfileAuxies'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProfilePage = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.loggedUser)
    const isAuxie = Object.keys(user).includes('services')
    useEffect(() => {
        if (Object.keys(user).length === 0) return navigate('/')
    }, [])

    return (
        <div>
            <div>
                {isAuxie ? (
                    <div>
                        <Link to="/homeauxie">
                            <button>Volver</button>
                        </Link>
                        <ProfileAuxies />
                    </div>
                ) : (
                    <div>
                        <Link to="/homeconsumer">
                            <button>Volver</button>
                        </Link>
                        <ProfileConsumers />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfilePage