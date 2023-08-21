import React, { useState } from 'react'
import axios from 'axios'
import { postClaim } from '../../../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import './SupportFormConsumer.css'
import { Link } from 'react-router-dom'

const SupportFormConsumer = () => {
    const consumer = useSelector((state) => state.loggedUser)
    const [error, setError] = useState('')
    const [submissionMessage, setSubmissionMessage] = useState('')
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        email: consumer.email,
        consumerUsername: consumer.username,
        providerUsername: '',
        reason: '',
        image: '',
        message: '',
    })

    const setAuxiesNames = Array.from(
        new Set(consumer.requiredServices.map((auxie) => auxie.providerId))
    )

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!input.message || !input.providerUsername || !input.reason) {
            setError('Campo obligatorio')
            return
        }

        setError('')

        const formData = new FormData()
        formData.append('email', input.email)
        formData.append('consumerUsername', input.consumerUsername)
        formData.append('providerUsername', input.providerUsername)
        formData.append('reason', input.reason)
        formData.append('image', input.image)
        formData.append('message', input.message)

        try {
            const response = await axios.post('/claims', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Important for FormData
                },
            })
            console.log('Respuesta del servidor:', response.data)

            setSubmissionMessage('El reclamo se ha enviado con éxito.')
        } catch (error) {
            console.error('Error al enviar el formulario:', error)
            setSubmissionMessage('Hubo un error al enviar el reclamo.')
        }

        dispatch(postClaim(input))

        setInput({
            email: consumer.email,
            consumerUsername: consumer.username,
            message: '',
            providerUsername: '',
            reason: '',
            image: '',
        })
    }

    const handleAuxieChange = (event) => {
        const updatedInput = {
            ...input,
            providerUsername: event.target.value,
        }
        setInput(updatedInput)
    }

    return (
        <div>
            <div className="support-form">
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="input-group">
                        <TextField value={input.email} readOnly fullWidth />
                    </div>

                    <div className="input-group">
                        <TextField
                            required
                            fullWidth
                            select
                            label="Elige al Auxie"
                            helperText="Selecciona un Auxie"
                            color="primary"
                            name="providerId"
                            value={input.providerUsername}
                            onChange={handleAuxieChange}
                        >
                            {consumer.requiredServices &&
                            consumer.requiredServices.length > 0 ? (
                                setAuxiesNames.map((providerId) => {
                                    const auxie =
                                        consumer.requiredServices.find(
                                            (auxie) =>
                                                auxie.providerId === providerId
                                        )
                                    return (
                                        <MenuItem
                                            key={auxie.id}
                                            value={auxie.providerId}
                                        >
                                            {auxie.providerName}
                                        </MenuItem>
                                    )
                                })
                            ) : (
                                <MenuItem disabled>
                                    No hay Auxies disponibles
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
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Enviar
                        </Button>
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

export default SupportFormConsumer
