import style from './SupportForm.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {useSelector} from 'react-redux'
// import { useValidations } from '../../../utils/validationutils'
import axios from 'axios'

const validate = (input) => {
    let errors = {}
    if (!input.consumerUsername || input.consumerUsername.trim() === '') {
        errors.name = 'Ingresa tu nombre de usuario'
    }
    if (!input.message || input.message.trim() === '') {
        errors.name = 'Escribe de forma breve tu reclamo'
    }
    if (!input.providerUsername || input.providerUsername.trim() === '') {
        errors.name = 'Ingresa el nombre del Auxie'
    }
    if (!input.reason || input.reason.trim() === '') {
        errors.name = 'Selecciona la naturaleza del reclamo'
    }
    return errors
}
const SupportForm = () => {
    const token = useSelector(state => state.token)
    const [errors, setErrors] = useState({})
    const [isFormValid, setIsFormValid] = useState(false)
    const [input, setInput] = useState({
        consumerUsername: '',
        message: '',
        providerUsername: '',
        reason: '',
        image: ''
    })

    const checkFormValidity = () => {
        const formIsValid = Object.keys(errors).length === 0
        setIsFormValid(formIsValid)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setInput((input) => ({
            ...input,
            [name]: value,
        }))
        setErrors(
            validate(
                {
                    ...input,
                    [name]: value,
                },
                name
            )
        )
        checkFormValidity()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (Object.values(errors).length > 0) {
            alert('Por favor completa todos los campos')
        } else {
            try {
                const response = await axios.post(
                    'http://localhost:3001/claims/',
                    input, {
                        headers: {
                            'authorization': `Bearer ${token}`
                        }
                    }
                )
                setInput({
                    consumerUsername: '',
                    providerUsername: '',
                    message: '',
                    image: '',
                    reason: ''
                })
                if (response) {
                    alert('Solicitud enviada')
                    console.log(response)
                }
                setIsFormValid(false)
            } catch (error) {
                alert('Error al enviar la solicitud:' + error.message)
            }
        }
    }

    return (
        <div>
            <div className={style.claims}>
                <h1>Soporte técnico</h1>
                <form id="form" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="consumerUsername"
                            className={style.formlabel}
                        >
                            Nombre de Usuario:
                        </label>
                        <input
                            type="text"
                            name="consumerUsername"
                    
                            className={style.formControl}
                            value={input.consumerUsername}
                            onChange={(e) => handleChange(e)}
                            placeholder="Nombre de usuario"
                        />
                        {errors.consumerUsername && (
                            <p className={style.error}>{errors.consumerUsername}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="message" className={style.formlabel}>
                            Reclamo
                        </label>
                        <textarea
                            name="message"
                            value={input.message}
                            onChange={(e) => handleChange(e)}
                            placeholder="Escribe tu reclamo aquí"
                        />
                        {errors.message && (
                            <p className={style.error}>{errors.message}</p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="providerUsername"
                            className={style.formlabel}
                        >
                            Nombre del Auxie
                        </label>
                        <input
                            type="text"
                            name="providerUsername"
                            value={input.providerUsername}
                            onChange={(e) => handleChange(e)}
                            placeholder="Nombre del Auxie"
                        />
                        {errors.providerUsername && (
                            <p className={style.error}>
                                {errors.providerUsername}
                            </p>
                        )}
                    </div>
                    <div>
                        <label>Imagen</label>
                        <input
                            type="text"
                            value={input.image}
                            name="image"
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.image && <p>{errors.image}</p>}
                    </div>
                    <div>
                        <label htmlFor="reason" className={style.formlabel}>
                            Selección de Motivos
                        </label>
                        <div>
                            <select
                                name="reason"
                                value={input.reason}
                                onChange={(e) => handleChange(e)}
                               
                            >
                                <option disabled value="">
                                    Motivos
                                </option>
                                <option value="late">Retraso</option>
                                <option value="behavior">
                                    Comportamiento inadecuado
                                </option>
                                <option value="quality">
                                    Calidad del servicio
                                </option>
                                <option value="other">Otro</option>
                            </select>
                            {errors.reason && (
                                <p className={style.error}>{errors.reason}</p>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={style.claims}
                        disabled={!isFormValid}
                    >
                        Enviar
                    </button>
                    <Link to="/">
                        <button>Atrás</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default SupportForm
