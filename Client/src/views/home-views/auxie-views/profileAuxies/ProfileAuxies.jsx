import style from './profileAuxies.module.scss'

import AsideAuxie from '../../../../components/home-auxie-components/aside-auxie/AsideAuxie'
import NavGeneral from '../../../../components/nav-general/NavGeneral'

import { useSelector } from 'react-redux'

const ProfileAuxies = () => {
    const provider = useSelector((state) => state.loggedUser)

    return (
        <div className={style.profileAuxi}>
            <header className={style.header}>
                <NavGeneral />
            </header>

            {/* aside */}
            <AsideAuxie />

            {/* main */}
            <main className={style.main}>
                <img src={provider.image.secure_url} alt="imagen de perfil" />
                <h1>
                    {provider.firstName} {provider.lastName}
                </h1>
                <h4>Gender: {provider.gender}</h4>
                <h3>Email: {provider.email}</h3>
                <h3>{provider.bio}</h3>
                <h6>Te uniste: {provider.registerDate}</h6>
                <div>
                    <h5>Servicios que ofrece:</h5>
                    <h5>Trabajos realizados: </h5>
                    <h5>Rating: </h5>
                    <h5>Average Rating: {provider.averageRating}</h5>
                    <h5>Reviews:</h5>
                </div>
            </main>

            {/* footer */}
            <footer className={style.footer}></footer>
        </div>
    )
}
export default ProfileAuxies
