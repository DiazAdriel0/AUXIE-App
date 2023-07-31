import style from './clientform.module.scss'
import { useState } from 'react'


const ClientForm = () => {


    const [input, setInput] = useState({
        name: '',
        lastName: '',
        username: '',
        age: 0,
        email: '',
        password: '',
        address: '',
      
    })

    return (
        <div className={style.form}>
            <div className={style.formtitle}>
                Bienvenido a Auxie! Completa tu registro ahora!
            </div>

            <form id='form'>
                <div className={style.forminput}>
                    <label>Nombre: </label>
                    <input
                        name='Nombre'
                        type='text'
                        className={style.textInput}
                        placeholder='Nombre'
                    ></input>
                </div>
                <div className={style.forminput}>
                    <label>Apellido: </label>
                    <input
                        name='Apellido'
                        type='text'
                        className={style.textInput}
                        placeholder='Apellido'
                    ></input>
                </div>
                <div className={style.forminput}>
                    <label>Edad: </label>
                    <input
                        name='age'
                        type='number'
                        className={style.textInput}
                        placeholder='Edad'
                    ></input>
                </div>
                <div className={style.forminput}>
                    <label>Nombre de usuario: </label>
                    <input
                        name='Username'
                        type='text'
                        className={style.textInput}
                        placeholder='Username'
                    ></input>
                </div>
                <div className={style.forminput}>
                    <label>Email: </label>
                    <input
                        name='Email'
                        type='email'
                        className={style.textInput}
                        placeholder='Email'
                    ></input>
                </div>
                <div className={style.forminput}>
                    <label>Password: </label>
                    <input
                        name='Password'
                        type='password'
                        className={style.textInput}
                        placeholder='Password'
                    ></input>
                </div>
                <div className={style.forminput}>
                    <label>Direccion: </label>
                    <input
                        name='Direccion'
                        type='text'
                        className={style.textInput}
                        placeholder='Direccion'
                    ></input>
                </div>

                <div className={style.submitbutton}>
                    <input type='submit'></input>
                </div>
            </form>
        </div>
    )
}

export default ClientForm
