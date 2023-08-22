import Pagination from '../pagination/Pagination'
import { useDispatch } from 'react-redux'
import TableUsers from './TableUsers'
import usePagination from '../pagination/usePagination'
import { useSelector } from 'react-redux'
import { getAllClients } from '../../redux/actions/actions'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Customers = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loggedUser = useSelector(state => state.loggedUser)
    useEffect(() => {
        if (!loggedUser.isAdmin) {
            if (loggedUser.isAuxie) {
                navigate('/homeauxie')
            } else {
                navigate('/homeconsumer')
            }
        }

        dispatch(getAllClients())
    }, [])
    const clients = useSelector(state => state.clients)
    const { currentPageData } = usePagination(12, clients)
    return (
        <>
            <TableUsers data={currentPageData} />
            <div className='mt-[4rem]'>
                <Pagination num={12} data={clients} />
            </div>
        </>
    )
}

export default Customers
