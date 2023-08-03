import React, { useEffect, useState } from 'react'
import style from './clientLogin.module.scss'
import { useValidations } from '../../../utils/validationutils'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ClientLogin = () => {
    const navigate = useNavigate()
    const { errors, validate } = useValidations()
    const [access, setAccess] = useState(false) //eslint-disable-line

    const [input, setInput] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {
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
    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'http://localhost:3001/consumers/login',
                input
            )
            if (response) {
                setAccess(true)
            }
        } catch (error) {
            console.error('error: ' + error.response.data.error)
            alert(error.response.data.error)
        }
    }

    useEffect(() => {
        if (access === true) {
            navigate('/home')
        }
    }, [access])

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin()
        // dispatch(postPokemon(input))
        const form = document.getElementById('form')
        form.reset()
        //navigate home / search auxies ///
    }

    //////para desabilitar el boton si no esta lleno el formulario=>
    const buttonDisabled = () => {
        // Check if the "types" field is empty
        if (
            input.password.trim().length === 0 ||
            input.email.trim().length === 0
        ) {
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

    //////

    return (
        <div className={style.login}>
            <form form id="form" onSubmit={handleSubmit} className={style.form}>
                <div>
                    <div>
                        <h1>Inicia sesion para acceder a Auxie</h1>
                    </div>
                    <div className={style.logininput}>
                        <label>Email: </label>
                        <input
                            name="email"
                            type="email"
                            className={style.textInput}
                            placeholder="Correo electronico"
                            onChange={handleChange}
                        ></input>
                        <div className={style.errors}>
                            <p>{errors.email}</p>
                        </div>
                    </div>

                    <div className={style.logininput}>
                        <label>Password: </label>
                        <input
                            name="password"
                            type="password"
                            className={style.textInput}
                            placeholder="Contraseña"
                            onChange={handleChange}
                        ></input>
                        <div className={style.errors}>
                            <p>{errors.password}</p>
                        </div>
                    </div>

                    <div className={style.submitbutton}>
                        <input
                            type="submit"
                            disabled={buttonDisabled()}
                        ></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ClientLogin
