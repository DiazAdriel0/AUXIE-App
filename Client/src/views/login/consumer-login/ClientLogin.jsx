import React, { useEffect, useState } from 'react'
import style from './clientLogin.module.scss'
import { useValidations } from '../../../utils/validationutils'
import NavLanding from '../../../components/nav-landing/NavLanding'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loggedUser, updateProfile } from '../../../redux/actions/actions'
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../config/firebase-config'
import Swal from 'sweetalert2'
import Pruebas from '../../pruebas/Pruebas'
const ClientLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
 
    const [access, setAccess] = useState(false) //eslint-disable-line

    const [input, setInput] = useState({
        email: '',
        password: '',
    })
    const logged = useSelector(state => state.loggedUser)
    const handleChange = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        })
        ///validations ///
        validate(
            {
                ...input,
                [event.target.name]: event.target.value,
            },
            event.target.name
        )
        ///validations ///
    }
    const handleLogin = async input => {
        try {
            const response = await axios.post('/consumers/login', input)
            if (response) {
                setAccess(true)
                dispatch(loggedUser(response.data))
            }
        } catch (error) {
            console.error('error: ' + error.message)
            Swal.fire(error.message)
        }
    }

    useEffect(() => {
        if (access === true) {
            if (logged?.isAdmin) {
                navigate('/dashboard')
            } else {
                navigate('/homeconsumer')
                let welcome
                switch (logged.gender) {
                    case 'Masculino':
                        welcome = 'Bienvenido'
                        break
                    case 'Femenino':
                        welcome = 'Bienvenida'
                        break
                    case 'Otro':
                        welcome = 'Bienvenide'
                        break
                    default:
                        welcome = 'Hola'
                        break
                }
                let timerInterval
                Swal.fire({
                    title: `${welcome} ${logged.firstName}`,
                    html: '<b></b>', // Set the HTML to be blank
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {}, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    },
                })

                // eslint-disable-next-line no-prototype-builtins
                if (logged.hasOwnProperty('firstName')) {
                    if (!logged?.userUid) {
                        dispatch(updateProfile({ userUid: auth.currentUser.uid, id: logged.id }, 'consumers'))
                    }
                }
            }
        }
    }, [access])

    const handleSubmit = async e => {
        e.preventDefault()

        const form = document.getElementById('form')
        const email = form.email.value
        const password = form.password.value
        try {
            const credential = await signInWithEmailAndPassword(auth, email, password)
            if (credential) {
                handleLogin(input)
            }
            form.reset()
        } catch (error) {
            Swal.fire(error.message)
        }
    }

    //////para desabilitar el boton si no esta lleno el formulario=>
    const buttonDisabled = () => {
        if (input.password.trim().length === 0 || input.email.trim().length === 0) {
            return true
        }

        // Check if any error message is not empty for other fields
        for (let error in errors) {
            if (errors[error] !== '') {
                return true
            }
        }

        return false
    }
    //google Login
    const signInGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider()
            provider.setCustomParameters({ prompt: 'select_account' })
            const credential = await signInWithPopup(auth, provider)
            const email = credential.user.email
            const googleId = credential.user.uid

            if (credential) {
                const data = {
                    email: email,
                    password: {
                        googleId: `${googleId}`,
                        name: `${credential.user.displayName}`,
                        picture: `${credential.user.photoURL}`,
                    },
                }
                handleLogin(data)
            }
        } catch (error) {
            Swal.fire(error.message)
        }
    }

    //////

    return (
        <>
       
            <div className={style.login}>
            <Pruebas />
            </div>
            
        </>
    )
}

export default ClientLogin
