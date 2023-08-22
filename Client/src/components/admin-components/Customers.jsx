import Pagination from '../pagination/Pagination'
import TableUsers from '../TableUsers'
import usePagination from '../pagination/usePagination'
import { useSelector, useDispatch } from 'react-redux'
import { getAllClients } from '../../redux/actions/actions'
import { useEffect } from 'react'
const Customers = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllClients())
    }, [])
    const clients = useSelector(state => state.clients)
    const { currentPageData } = usePagination(12, clients)
    return (
        <>
            <TableUsers data={currentPageData} />
            <Pagination num={10} data={clients} />
        </>
    )
}

export default Customers
