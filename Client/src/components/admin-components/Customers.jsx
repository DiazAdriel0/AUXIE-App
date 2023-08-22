import Pagination from '../pagination/Pagination'
import { useDispatch } from 'react-redux'
import TableUsers from './TableUsers'
import usePagination from '../pagination/usePagination'
import { useSelector } from 'react-redux'
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
            <div className='mt-[4rem]'>
                <Pagination num={12} data={clients} />
            </div>
        </>
    )
}

export default Customers
