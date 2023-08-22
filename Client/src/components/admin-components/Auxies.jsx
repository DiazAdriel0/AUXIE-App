import { useSelector } from 'react-redux'
import Pagination from '../pagination/Pagination'
import TableUsers from './TableUsers'
import usePagination from '../pagination/usePagination'
const Auxies = () => {
    const auxies = useSelector(state => state.filteredAuxies)

    const { currentPageData } = usePagination(12, auxies)
    return (
        <>
            <TableUsers data={currentPageData} />
            <div className='mt-[4rem]'>
                <Pagination num={12} data={auxies} />
            </div>
        </>
    )
}

export default Auxies
