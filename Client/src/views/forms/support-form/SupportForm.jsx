import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import NavGeneral from '../../../components/nav-general/NavGeneral'
import NavLanding from '../../../components/nav-landing/NavLanding'
import SupportFormConsumer from './support-form-consumer/SupportFormConsumer'
import SupportFormProvider from './support-form-provider/SupportFormProvider'
import SuportFormUnloggien from './support-form-unloggien/SupportFormUnloggien'
import SupportFormAdmin from '../../../components/admin-components/SupportFormAdmin'

const ProfilePage = () => {
    const user = useSelector((state) => state.loggedUser)
    const isAuxie = Object.keys(user).includes('services')
    const isConsumer = Object.keys(user).includes('isAdmin')


    return (
        <div>
            <div>
                {!user.id ? (
                    <div>
                        <NavLanding />
                        <SuportFormUnloggien />
                    </div>
                ) : (
                    <div>
                        <NavGeneral />
                        {isAuxie && <SupportFormProvider />}
                        {isConsumer && !user.isAdmin && <SupportFormConsumer />}
                        {isConsumer && user.isAdmin && <SupportFormAdmin />}

                    </div>
                )}
            </div>
            <Link to="/help">
                <button>Volver</button>
            </Link>
        </div>
    )
}

export default ProfilePage
