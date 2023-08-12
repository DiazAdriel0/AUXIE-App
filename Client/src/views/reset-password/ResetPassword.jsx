import style from './resetPassword.module.scss'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { auth } from '../../config/firebase-config'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const ResetPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    console.log(email)

    const handleChange = (event) => {
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
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
        } catch (error) {
            console.error(error.message)
        }
    }
    return (
        <div className={style.resetPassword}>
            <h3>Ingrese su email</h3>
            <input onChange={handleChange} type="text"></input>
            <button onClick={handleReset}>Enviar</button>
        </div>
    )
}

export default ResetPassword