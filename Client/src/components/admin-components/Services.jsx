import { useSelector } from 'react-redux'
import Pagination from '../pagination/Pagination'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import usePagination from '../pagination/usePagination'
import Card from './Card'
const Services = () => {
    const navigate = useNavigate()
    const loggedUser = useSelector(state => state.loggedUser)
    const services = useSelector(state => state.services)
    const { currentPageData } = usePagination(6, services)
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
            <div className='flex justify-center mb-8 mt-8'>
                <h2>Services</h2>
            </div>
            <div className='mb-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4'>
                {currentPageData.map(service => (
                    <Card key={service.image.secure_url} data={service} />
                ))}
            </div>
            <Pagination num={6} data={services} />
        </>
    )
}

export default Services
