import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getClaims } from '../../../../redux/actions/actions'
import { Link } from 'react-router-dom'
import { DateTime } from 'luxon'
import './SupportFormClaims.css'
import NavGeneral from '../../../../components/nav-general/NavGeneral'

const SupportFormClaims = () => {
    const dispatch = useDispatch()
    const email = useSelector(state => state.loggedUser.email)
    const [actualPage, setActualPage] = useState(1)
    const claimsPage = 5
    const claims = useSelector(state => state.claims)

    useEffect(() => {
        if (claims.length === 0) {
            dispatch(getClaims(email))
        }
    }, [dispatch, claims.length, email])

    const startPage = (actualPage - 1) * claimsPage
    const endPage = startPage + claimsPage
    const currentClaims = claims.slice(startPage, endPage)

    const PreviousPage = () => {
        if (actualPage > 1) {
            setActualPage(actualPage - 1)
        }
    }

    const NextPage = () => {
        const totalPages = Math.ceil(claims.length / claimsPage)
        if (actualPage < totalPages) {
            setActualPage(actualPage + 1)
        }
    }
    return (
        <div>
            <NavGeneral />
            <div className='support-form-container'>
                <div className='cards-container'>
                    {claims.length === 0 ? (
                        <p>No tiene ningún reclamo realizado.</p>
                    ) : (
                        currentClaims
                            .sort((a, b) => new Date(b.dateClaims) - new Date(a.dateClaims))
                            .map((claim, index) => (
                                <Link to={`/support/claims/${claim.id}`} key={index}>
                                    <div className='card'>
                                        <p>Motivo: {claim.reason}</p>
                                        <p>
                                            Fecha de reclamo:{' '}
                                            {DateTime.fromISO(claim.dateClaims).toLocaleString(DateTime.DATE_MED)}
                                        </p>
                                        <p>Estado: {!claim.pending ? 'Contestado' : 'Sin contestar'}</p>
                                    </div>
                                </Link>
                            ))
                    )}
                </div>
                <div className='pagination'>
                    <button onClick={PreviousPage} disabled={actualPage === 1}>
                        Anterior
                    </button>
                    <button onClick={NextPage} disabled={endPage >= claims.length}>
                        Siguiente
                    </button>
                </div>
            </div>
            <Link to='/support'>
                <button>Volver</button>
            </Link>
        </div>
    )
}

export default SupportFormClaims
