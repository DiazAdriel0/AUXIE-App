import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllClaims } from '../../redux/actions/actions'
import { Link } from 'react-router-dom'
import { DateTime } from 'luxon'

const SupportFormAdmin = () => {
    const admin = useSelector(state => state.loggedUser)
    const claims = useSelector(state => state.allClaims)
    const dispatch = useDispatch()
    const [actualPage, setActualPage] = useState(1)
    const claimsPage = 5
    
    useEffect(() => {
        if (claims.length === 0) {
            dispatch(getAllClaims(admin))
        }
    }, [dispatch, claims.length, admin])

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
            <div className='support-form-container'>
                <div className='cards-container'>
                    {claims.length === 0 ? (
                        <p>No hay ningun reclamo</p>
                    ) : (
                        currentClaims
                            .sort((a, b) => new Date(b.dateClaims) - new Date(a.dateClaims))
                            .map((claim, index) => (
                                <Link to={`/dashboard/claims/${claim.id}`} key={index}>
                                    <div className='card'>
                                        <p>Usuario: {claim.email}</p>
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
        </div>
    )
}

export default SupportFormAdmin
