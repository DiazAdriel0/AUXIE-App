import NavGeneral from '../../../../components/nav-general/NavGeneral'
import AsideAuxie from '../../../../components/home-auxie-components/aside-auxie/AsideAuxie'

import Chatlist from '../../../../components/chatcomponents/chatlist'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'
import { loggedUser } from '../../../../redux/actions/actions'
const AuxieInbox = () => {
    const logged = useSelector(state => state.loggedUser)
    const dispatch = useDispatch()
    const futureJobs = logged.jobs?.slice(0, 6)
    const nightMode = useSelector(state => state.nightMode)
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
            <div className='grid grid-cols-3 mb-2'>
                <aside className={ nightMode ?' bg-div-color-dark  text-color-dark border-2 border-div-color-dark-600 w-[12.5rem] pl-12 ': 'text-color-light border-2 border-div-text-color-light-900 h-screen w-[12.5rem] pl-12 '}>
                    <AsideAuxie />
                </aside>
                <main className={nightMode ? 'bg-div-text-color-dark -ml-64 pr-40 pt-2  text-color-dark border-2 border-div-text-color-light-900 w-[44.5rem]' : '-ml-64 pr-40 pt-2 bg-div-text-color-light  text-color-light border-2 border-div-text-color-light-900 w-auto'}>
                    <Chatlist />
                </main>
                <div className={nightMode ?  ' bg-div-text-color-dark  border-2 border-div-text-color-light-900 ': ' bg-div-text-color-light w-fit border-2 border-div-text-color-light-900 '}>
                    <h3 className='m-2'>Futuros Trabajos</h3>
                    <table>
                            <thead>
                                <tr>
                                    <th className={nightMode ?'bg-div-color-dark  py-2 px-14 border border-gray-300 bg-gray-100 ' :'py-2 px-14 border border-gray-300 bg-gray-100 '}>Trabajos</th>
                                    <th className={nightMode ?'bg-div-color-dark  py-2 px-14 border border-gray-300 bg-gray-100 ' :'py-2 px-14 border border-gray-300 bg-gray-100 '}>Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {futureJobs?.map((service, index) => (
                                    <tr key={index}>
                                        <td className={nightMode ?'bg-div-color-dark  py-2 px-14 border border-gray-300 bg-gray-100 ' :'py-2 px-14 border border-gray-300 bg-gray-100 '}>
                                            {service.service}
                                        </td>
                                        <td className={nightMode ?'bg-div-color-dark py-2 px-14 border border-gray-300 bg-gray-100 ' :'py-2 px-14 border border-gray-300 bg-gray-100 '}>
                                            {service.jobDate}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    )
}

export default AuxieInbox
