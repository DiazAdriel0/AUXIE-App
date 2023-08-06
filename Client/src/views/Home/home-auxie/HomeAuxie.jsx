import style from './homeAuxie.module.scss'

//Import components
import AsideAuxie from '../../../components/home-auxie-components/aside-auxie/AsideAuxie'

//Hooks

const HomeAuxie = () => {
    return (
        <div className={style.home}>
            {/* Header */}
            <header className={style.header}>Nav Main</header>
            {/* Aside */}
            <AsideAuxie />
            {/* Main */}
            <main className={style.main}>
                <div className={style.services}>
                    <h3>Servicios</h3>
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
