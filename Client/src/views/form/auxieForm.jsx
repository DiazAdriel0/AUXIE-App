import { useState } from 'react'
import style from './auxieform.module.scss'

const Form = () => {
    const [input, setInput] = useState({
        name: '',
        lastName: '',
        username: '',
        age: 0,
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        console.log(event)
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        })
        // validate({
        //   ...input,
        //   [event.target.name]: event.target.value}, event.target.name)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // dispatch(postPokemon(input))
        const form = document.getElementById('form')
        form.reset()
        //navigate home / pending jobs ///
    }
    return (
        <div className={style.auxieForm}>
            <div className={style.formtitle}>
                Bienvenido futuro Auxie! Completa tu registro ahora!
            </div>

            <form id="form" onSubmit={handleSubmit}>
                <div className={style.forminput}>
                    <label>Nombre: </label>
                    <input
                        name="name"
                        type="text"
                        className={style.textInput}
                        placeholder="Nombre"
                        onChange={handleChange}
                    ></input>
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
                </div>

                <div className={style.submitbutton}>
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    )
}

export default Form
