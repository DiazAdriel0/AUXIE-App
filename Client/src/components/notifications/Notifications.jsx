import { useState, useEffect } from 'react'
import { db, auth } from '../../config/firebase-config'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import style from './notifications.module.scss'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router'
import CircularProgress from '@mui/material/CircularProgress'

export const Notifications = () => {
    const navigate = useNavigate()

    const loggedUser = useSelector((state)=>{
        return state.loggedUser
    })
    const [notifications, setNotifications] = useState([])
    const [loading, setLoading] = useState(true)
    const night = useSelector((state)=>state.nightMode)

    // Change: Use 'conversations' collection
    useEffect(() => {
        // Fetch or create a conversation document
        const getOrCreateConversation = async () => {
            // Fetch notifications for the conversation
            const notificationsRef = collection(db, `notifications/${auth.currentUser?.uid}/notification`)
            const queryNotifications = query(notificationsRef, orderBy('createdAt'))
            const unsubscribe = onSnapshot(queryNotifications, snapshot => {
                let notifications = []
                snapshot.forEach(doc => {
                    notifications.unshift({ ...doc.data(), id: doc.id })
                })
                setNotifications(notifications)
            })

            return () => unsubscribe()
        }
        getOrCreateConversation()
    }, [auth.currentUser?.uid])

    useEffect(() => {
        if (notifications.length) setLoading(false)
    }, [notifications])

    const handleRedirect = (texto)=>{ 
  
        if (texto.includes('reseña')) {
            return navigate('/review')
        }
        if (texto.includes('ha solicitado')) {
            return navigate('/auxieservices')
        }
        if (texto.includes('ingresa a tu perfil')) {
            return navigate('/profile')
        }
        if (texto.includes('requerido')||texto.includes('proposal')) {
            return navigate('/requestedservices')
        }
        // eslint-disable-next-line no-prototype-builtins
        if(texto.includes('mensaje') && loggedUser.hasOwnProperty('services')){
            return navigate('/auxieinbox') //msj de consumer a definir
        }

    }

    return (
        <>
            {loading ? (
                <div className={night ? style.notificationcontainer : style.daycontainer}>
                    <div className={style.loader}>
                        <CircularProgress/>
                    </div>
                    
                </div>
            ) : (
                <div>
                    <div className={style.title}>
                        <h1>Notificaciones</h1>
                    </div>
                    <div className={night ? style.notificationcontainer : style.daycontainer}>
                        {notifications?.map((message) => (
                            <div key={message.id} className={style.message} 
                                onClick={()=>{
                                    handleRedirect(message.text)
                                }} >    
                                {message.text}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
