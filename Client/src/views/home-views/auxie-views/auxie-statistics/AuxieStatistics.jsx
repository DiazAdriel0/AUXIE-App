import NavGeneral from '../../../../components/nav-general/NavGeneral'
import AsideAuxie from '../../../../components/home-auxie-components/aside-auxie/AsideAuxie'
import VisitsChart from '../../../../components/home-auxie-components/statistics-auxie/VisitsChart'
import StatsGrid from '../../../../components/home-auxie-components/statistics-auxie/StatsGrid'
import axios from 'axios'
import { useEffect } from 'react'
import { loggedUser } from '../../../../redux/actions/actions'
import { useSelector, useDispatch } from 'react-redux'
const AuxieStatistics = () => {
    const logged = useSelector(state => state.loggedUser)
    const dispatch = useDispatch()
    const handleRefresh = async () => {
        try {
            const response = await axios.get(`/providers/${logged.id}`)
            if (response) {
                dispatch(loggedUser(response.data))
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        handleRefresh()
    }, [])
    return (
        <div>  
           <header className='h-16'>
                    <NavGeneral />
                </header>
        <div className='flex'>
            <aside className='text-color-light border-2 border-div-text-color-light-900 w-[12.5rem] bg-[#d6d6d6] pl-12'>
                <div className=' h-screen flex flex-col justify-between'>
                    <AsideAuxie />
                </div>
            </aside>
            <div className='ml-8 h-16 w-96'>
              <StatsGrid/>  
            </div>
            <div className='mt-32 -mx-96 w-2/3'> 
                <VisitsChart/>
            </div>
        </div>  
        </div>
    )
}

export default AuxieStatistics
