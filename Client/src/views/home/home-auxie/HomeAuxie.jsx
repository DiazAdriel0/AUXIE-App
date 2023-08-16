import style from './homeAuxie.module.scss'

import { useSelector } from 'react-redux'
//Import components
// import CardServices from '../../../components/card-services/CardServices'
import AsideAuxie from '../../../components/home-auxie-components/aside-auxie/AsideAuxie'
import NavGeneral from '../../../components/nav-general/NavGeneral'

//Hooks

const HomeAuxie = () => {
    const loggedUser = useSelector((state) => state.loggedUser)
    const lastJobs = loggedUser.reviews?.slice(0, 4)

    const { services } = loggedUser
    return (
        <div className={style.home}>
            {/* Header */}
            <header className={style.header}>
                <NavGeneral />
            </header>
            {/* Aside */}
            <AsideAuxie />
            {/* Main */}
            <main className={style.main}>
                <div className={style.services}>
                    <h3>Servicios</h3>
                    <div className={style.userServices}>
                        {services ? (
                            services.map((service) => (
                                <div
                                    className={style.cardServices}
                                    key={service.name}
                                >
                                    <img
                                        src={service.image?.secure_url}
                                        alt={service.name}
                                    />
                                    <h4>{service.name}</h4>
                                </div>
                            ))
                        ) : (
                            <p>No ofrece servicios</p>
                        )}
                    </div>
                    <div className={style.inbox}>
                        <p>Calificación de los ultimos servicios</p>
                        <table className={style.servicesTable}>
                            <thead>
                                <tr>
                                    <th>Servicio</th>
                                    <th>Reseña</th>
                                    <th>Calificación</th>
                                    <th>Contratante</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lastJobs?.map((review, index) => (
                                    <tr key={index}>
                                        <td>{review.service}</td>
                                        <td>{review.review}</td>
                                        <td>{review.score}</td>
                                        <td>{review.username}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={style.payments}>
                    <h3>Pagos</h3>
                </div>
            </main>
            {/* Footer */}
            <footer className={style.footer}>Pie de página</footer>
        </div>
    )
}

export default HomeAuxie
