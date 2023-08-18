import { useEffect } from 'react'
import { db, auth } from '../config/firebase-config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useSelector } from 'react-redux'

const useNotify = (recipient) => {
    const user = useSelector((state) => state.loggedUser)
    console.log('prueba')
    const conversationsRef = collection(db, 'notifications') // Change: Use 'conversations' collection
    const participants = [auth.currentUser?.uid, recipient]
    const conversationData = { participants }
    useEffect(() => {
        // Fetch or create a conversation document
        if (conversationData.participants[0]) {
            const getOrCreateConversation = async () => {
                await addDoc(conversationsRef, conversationData) // Create the conversation if it doesn't exist

                // Fetch messages for the conversation
                collection(
                    db,
                    `notifications/${auth.currentUser?.uid}/notification`
                )
            }

            getOrCreateConversation()
        }
    }, [])

    const sendNotification = (newMessage) => {
        const handleNotify = async () => {
            if (newMessage === '') return

            const conversationData = { recipient }
            await addDoc(conversationsRef, conversationData) // Create the conversation if it doesn't exist

            // Store the message with the conversation ID
            const messagesRef = collection(
                db,
                `notifications/${recipient}/notification`
            )
            await addDoc(messagesRef, {
                text: newMessage,
                createdAt: serverTimestamp(),
                sender: auth.currentUser?.uid,
                recipient: recipient,
                firstName: user.firstName,
                lastName: user.lastName,
            })
        }
        handleNotify()
    }

    return { sendNotification }
}

export default useNotify
