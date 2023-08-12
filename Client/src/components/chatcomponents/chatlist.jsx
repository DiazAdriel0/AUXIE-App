import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import ChatSelector from './chatselector' // Import the ChatSelector component
import { doc, onSnapshot } from 'firebase/firestore'
import { auth, db } from '../../config/firebase-config'
import { Chat } from '../../views/chat/Chat'
import style from './chatlist.module.scss'
const Chatlist = () => {
    const [selectedUser, setSelectedUser] = useState(null) // Store the selected sender
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [chats, setChats] = useState([])
    const handleUserSelection = (sender) => {
        setSelectedUser(sender)
    }

    const user = useSelector((state) => state.loggedUser)

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(
                doc(db, 'conversations', user.uid),
                (doc) => {
                    setChats(doc.data())
                }
            )

            return () => {
                unsub()
            }
        }

        user.uid && getChats()
    }, [user.uid])

    return (
        <div className={style.chatselector}>
            {/* Display the ChatSelector component */}
            <ChatSelector
                inbox={user.inbox}
                handleUserSelection={handleUserSelection}
            />

            {/* Only display the chat component if a user is selected */}
            {selectedUser && (
                <Chat
                    auxiedetails={auth.currentUser.uid}
                    recipient={selectedUser}
                />
            )}
        </div>
    )
}

export default Chatlist
