import style from './pruebas.module.scss'
import LoginRegister from '../../components/landing-do-not-enter/LoginRegister'

const Pruebas = () => {
    const { loginContainer } = style
    return (
        <div className={loginContainer}>
            <LoginRegister />
        </div>
    )
}    

export default Pruebas
