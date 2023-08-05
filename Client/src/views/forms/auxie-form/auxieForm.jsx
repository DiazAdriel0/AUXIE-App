import { useEffect, useState } from 'react'
import style from './auxieform.module.scss'
import { useValidations } from '../../../utils/validationutils'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const { errors, validate } = useValidations()
    const [access, setAccess] = useState(false) //eslint-disable-line
    const navigate = useNavigate()
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        username: '',
        age: 0,
        email: '',
        password: '',
        gender: '',
    })

    const handleChange = (event) => {
        console.log(event)
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
    const handlePost = async () => {
        try {
            const response = await axios.post(
                'http://localhost:3001/providers/',
                input
            )
            if (response) {
                setAccess(true)
                const form = document.getElementById('form')
                form.reset()
            }
            // setAccess(true)
            console.log(response)
            // navigate('/home')
        } catch (error) {
            console.log(error + error.response.data.error)
            alert(error.response.data.error)
        }
    }
    useEffect(() => {
        if (access === true) {
            navigate('/auxielogin')
        }
    }, [access])
    const handleSubmit = (e) => {
        e.preventDefault()
        handlePost()
       
    }

    //////para desabilitar el boton si no esta lleno el formulario=>
    const buttonDisabled = () => {
        //check if empty
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

        // Check if any error message is not empty for other fields
        for (let error in errors) {
            if (errors[error] !== '') {
                return true
            }
        }

        return false
    }

    //////
    console.log(input)
    return (
        <div className={style.form}>
            <div className={style.formtitle}>
                <h1>Bienvenido futuro Auxie! Completa tu registro ahora</h1>
            </div>
            <form id="form" onSubmit={handleSubmit}>
                <div className={style.forminput}>
                    <label>Nombre: </label>
                    <input
                        name="firstName"
                        type="text"
                        className={style.textInput}
                        placeholder="Nombre"
                        onChange={handleChange}
                    ></input>
                    <div className={style.errors}>
                        <p>{errors.firstName}</p>
                    </div>
                </div>
                <div className={style.forminput}>
                    <label>Apellido: </label>
                    <input
                        name="lastName"
                        type="text"
                        className={style.textInput}
                        placeholder="Apellido"
                        onChange={handleChange}
                    ></input>
                    <div className={style.errors}>
                        <p>{errors.lastName}</p>
                    </div>
                </div>
                <div className={style.forminput}>
                    <label>Edad: </label>
                    <input
                        name="age"
                        type="number"
                        className={style.textInput}
                        placeholder="Edad"
                        onChange={handleChange}
                    ></input>
                    <div className={style.errors}>
                        <p>{errors.age}</p>
                    </div>
                </div>
                <div className={style.forminput}>
                    <label>Genero: </label>
                    <select
                        onChange={handleChange}
                        name="gender"
                        defaultValue={''}
                    >
                        <option disabled value="">
                            Genero
                        </option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                    </select>

                    <div className={style.errors}>
                        <p>{errors.gender}</p>
                    </div>
                </div>
                <div className={style.forminput}>
                    <label>Nombre de usuario: </label>
                    <input
                        name="username"
                        type="text"
                        className={style.textInput}
                        placeholder="Username"
                        onChange={handleChange}
                    ></input>
                    <div className={style.errors}>
                        <p>{errors.username}</p>
                    </div>
                </div>
                <div className={style.forminput}>
                    <label>Email: </label>
                    <input
                        name="email"
                        type="email"
                        className={style.textInput}
                        placeholder="Email"
                        onChange={handleChange}
                    ></input>
                    <div className={style.errors}>
                        <p>{errors.email}</p>
                    </div>
                </div>
                <div className={style.forminput}>
                    <label>Password: </label>
                    <input
                        name="password"
                        type="password"
                        className={style.textInput}
                        placeholder="Password"
                        onChange={handleChange}
                    ></input>
                    <div className={style.errors}>
                        <p>{errors.password}</p>
                    </div>
                </div>

                <div className={style.submitbutton}>
                    <input type="submit" disabled={buttonDisabled()}></input>
                </div>
            </form>
        </div>
    )
}

export default Form
