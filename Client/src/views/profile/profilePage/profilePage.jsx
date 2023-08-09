import ProfileConsumers from '../profileConsumers/profileConsumers'
import ProfileAuxies from '../profileAuxies/profileAuxies'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProfilePage = () => {
    const user = useSelector((state) => state.loggedUser)
    console.log(user)

    return (
        <div>
            <div>
                <Link>
                    <button>Yoyua</button>
                </Link>
            </div>
            <div>
                {user.services.length ? (
                    <ProfileAuxies />
                ) : (
                    <ProfileConsumers />
                )}
            </div>
        </div>
    )
}

export default ProfilePage
