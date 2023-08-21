import React, { useState } from 'react'
import axios from 'axios'
import { postClaim } from '../../../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import './SupportFormProvider.css'
import { Link } from 'react-router-dom'

const SupportFormProvider = () => {
    const provider = useSelector((state) => state.loggedUser)
    const [error, setError] = useState('')
    const [submissionMessage, setSubmissionMessage] = useState('')
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        email: provider.email,
        providerUsername: provider.username,
        consumerUsername: '',
        reason: '',
        image: null,
        message: '',
    })

    const setClientNames = Array.from(
        new Set(provider.jobs.map((job) => job.clientId))
    )

    const handleSubmit = async (event) => {
        event.preventDefault()

        console.log('Valores de input antes de enviar:', input)

        if (!input.consumerUsername || !input.reason || !input.message) {
            setError('Campo obligatorio')
            return
        }

        setError('')

        console.log(input)

        try {
            const formData = new FormData()
            formData.append('email', input.email)
            formData.append('providerUsername', input.providerUsername)
            formData.append('consumerUsername', input.consumerUsername)
            formData.append('image', input.image)
            formData.append('message', input.message)

            const response = await axios.post('/claims', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            console.log('Respuesta del servidor:', response.data)

            setSubmissionMessage('El reclamo se ha enviado con éxito.')
        } catch (error) {
            console.error('Error al enviar el formulario:', error)
            setSubmissionMessage('Hubo un error al enviar el reclamo.')
        }

        console.log('Valores de input después de enviar:', input)

        dispatch(postClaim(input))

        setInput({
            email: provider.email,
            providerUsername: provider.username,
            message: '',
            consumerUsername: '',
            reason: '',
            image: null,
        })
    }

    const handleConsumerChange = (event) => {
        const updatedInput = {
            ...input,
            consumerUsername: event.target.value,
        }
        setInput(updatedInput)
    }

    return (
        <div>
            <div className="support-form">
                <form
                    onSubmit={handleSubmit}
                    className="form-container"
                    encType="multipart/form-data"
                >
                    <div className="input-group">
                        <TextField value={input.email} readOnly fullWidth />
                    </div>

                    <div className="input-group">
                        <TextField
                            required
                            fullWidth
                            select
                            label="Elige al Consumer"
                            helperText="Selecciona un Consumer"
                            color="primary"
                            name="consumerId"
                            value={input.consumerUsername}
                            onChange={handleConsumerChange}
                        >
                            {provider.jobs && provider.jobs.length > 0 ? (
                                setClientNames.map((clientId) => {
                                    const job = provider.jobs.find(
                                        (job) => job.clientId === clientId
                                    )
                                    return (
                                        <MenuItem
                                            key={job.id}
                                            value={job.clientName}
                                        >
                                            {job.clientName}
                                        </MenuItem>
                                    )
                                })
                            ) : (
                                <MenuItem disabled>
                                    No hay Consumers disponibles
                                </MenuItem>
                            )}
                        </TextField>
                    </div>

                    <div className="input-group">
                        <TextField
                            select
                            label="Selección de Motivos"
                            fullWidth
                            required
                            value={input.reason}
                            onChange={(event) =>
                                setInput({
                                    ...input,
                                    reason: event.target.value,
                                })
                            }
                        >
                            <MenuItem disabled value="">
                                Motivos
                            </MenuItem>
                            <MenuItem value="late">Retraso</MenuItem>
                            <MenuItem value="behavior">
                                Comportamiento inadecuado
                            </MenuItem>
                            <MenuItem value="quality">
                                Calidad del servicio
                            </MenuItem>
                            <MenuItem value="other">Otro</MenuItem>
                        </TextField>
                    </div>

                    <div className="input-group">
                        <p className="small-text">
                            {'Puede agregar una foto de su queja si lo desea'}
                        </p>
                        <input
                            type="file"
                            accept=".jpg, .png"
                            name="image"
                            onChange={(event) => {
                                const file = event.target.files[0]
                                setInput({ ...input, image: file })
                            }}
                        />
                    </div>

                    <div className="input-group">
                        <TextField
                            label="Mensaje"
                            multiline
                            fullWidth
                            rows={6}
                            value={input.message}
                            onChange={(event) =>
                                setInput({
                                    ...input,
                                    message: event.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="center-button">
                        <button
                            type="submit"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Enviar
                        </button>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    {submissionMessage && (
                        <p className="submission-message">
                            {submissionMessage}
                        </p>
                    )}
                </form>
            </div>
            <Link to="/support/claims">
                <button>Reclamos realizados</button>
            </Link>
        </div>
    )
}

export default SupportFormProvider
