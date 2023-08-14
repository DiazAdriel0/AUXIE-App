import ProfileConsumers from '../profileConsumers/ProfileConsumers'
import ProfileAuxies from '../profileAuxies/ProfileAuxies'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import style from './ProfilePage.module.scss'

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
                        <ProfileAuxies />
                        <Link to="/homeauxie">
                            <button className={style.back}>Volver</button>
                        </Link>
                        
                    </div>
                ) : (
                    <div>
                        <ProfileConsumers />
                        <Link to="/homeconsumer">
                            <button className={style.back}>Volver</button>
                        </Link>
                        
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfilePage
