// import style from './auxieInbox.module.scss'
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
    const handleRefresh = async () => {
        try {
            const response = await axios.get(`/providers/${logged.id}`)
            if (response) {
                dispatch(loggedUser(response.data))
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        handleRefresh()
    }, [])

    return (
        <div>
            {/* Header */}
            <header className='h-16'>
                <NavGeneral />
            </header>
            <div className='grid grid-cols-3 mb-2'>
                <aside className="bg-div-text-color-light text-color-light border-2 border-div-text-color-light-900 w-52 pt-32 pl-14">
                    {/* Aside */}
                    <AsideAuxie />
                </aside>
                {/* Main */}
                <main className='-ml-64 pr-40 pt-2 bg-div-text-color-light  text-color-light border-2 border-div-text-color-light-900 w-max'>
               
                        <Chatlist />
                   
                </main>
                <div className=" bg-div-text-color-light  border-2 border-div-text-color-light-900"> 
                    <h3 className="m-2">Futuros Trabajos</h3>
                 {/* <Chat auxiedetails={auth.currentUser.uid}recipient={user.inbox[0].sender}/>  */}
                    </div> 
            </div>
        </div>
    )
}

export default AuxieInbox
