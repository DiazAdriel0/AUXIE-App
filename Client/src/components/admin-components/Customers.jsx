import { useSelector } from 'react-redux'
import Pagination from '../pagination/Pagination'
import TableUsers from '../TableUsers'
import usePagination from '../pagination/usePagination'
const Customers = () => {
    const auxies = useSelector(state => state.filteredAuxies)

    const { currentPageData } = usePagination(12, auxies)
    return (
        <>
            <TableUsers data={currentPageData} />
            <Pagination num={10} data={auxies} />
        </>
    )
}

export default Customers
