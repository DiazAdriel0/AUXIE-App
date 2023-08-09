import style from './SupportForm.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import { useValidations } from '../../../utils/validationutils'
import axios from 'axios'


const validate = (input) => {
    let errors = {};
    if (!input.consumerUsername || input.consumerUsername.trim() === '') {
        errors.name = 'Ingresa tu nombre de usuario'
    } if (!input.message || input.message.trim() === '') {
        errors.name = 'Escribe de forma breve tu reclamo'
    } if (!input.providerUsername || input.providerUsername.trim() === '') {
        errors.name = 'Ingresa el nombre del Auxie'
    } if (!input.reason || input.reason.trim() === '') {
        errors.name = 'Selecciona la naturaleza del reclamo'
    } 
    return errors;
} 
const SupportForm = () => {
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        consumerUsername: '',
        message: '',
        providerUsername: '',
        reason: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setInput((prevInput) => ({
            ...prevInput,
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
    }

    const handlePost = async () => {
        try {
            const response = await axios.post(
                'http://localhost:3001/claims/',
                input
            )
            if (response) {
                alert('Solicitud enviada')
                console.log(response)
            }
        } catch (error) {
            alert('estas haciendo todo mal')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handlePost()

        const form = document.getElementById('form')
        form.reset()
    }
    
    const buttonDisabled = () => {
        if (
            input.consumerUsername.trim().length === 0
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
                <h1>Soporte técnico</h1>
                <form id="form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="consumerUsername" className={style.formlabel}>
                            Nombre de Usuario:
                        </label>
                        <input
                            type="text"
                            name="consumerUsername"
                            className={style.formControl}
                            onChange={handleChange}
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
                            onChange={handleChange}
                            placeholder="Escribe tu reclamo aquí"
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="providerUsername" className={style.formlabel}>
                            Nombre del Auxie
                        </label>
                        <input
                            type="text"
                            name="providerUsername"
                            onChange={handleChange}
                            placeholder="Nombre del Auxie"
                        />
                    </div>
                    <div>
                        <label htmlFor="reason" className={style.formlabel}>
                            Selección de Motivos
                        </label>
                        <div>
                            <select name="reason" onChange={handleChange} defaultValue={''}>
                            <option disabled value="">
                            Motivos
                        </option>
                                <option value="late">Retraso</option>
                                <option value="behavior">Comportamiento inadecuado</option>
                                <option value="quality">Calidad del servicio</option>
                                <option value="other">Otro</option>
                            </select> 
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={style.claims}
                        disabled={buttonDisabled()}
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
