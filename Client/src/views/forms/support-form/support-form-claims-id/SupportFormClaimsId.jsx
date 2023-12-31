import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getClaimId } from '../../../../redux/actions/actions'
import { DateTime } from 'luxon'
import NavGeneral from '../../../../components/nav-general/NavGeneral'
import { Link } from 'react-router-dom'
import './SupportFormClaimsId.css'

const SupportFormClaimsId = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const claim = useSelector(state => state.id)
    const isAuxie = useSelector(state => state.loggedUser.isAuxie)

    const consumer = useSelector(state => state.loggedUser)

    useEffect(() => {
        dispatch(getClaimId(id))
    }, [id])

    return (
        <div>
            <NavGeneral />
            <div className='support-form-claims-id-container'>
                {claim && (
                    <div>
                        <h2 className='support-form-claims-id-header'>Detalles del reclamo</h2>
                        <div className='support-form-claims-id-content'>
                            <p>
                                <strong>Email:</strong> {claim.email}
                            </p>

                            {isAuxie === false ? (
                                <p>
                                    <strong>Proveedor de la queja:</strong>{' '}
                                    {Array.from(new Set(consumer.requiredServices.map(auxie => auxie.providerId)))
                                        .map(providerId => {
                                            const auxie = consumer.requiredServices.find(
                                                auxie => auxie.providerId === providerId
                                            )
                                            return auxie
                                        })
                                        .find(provider => provider.providerId === claim.providerUsername)
                                        ? Array.from(new Set(consumer.requiredServices.map(auxie => auxie.providerId)))
                                              .map(providerId => {
                                                  const auxie = consumer.requiredServices.find(
                                                      auxie => auxie.providerId === providerId
                                                  )
                                                  return auxie
                                              })
                                              .find(provider => provider.providerId === claim.providerUsername)
                                              .providerName
                                        : 'Proveedor no encontrado'}
                                </p>
                            ) : (
                                <p>
                                    <strong>Consumer de la queja:</strong> {claim.consumerUsername}
                                </p>
                            )}
                            <p>
                                <strong>Motivo:</strong> {claim.reason}
                            </p>
                            {claim.image && (
                                <img
                                    className='support-form-claims-id-image'
                                    src={claim.image?.secure_url}
                                    alt='Imagen del reclamo'
                                />
                            )}
                            <p>
                                <strong>Mensaje:</strong> {claim.message}
                            </p>
                            <p>
                                <strong>Fecha de reclamo:</strong>{' '}
                                {DateTime.fromISO(claim.dateClaims).toLocaleString(DateTime.DATE_MED)}
                            </p>
                            {claim.answer && (
                                <div className='support-form-claims-id-answer'>
                                    <p>
                                        <strong>Respuesta:</strong> {claim.answer}
                                    </p>
                                    <p>
                                        <strong>Fecha de respuesta:</strong>{' '}
                                        {DateTime.fromISO(claim.dateAnswer).toLocaleString(DateTime.DATE_MED)}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className="back-button-container">
             <Link to='/support/claims'>
                <button>Volver</button>
            </Link>   
            </div>
        </div>
    )
}

export default SupportFormClaimsId
