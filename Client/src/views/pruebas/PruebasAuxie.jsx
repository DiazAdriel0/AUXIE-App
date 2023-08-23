import style from './pruebas.module.scss'
import LoginRegisterAuxie from '../../components/loginauxie/LoginRegister'

const Pruebas = () => {
    const { loginContainer } = style
    return (
        <div className={loginContainer}>
            <LoginRegisterAuxie />
        </div>
    )
}    

export default Pruebas
