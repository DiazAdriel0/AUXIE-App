import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Pagination from '../pagination/Pagination'
import TableUsers from './TableUsers'
import usePagination from '../pagination/usePagination'
const Auxies = () => {
    const navigate = useNavigate()
    const auxies = useSelector(state => state.filteredAuxies)
    const loggedUser = useSelector(state => state.loggedUser)
    const { currentPageData } = usePagination(9, auxies)
    useEffect(() => {
        if (!loggedUser.isAdmin) {
            if (loggedUser.isAuxie) {
                navigate('/homeauxie')
            } else {
                navigate('/homeconsumer')
            }
        }
    }, [])
    return (
        <>
            <TableUsers data={currentPageData} />
            <div className='mt-[4rem]'>
                <Pagination num={9} data={auxies} />
            </div>
        </>
    )
}

export default Auxies
