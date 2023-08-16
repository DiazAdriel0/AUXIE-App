import style from './auxieInbox.module.scss'
import NavGeneral from '../../../../components/nav-general/NavGeneral'
import AsideAuxie from '../../../../components/home-auxie-components/aside-auxie/AsideAuxie'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import Chatlist from '../../../../components/chatcomponents/chatlist'
const AuxieInbox = () => {
    const user = useSelector((state) => state.loggedUser)
    const navigate = useNavigate()

    const isAuxie = Object.keys(user).includes('services')

    useEffect(() => {
        if (Object.keys(user).length === 0) return navigate('/auxielogin')
        if (Object.keys(user).includes('requiredServices'))
            return navigate('/homeconsumer')
    }, [])
    return (
        <>
            {isAuxie ? (
                <div className={style.auxieInbox}>
                    {/* Header */}
                    <header className={style.header}>
                        <NavGeneral />
                    </header>
                    {/* Aside */}
                    <AsideAuxie />
                    {/* Main */}
                    <main className={style.main}>
                        <div className={style.services}>
                            <Chatlist />
                            <div className={style.inProgress}>
                                {/* <span>In Progress...</span> */}

                                {/* <Chat auxiedetails={auth.currentUser.uid}recipient={user.inbox[0].sender}/> */}
                            </div>
                        </div>
                        <div className={style.payments}>
                            <h3></h3>
                        </div>
                    </main>
                    {/* Footer */}
                    <footer className={style.footer}>Pie de página</footer>
                </div>
            ) : null}
        </>
    )
}

export default AuxieInbox
