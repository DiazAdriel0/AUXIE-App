import axios from 'axios'
import { useEffect } from 'react'
import { loggedUser } from '../../../../redux/actions/actions'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavGeneral from '../../../../components/nav-general/NavGeneral'
import AsideAuxie from '../../../../components/home-auxie-components/aside-auxie/AsideAuxie'
import TableServices from '../../../../components/home-auxie-components/table-services/TableServices'
import CardsJobs from '../../../../components/home-auxie-components/cards-jobs/CardsJobs'
import Pagination from '../../../../components/pagination/Pagination'

const AuxieServices = () => {
    const nightMode = useSelector(state => state.nightMode)
    const logged = useSelector(state => state.loggedUser)
    const [tableOrCard, setTableOrCard] = useState(true)
    const handleChange = () => {
        setTableOrCard(!tableOrCard)
    }

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
            <header className='h-16 '>
                <NavGeneral />
            </header>
            <div className='grid grid-cols-2 mb-4 mr-52'>
                <aside className={nightMode ? 'bg-div-color-dark text-color-dark border-2 border-div-text-color-light-900 h-screen w-[12.5rem] pl-12':'bg-div-text-color-light text-color-light border-2 border-div-text-color-light-900 w-[12.5rem] h-screen pl-12 '}>
                    <AsideAuxie /> 
                </aside>

                <main className={nightMode ? '-ml-[23rem] px-16 pt-20 bg-div-text-color-dark text-color-dark border-2 border-div-text-color-light-900 w-max ':'-ml-[23rem] px-16  bg-div-text-color-light text-color-light border-2 border-div-text-color-light-900 pt-20 w-max'}>
 
                    <button onClick={handleChange} className={nightMode ? 'px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white':'px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white'}>
                        {tableOrCard ? 'Cambiar a cards' : 'Cambiar a tabla'}  
                    </button>
                    {tableOrCard ? (
                        <div className='pt-2' >
                            <TableServices />
                        </div> 
                    ) : (
                        <div className='pt-2'>
                            <CardsJobs />
                        </div>
                    )}
                    <div>
                        {tableOrCard ? (
                            <Pagination data={loggedUser.jobs} num={15} />
                        ) : (
                            <Pagination data={loggedUser.jobs} num={6} />
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AuxieServices
