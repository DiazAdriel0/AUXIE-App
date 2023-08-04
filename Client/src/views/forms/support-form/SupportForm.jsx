import style from './SupportForm.module.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useValidations } from '../../../utils/validationutils'

const SupportForm = () => {

    const { errors, validate } = useValidations()
    const [motives, setMotives] = useState([])
    const [input, setInput] = useState({
      username: '',
      email: '', 
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
    const papa=papa
  } catch (error) {
      alert(error.message)
  }
}

const handleSubmit = (e) => {
  e.preventDefault()
  handlePost()
  
  const form = document.getElementById('form')
  form.reset()
}

    const handleCheckboxChange = (e, value) => {
      if (e.target.checked) {
          setMotives([...motives, value]);
      } else {
          setMotives(motives.filter((item) => item !== value));
      }
  };

  const buttonDisabled = () => {
    if (
        input.email.trim().length === 0 ||
        input.username.trim().length === 0
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
        <div>
            <div className={style.claims}>
                <h1>Soporte tecnico</h1>
                <form onSubmit={handleSubmit}>
                    <div >
                        <label htmlFor="emailOrUsername" className={style.formlabel}>
                            Email o Nombre de Usuario
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="emailOrUsername"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="complaint" className={style.formlabel}>
                            Reclamo
                        </label>
                        <textarea
                            id="complaint"
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div >
                        <label htmlFor="auxieName" className={style.formlabel}>
                            Nombre del Auxie
                        </label>
                        <input
                            type="text"
                            id="auxieName"
                            onChange={handleChange}
                        />
                    </div>
                    <div >
                        <label htmlFor="motives" className={style.formlabel}>
                            Selección de Motivos
                        </label>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    value="retraso"
                                    checked={motives.includes('retraso')}
                                    onChange={(e) => handleCheckboxChange(e, 'retraso')}
                                />
                                Retraso
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    value="calidad"
                                    checked={motives.includes('calidad')}
                                    onChange={(e) => handleCheckboxChange(e, 'calidad')}
                                />
                                Calidad del Servicio
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    value="comportamiento"
                                    checked={motives.includes('comportamiento')}
                                    onChange={(e) => handleCheckboxChange(e, 'comportamiento')}
                                />
                                Comportamiento del Auxie
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    value="otro"
                                    checked={motives.includes('otro')}
                                    onChange={(e) => handleCheckboxChange(e, 'otro')}
                                />
                                Otro
                            </label>
                        </div>
                    </div>
                    <button type="submit" className={style.claims} disabled={buttonDisabled()}> 
                        Enviar
                    </button>
                    <Link to='/'><button>Atras</button></Link>
                </form> 
            </div>
        </div>
    )
}

export default SupportForm