import style from './auxieStatistics.module.scss'
import NavGeneral from '../../../../components/nav-general/NavGeneral'
import AsideAuxie from '../../../../components/home-auxie-components/aside-auxie/AsideAuxie'

const AuxieStatistics = () => {
    return (
        <div className={style.auxieStatistics}>
            {/* Header */}
            <header className={style.header}>
                <NavGeneral />
            </header>
            {/* Aside */}
            <AsideAuxie />
            {/* Main */}
            <main className={style.main}>
                <div className={style.services}>
                    <div className={style.inProgress}>
                        <span>In Progress...</span>
                    </div>
                </div>
                <div className={style.payments}>
                    <h3></h3>
                </div>
            </main>
            {/* Footer */}
            <footer className={style.footer}>Pie de página</footer>
        </div>
    )
}

export default AuxieStatistics
