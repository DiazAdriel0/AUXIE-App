import Pagination from '../pagination/Pagination'
import TableUsers from '../TableUsers'
import usePagination from '../pagination/usePagination'
import { useSelector } from 'react-redux'
const Customers = () => {
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
