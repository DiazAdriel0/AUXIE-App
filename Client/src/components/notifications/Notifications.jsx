import { useState, useEffect } from 'react'
import { db, auth } from '../../config/firebase-config'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

export const Notifications = () => {
    const [notifications, setNotifications] = useState([])
    const [loading, setLoading] = useState(true)
    // Change: Use 'conversations' collection
    useEffect(() => {
        // Fetch or create a conversation document
        const getOrCreateConversation = async () => {
            // Fetch notifications for the conversation
            const notificationsRef = collection(
                db,
                `notifications/${auth.currentUser?.uid}/notification`
            )
            const queryNotifications = query(
                notificationsRef,
                orderBy('createdAt')
            )
            const unsubscribe = onSnapshot(queryNotifications, (snapshot) => {
                let notifications = []
                snapshot.forEach((doc) => {
                    notifications.push({ ...doc.data(), id: doc.id })
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

    return (
        <>
            {loading ? (
                <h1>LOADING...</h1>
            ) : (
                <div>
                    <h1>PRUEBA</h1>
                    {notifications?.map((message) => (
                        <div key={message.id}>{message.text}</div>
                    ))}
                </div>
            )}
        </>
    )
}
