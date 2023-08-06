import style from './SupportForm.module.scss'
import { Link } from 'react-router-dom'
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
        const { name, value } = event.target
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }))
        validate(
            {
                ...input,
                [name]: value,
            },
            name
        )
    }

    const handlePost = async () => {
        try {
            // Aquí puedes realizar la lógica para enviar los datos del formulario
            // a tu backend o realizar alguna acción necesaria
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
            setMotives([...motives, value])
        } else {
            setMotives(motives.filter((item) => item !== value))
        }
    }

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
                <h1>Soporte técnico</h1>
                <form id="form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className={style.formlabel}>
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <p className={style.error}>{errors.email}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="username" className={style.formlabel}>
                            Nombre de Usuario
                        </label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="username"
                            onChange={handleChange}
                        />
                        {errors.username && (
                            <p className={style.error}>{errors.username}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="complaint" className={style.formlabel}>
                            Reclamo
                        </label>
                        <textarea
                            id="complaint"
                            name="complaint"
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="auxieName" className={style.formlabel}>
                            Nombre del Auxie
                        </label>
                        <input
                            type="text"
                            id="auxieName"
                            name="auxieName"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="motives" className={style.formlabel}>
                            Selección de Motivos
                        </label>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    value="retraso"
                                    checked={motives.includes('retraso')}
                                    onChange={(e) =>
                                        handleCheckboxChange(e, 'retraso')
                                    }
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
                                    onChange={(e) =>
                                        handleCheckboxChange(e, 'calidad')
                                    }
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
                                    onChange={(e) =>
                                        handleCheckboxChange(
                                            e,
                                            'comportamiento'
                                        )
                                    }
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
                                    onChange={(e) =>
                                        handleCheckboxChange(e, 'otro')
                                    }
                                />
                                Otro
                            </label>
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
