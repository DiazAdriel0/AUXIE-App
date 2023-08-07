import style from './homeAuxie.module.scss'

import { useSelector } from 'react-redux'
//Import components
import CardServices from '../../../components/card-services/CardServices'
import AsideAuxie from '../../../components/home-auxie-components/aside-auxie/AsideAuxie'
import NavGeneral from '../../../components/nav-general/NavGeneral'

//Hooks

const HomeAuxie = () => {
    const loggedUser = useSelector((state) => state.loggedUser)

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
                                <CardServices
                                    key={service.name}
                                    name={service.name}
                                    services={service}
                                />
                            ))
                        ) : (
                            <p>No ofrece servicios</p>
                        )}
                    </div>
                    <div className={style.inbox}>
                        <p>Puntuacion de los ultimos servicios</p>
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
