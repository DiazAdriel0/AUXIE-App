import style from './navLanding.module.scss'
import { Link, useNavigate } from 'react-router-dom'
const NavLanding = () => {
    const navigate = useNavigate()
    const handlerChange = (event) => {
        const { value } = event.target
        navigate('/' + value)
    }
    return (
        <nav className={style.navLanding}>
            <div className={style.containerLeft}>
                <p>Logo</p>

                <div className={style.viewsLanding}>
                    <select
                        onChange={handlerChange}
                        name="company"
                        defaultValue={'default'}
                    >
                        <option
                            className={style.default}
                            disabled
                            value="default"
                        >
                            Compañia
                        </option>
                        <option value="company">Quiénes Somos</option>
                        <option value="offer">Que ofrecemos</option>
                        <option value="howItWorks">Como funciona Auxie</option>
                    </select>

                    <Link to={'/guarantee'}>
                        <p>Garantías</p>
                    </Link>

                    <Link to={'/help'}>
                        <p>Ayuda</p>
                    </Link>
                </div>
            </div>
            <div className={style.logInOrRegister}>
                <Link to={'/form'}>
                    <p>Ingresar</p>
                </Link>
                <Link to={'/form'}>
                    <p>Registrarse</p>
                </Link>
            </div>
        </nav>
    )
}

export default NavLanding
