import React, { useState } from 'react'
import { postClaim } from '../../../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import './SupportFormProvider.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const SupportFormProvider = () => {
    const provider = useSelector(state => state.loggedUser)
    const [error, setError] = useState('')
    const [submissionMessage, setSubmissionMessage] = useState('')
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        email: provider.email,
        providerUsername: provider.username,
        consumerUsername: '',
        reason: '',
        message: '',
    })
    const [image, setImage] = useState('')

    const setClientNames = Array.from(new Set(provider.jobs.map(job => job.clientId)))

    const handleSubmit = async event => {
        event.preventDefault()

        if (!input.consumerUsername || !input.reason || !input.message) {
            setError('Campo obligatorio')
            return
        }

        setError('')

        const formData = new FormData()
        formData.append('email', input.email)
        formData.append('providerUsername', input.providerUsername)
        formData.append('consumerUsername', input.consumerUsername)
        formData.append('image', image)
        formData.append('message', input.message)
        try {
            dispatch(postClaim(input, image))
            const form = document.getElementById('form')
            form.reset()
            Swal.fire('Se realizo tu reaclamo')
        } catch (error) {
            setSubmissionMessage(error)
        }

        setInput({
            email: provider.email,
            providerUsername: provider.username,
            message: '',
            consumerUsername: '',
            reason: '',
        })
    }

    const handleConsumerChange = event => {
        const updatedInput = {
            ...input,
            consumerUsername: event.target.value,
        }
        setInput(updatedInput)
    }
    console.log(image);

    return (
        <div>
            <div className='support-form'>
                <form id='form' onSubmit={handleSubmit} className='form-container' encType='multipart/form-data'>
                    <div className='input-group'>
                        <TextField value={input.email} readOnly fullWidth />
                    </div>

                    <div className='input-group'>
                        <TextField
                            required
                            fullWidth
                            select
                            label='Elige al Consumer'
                            helperText='Selecciona un Consumer'
                            color='primary'
                            name='consumerId'
                            value={input.consumerUsername}
                            onChange={handleConsumerChange}
                        >
                            {provider.jobs && provider.jobs.length > 0 ? (
                                setClientNames.map(clientId => {
                                    const job = provider.jobs.find(job => job.clientId === clientId)
                                    return (
                                        <MenuItem key={job.id} value={job.clientName}>
                                            {job.clientName}
                                        </MenuItem>
                                    )
                                })
                            ) : (
                                <MenuItem disabled>No hay Consumers disponibles</MenuItem>
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
                            <MenuItem value='Falta de pago o pagos atrasados'>Falta de pago o pagos atrasados</MenuItem>
                            <MenuItem value='Falta de respeto o trato inapropiado'>
                                Falta de respeto o trato inapropiado
                            </MenuItem>
                            <MenuItem value='Comunicación deficiente'>Comunicación deficiente</MenuItem>
                            <MenuItem value='Falta de cooperación'>Falta de cooperación</MenuItem>
                            <MenuItem value='Expectativas irrealistas'>Expectativas irrealistas</MenuItem>
                            <MenuItem value='Cambios de último minuto'>Cambios de último minuto</MenuItem>
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
                                const fileImage = event.target.files[0]
                                setImage({image: fileImage })
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
            <div className='claims-done'> 
             <Link to='/support/claims'>
                <button>Reclamos realizados</button>
            </Link>   
            </div>
        </div>
    )
}

export default SupportFormProvider
