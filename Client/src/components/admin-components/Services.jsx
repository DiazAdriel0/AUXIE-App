import { useSelector } from 'react-redux'
import Pagination from '../pagination/Pagination'

import usePagination from '../pagination/usePagination'
import Card from './Card'
const Services = () => {
    const services = useSelector(state => state.services)

    const { currentPageData } = usePagination(6, services)

    return (
        <>
            <div className='flex justify-center mb-8 mt-8'>
                <h2>Services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4'>
                {currentPageData.map(service => (
                    <Card key={service.id} data={service} />
                ))}
            </div>
            <Pagination num={6} data={services} />
        </>
    )
}

export default Services
