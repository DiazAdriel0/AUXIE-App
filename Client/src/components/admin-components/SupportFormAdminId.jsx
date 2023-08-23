import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getClaimId } from '../../redux/actions/actions'
import { DateTime } from 'luxon'
import { Link } from 'react-router-dom'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import Swal from 'sweetalert2'

const SupportFormClaimsId = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const claim = useSelector(state => state.id)
    const auxies = useSelector(state => state.auxies)
    const [answer, setAnswer] = useState('')
    const [submissionMessage, setSubmissionMessage] = useState('')

    const auxie = auxies.find((provider) => provider.id === claim.providerUsername)

    useEffect(() => {
        dispatch(getClaimId(id))
    }, [id])

    const handleAnswerChange = event => {
        setAnswer(event.target.value)
    }

    const handleFormSubmit = async event => {
        event.preventDefault()

        try {
            await axios.put(`/claims/${id}`, { answer })
            Swal.fire('Se realizo tu reaclamo')
        } catch (error) {
            setSubmissionMessage(error)
        }
    }


    return (
        <div>
            <div className='support-form-claims-id-container'>
                {claim && (
                    <div>
                        <h2 className='support-form-claims-id-header'>Detalles del reclamo</h2>
                        <div className='support-form-claims-id-content'>
                            <p>
                                <strong>Email: </strong> {claim.email}
                            </p>

                            {claim.isConsumer ? (
                                <p>
                                    <strong>Proveedor de la queja: </strong>
                                    {auxie.username}
                                </p>
                            ) : (
                                <p>
                                    <strong>Cliente de la queja: </strong> {claim.consumerUsername}
                                </p>
                            )}
                            <p>
                                <strong>Motivo: </strong> {claim.reason}
                            </p>
                            {claim.image && (
                                <img
                                    className='support-form-claims-id-image'
                                    src={claim.image}
                                    alt='Imagen del reclamo'
                                />
                            )}
                            <p>
                                <strong>Mensaje: </strong> {claim.message}
                            </p>
                            <p>
                                <strong>Fecha de reclamo: </strong>{' '}
                                {DateTime.fromISO(claim.dateClaims).toLocaleString(DateTime.DATE_MED)}
                            </p>
                            <p>
                                <strong>Respuesta: </strong> {claim.answer}
                            </p>
                            {claim.pending && (
                                <form onSubmit={handleFormSubmit}>
                                    <div className='input-group'></div>
                                    <TextField
                                        multiline
                                        fullWidth
                                        rows={6}
                                        value={answer}
                                        onChange={handleAnswerChange}
                                        required
                                    />
                                    <button type='submit' color='primary'>
                                        Enviar Respuesta
                                    </button>
                                    {submissionMessage && (
                                        <p className='submission-message'>{submissionMessage.message}</p>
                                    )}
                                </form>
                            )}
                            <p>
                                <strong>Fecha de respuesta:</strong>{' '}
                                {DateTime.fromISO(claim.dateAnswer).toLocaleString(DateTime.DATE_MED)}
                            </p>
                        </div>
                    </div>
                )}
            </div>
            <Link to='/dashboard/claims'>
                <button>Volver</button>
            </Link>
        </div>
    )
}

export default SupportFormClaimsId
