import style from './resetPassword.module.scss'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { auth } from '../../config/firebase-config'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const ResetPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const handleChange = event => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handleReset = async () => {
        try {
            await sendPasswordResetEmail(auth, email)
            let timerInterval
            Swal.fire({
                title: 'se enviaron instrucciones a su correo, revise su bandeja de entrada',
                icon: 'success',
                timer: 5000,

                didOpen: () => {
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 1000)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                    navigate('/')
                },
            })
        } catch (error) {
            console.error(error.message)
        }
    }
    return (
        <div className={style.resetPassword}>
            <h3>Ingrese su email para solicitar el cambio de contraseña</h3>
            <input
                onChange={handleChange}
                type='text'
                className={style.input}
                placeholder='Ingrese su correo electronico'
            ></input>
            <button onClick={handleReset} className={style.send}>
                Enviar
            </button>
        </div>
    )
}

export default ResetPassword
