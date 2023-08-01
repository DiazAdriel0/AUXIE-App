import style from './landing.module.scss'

//* Import Hooks
import { useState } from 'react'
//* Import components
import Cards from '../../components/cards/cards'
import NavLanding from '../../components/nav-landing/NavLanding'

const Landing = () => {
    const [menuChange, setMenuChange] = useState(0)

    const handlerMenuSearchAuxie = () => {
        event.preventDefault()
        setMenuChange(1)
    }
    const handlerTurnAuxie = () => {
        event.preventDefault()
        setMenuChange(2)
    }
    return (
        <main className={style.landing}>
            <NavLanding />
            <section>
                <div className={style.menuLogo}>
                    <div className={style.menuMain}>
                        <div className={style.buttonsMenuMain}>
                            <button
                                onClick={handlerMenuSearchAuxie}
                                className={style.searchAuxie}
                            >
                                Busco un Auxie
                            </button>
                            <button
                                onClick={handlerTurnAuxie}
                                className={style.turnAuxie}
                            >
                                Convertirme en Auxie
                            </button>
                        </div>
                        {menuChange === 1 && (
                            <div className={style.menuSearchAuxie}>
                                <h4>Busco Un auxie</h4>
                                <select defaultValue="default">
                                    <option disabled value="default">
                                        Servicios Mas Solicitados
                                    </option>
                                </select>
                            </div>
                        )}
                        {menuChange === 2 && (
                            <div className={style.menuTurnAuxie}>
                                <h4>Aca va un boton al Form</h4>
                            </div>
                        )}
                        {menuChange === 0 && <div></div>}
                    </div>
                </div>
            </section>
            <section className={style.slogan}></section>
            <section className={style.cards}>
                <Cards />
            </section>
            <footer className={style.landingFooter}></footer>
            {/* <Cards /> */}
        </main>
    )
}

export default Landing
