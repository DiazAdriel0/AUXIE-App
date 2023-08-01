import React, { useState } from 'react'
import style from './clientLogin.module.scss'
const ClientLogin = () => {

  const [input, setInput] = useState({
    email: '',
    password: '',
  
  
  
})

  
const handleChange = (event) => {
  console.log(event)
  setInput({
    ...input, 
    [event.target.name]: event.target.value
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
   //navigate home / search auxies ///
   
}

    return (
      <div className={style.login}>
      <form  form id="form" onSubmit={handleSubmit} className={style.form}>

    
      
        <div>
            <div><h1>Inicia sesion para acceder a Auxie</h1></div>
            <div className={style.logininput}>
                    <label>Email: </label>
                    <input
                        name='email'
                        type='email'
                        className={style.textInput}
                        placeholder='Correo electronico'
                        onChange={handleChange}
                    ></input>
                </div>
                <div className={style.logininput}>
                    <label>Password: </label>
                    <input
                        name='password'
                        type='password'
                        className={style.textInput}
                        placeholder='Contraseña'
                        onChange={handleChange}
                    ></input>
                </div>
                <div className={style.submitbutton}>
                    <input type='submit'></input>
                </div>
        </div>
        </form>
        </div>
    )
}

export default ClientLogin
