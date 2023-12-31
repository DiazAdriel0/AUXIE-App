import style from './auxieform.module.scss'

import NavLanding from '../../../components/nav-landing/NavLanding'
import CircularProgress from '@mui/material/CircularProgress'

import { useEffect, useState } from 'react'
import { useValidations } from '../../../utils/validationutils'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import Swal from 'sweetalert2'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../config/firebase-config'

const Form = () => {
    const { errors, validate } = useValidations()
    const [loading, setLoading] = useState(false)
    const [access, setAccess] = useState(false)
    const navigate = useNavigate()
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        username: '',
        age: 0,
        email: '',
        password: '',
        gender: '',
        userUid: '',
    })

    const handleChange = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        })
        validate(
            {
                ...input,
                [event.target.name]: event.target.value,
            },
            event.target.name
        )
    }
    const handlePost = async input => {
        try {
            const response = await axios.post('/providers/', input)
            if (response) {
                setLoading(false)
                let welcome
                switch (response.data.gender) {
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
                        welcome = 'Bienvenidx'
                }
                setAccess(true)
                const form = document.getElementById('form')
                form.reset()
                Swal.fire(`Usuario creado con éxito. ${welcome} a Auxie!`)
            }
        } catch (error) {
            let er = error.response.data.error
            console.error(er)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${er}`,
                footer: '<a href="">Why do I have this issue?</a>',
            })
        }
    }
    useEffect(() => {
        if (access === true) {
            navigate('/auxielogin')
        }
    }, [access])

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        try {
            const credential = await createUserWithEmailAndPassword(auth, input.email, input.password)
            const user = credential.user
            const uid = user.uid
            let data = {}
            if (credential) {
                data = {
                    ...input,
                    userUid: uid,
                }
            }
            handlePost(data)
        } catch (error) {
            setLoading(false)
            console.error(error.message)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Parece que el correo proporcionado ya está en uso.',
            })
        }
    }

    const buttonDisabled = () => {
        if (
            input.password.trim().length === 0 ||
            input.email.trim().length === 0 ||
            input.firstName.trim().length === 0 ||
            input.lastName.trim().length === 0 ||
            input.age.trim().length === 0 ||
            input.username.trim().length === 0 ||
            input.gender.trim().length === 0
        ) {
            return true
        }

        for (let error in errors) {
            if (errors[error] !== '') {
                return true
            }
        }

        return false
    }

    return (
        <>
            <NavLanding />
            <div className={style.form}>
                <div className={style.formtitle}>
                    <h3>Bienvenido futuro Auxie! Completa tu registro ahora</h3>
                </div>
                <form id='form' onSubmit={handleSubmit}>
                    <div className={style.forminput}>
                        <label>Nombre: </label>
                        <input
                            name='firstName'
                            type='text'
                            className={style.textInput}
                            placeholder='Nombre'
                            onChange={handleChange}
                        ></input>
                        <div className={style.errors}>
                            <p>{errors.firstName}</p>
                        </div>
                    </div>
                    <div className={style.forminput}>
                        <label>Apellido: </label>
                        <input
                            name='lastName'
                            type='text'
                            className={style.textInput}
                            placeholder='Apellido'
                            onChange={handleChange}
                        ></input>
                        <div className={style.errors}>
                            <p>{errors.lastName}</p>
                        </div>
                    </div>
                    <div className={style.forminput}>
                        <label>Edad: </label>
                        <input
                            name='age'
                            type='number'
                            className={style.textInput}
                            placeholder='Edad'
                            onChange={handleChange}
                        ></input>
                        <div className={style.errors}>
                            <p>{errors.age}</p>
                        </div>
                    </div>
                    <div className={style.forminput}>
                        <label>Género: </label>
                        <select onChange={handleChange} name='gender' defaultValue={''}>
                            <option disabled value=''>
                                Género
                            </option>
                            <option value='Masculino'>Masculino</option>
                            <option value='Femenino'>Femenino</option>
                            <option value='Otro'>Otro</option>
                        </select>

                        <div className={style.errors}>
                            <p>{errors.gender}</p>
                        </div>
                    </div>
                    <div className={style.forminput}>
                        <label>Nombre de usuario: </label>
                        <input
                            name='username'
                            type='text'
                            className={style.textInput}
                            placeholder='Username'
                            onChange={handleChange}
                        ></input>
                        <div className={style.errors}>
                            <p>{errors.username}</p>
                        </div>
                    </div>
                    <div className={style.forminput}>
                        <label>Email: </label>
                        <input
                            name='email'
                            type='email'
                            className={style.textInput}
                            placeholder='Email'
                            onChange={handleChange}
                        ></input>
                        <div className={style.errors}>
                            <p>{errors.email}</p>
                        </div>
                    </div>
                    <div className={style.forminput}>
                        <label>Contraseña: </label>
                        <input
                            name='password'
                            type='password'
                            className={style.textInput}
                            placeholder='Password'
                            onChange={handleChange}
                        ></input>
                        <div className={style.errors}>
                            <p>{errors.password}</p>
                        </div>
                    </div>

                    {loading ? (
                        <CircularProgress />
                    ) : (
                        <div className={style.submitbutton}>
                            <input type='submit' disabled={buttonDisabled()}></input>
                        </div>
                    )}
                </form>
            </div>
        </>
    )
}

export default Form
