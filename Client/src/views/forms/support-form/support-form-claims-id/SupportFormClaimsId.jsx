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
    console.log(claim)

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
                            <p>
                                <strong>Proveedor:</strong> {claim.providerUsername}
                            </p>
                            <p>
                                <strong>Motivo:</strong> {claim.reason}
                            </p>
                            {claim.image && (
                                <img
                                    className='support-form-claims-id-image'
                                    src={claim.image}
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
                                        {DateTime.fromISO(claim.dateClaims).toLocaleString(DateTime.DATE_MED)}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <Link to='/support/claims'>
                <button>Volver</button>
            </Link>
        </div>
    )
}

export default SupportFormClaimsId
