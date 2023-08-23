import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import './SupportFormConsumer.css'
import { Link } from 'react-router-dom'

const SupportFormConsumer = () => {
    const consumers = useSelector(state => state.loggedUser)
    const [error, setError] = useState('')
    const [submissionMessage, setSubmissionMessage] = useState('')

    const [input, setInput] = useState({
        email: consumers.email,
        consumerUsername: consumers.username,
        providerUsername: '',
        reason: '',
        image: '',
        message: '',
        isConsumer: true,
    })

    const setAuxiesNames = Array.from(new Set(consumers.requiredServices.map(auxie => auxie.providerId)))

    const handleSubmit = async event => {
        event.preventDefault()

        if (!input.providerUsername || !input.reason || !input.message) {
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
        formData.append('isConsumer', input.isConsumer)

        try {
            await axios.post('/claims', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            Swal.fire('Se realizo tu reaclamo')
        } catch (error) {
            setSubmissionMessage(error)
        }

        setInput({
            email: consumers.email,
            consumerUsername: consumers.username,
            message: '',
            providerUsername: '',
            reason: '',
            image: '',
            isConsumer: true,
        })

    }

    const handleAuxieChange = event => {
        const updatedInput = {
            ...input,
            providerUsername: event.target.value,
        }
        setInput(updatedInput)
    }

    return (
        <div>
            <div className='support-form'>
                <form onSubmit={handleSubmit} className='form-container'>
                    <div className='input-group'>
                        <TextField value={input.email} readOnly fullWidth />
                    </div>

                    <div className='input-group'>
                        <TextField
                            required
                            fullWidth
                            select
                            label='Elige al Auxie'
                            helperText='Selecciona un Auxie'
                            color='primary'
                            name='providerId'
                            value={input.providerUsername}
                            onChange={handleAuxieChange}
                        >
                            {consumers.requiredServices && consumers.requiredServices.length > 0 ? (
                                setAuxiesNames.map(providerId => {
                                    const auxie = consumers.requiredServices.find(
                                        auxie => auxie.providerId === providerId
                                    )
                                    return (
                                        <MenuItem key={auxie.id} value={auxie.providerId}>
                                            {auxie.providerName}
                                        </MenuItem>
                                    )
                                })
                            ) : (
                                <MenuItem disabled>No hay Auxies disponibles</MenuItem>
                            )}
                        </TextField>
                    </div>

                    <div className='input-group'>
                        <TextField
                            select
                            label='Selección de Motivos'
                            fullWidth
                            required
                            value={input.reason}
                            onChange={event =>
                                setInput({
                                    ...input,
                                    reason: event.target.value,
                                })
                            }
                        >
                            <MenuItem disabled value=''>
                                Motivos
                            </MenuItem>
                            <MenuItem value='Tiempos de espera prolongados'>Tiempos de espera prolongados</MenuItem>
                            <MenuItem value='Fallos en el servicio'>Fallos en el servicio</MenuItem>
                            <MenuItem value='Falta de Respeto o trato inapropiado'>
                                Falta de respeto o trato inapropiado
                            </MenuItem>
                            <MenuItem value='Cambio de términos y condiciones'>
                                Cambio de términos y condiciones
                            </MenuItem>
                            <MenuItem value='Falta de personal capacitado'>Falta de personal capacitado</MenuItem>
                            <MenuItem value='Mala atención al cliente'>Mala atención al cliente</MenuItem>
                            <MenuItem value='Incumplimiento de acuerdos'>Incumplimiento de acuerdos</MenuItem>
                            <MenuItem value='Calidad del servicio'>Calidad del servicio</MenuItem>
                            <MenuItem value='Otro'>Otro</MenuItem>
                        </TextField>
                    </div>

                    <div className='input-group'>
                        <p className='small-text'>{'Puede agregar una foto de su queja si lo desea'}</p>
                        <input
                            type='file'
                            accept='.jpg, .png'
                            name='image'
                            onChange={event => {
                                const file = event.target.files[0]
                                setInput({ ...input, image: file })
                            }}
                        />
                    </div>

                    <div className='input-group'>
                        <TextField
                            label='Mensaje'
                            multiline
                            fullWidth
                            rows={6}
                            value={input.message}
                            onChange={event =>
                                setInput({
                                    ...input,
                                    message: event.target.value,
                                })
                            }
                        />
                    </div>
                    <div className='center-button'>
                        <button type='submit' color='primary'>
                            Enviar
                        </button>
                    </div>
                    {error && <p className='error-message'>{error}</p>}
                    {submissionMessage && <p className='submission-message'>{submissionMessage.message}</p>}
                </form>
            </div>
            <Link to='/support/claims'>
                <button>Reclamos realizados</button>
            </Link>
        </div>
    )
}

export default SupportFormConsumer
