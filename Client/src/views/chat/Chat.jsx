import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../../config/firebase-config'
import { collection, addDoc, serverTimestamp, onSnapshot, query, orderBy } from 'firebase/firestore'
import style from './chat.module.scss'
import { useSelector } from 'react-redux'
import useNotify from './../../hooks/useNotify'

export const Chat = ({ recipient }) => {
    const messageRefEnd = useRef(null)
    const smtRef = useRef(null)
    const user = useSelector(state => state.loggedUser)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [sent, setSent] = useState(false)
    const conversationsRef = collection(db, 'conversations')
    const participants = [auth.currentUser.uid, recipient]
    const ordered = participants.sort((a, b) => {
        if (a.toLowerCase() > b.toLowerCase()) {
            return -1
        } else if (a.toLowerCase() < b.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })

    const { sendNotification } = useNotify(recipient)

    const conversationId = ordered.join('_')

    const conversationData = { participants }

    useEffect(() => {
        const getOrCreateConversation = async () => {
            await addDoc(conversationsRef, conversationData)

            const messagesRef = collection(db, `conversations/${conversationId}/messages`)

            const queryMessages = query(messagesRef, orderBy('createdAt'))
            const unsubscribe = onSnapshot(queryMessages, snapshot => {
                let messages = []
                snapshot.forEach(doc => {
                    messages.push({ ...doc.data(), id: doc.id })
                })

                setMessages(messages)
            })

            return () => unsubscribe()
        }

        getOrCreateConversation()
    }, [recipient, conversationId])

    useEffect(() => {
        if (sent) {
            sendNotification(`${user.firstName} ${user.lastName} te ha enviado un mensaje`)
        }
    }, [sent])

    useEffect(() => {
        messageRefEnd.current?.scrollIntoView({ behavior: 'instant', block: 'end' })
        smtRef.current?.scrollIntoView({ behavior: 'instant', block: 'end' })
    }, [messages])

    const handleSubmit = async event => {
        event.preventDefault()

        if (newMessage === '') return

        const participants = [auth.currentUser.uid, recipient]

        participants.sort()
        const conversationId = ordered.join('_')
        const conversationData = { participants }
        await addDoc(conversationsRef, conversationData)

        const messagesRef = collection(db, `conversations/${conversationId}/messages`)

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            sender: auth.currentUser.uid,
            recipient: recipient,
            firstName: user.firstName,
            lastName: user.lastName,
        })

        setNewMessage('')
        setSent(true)
    }

    return (
        <div className={style.chatapp}>
            <div className='header'></div>

            <div className={style.messages}>
                {messages.map(message => (
                    <div key={message.id}>
                        <span
                            className={` ${
                                message.recipient === auth.currentUser.uid ? style.receivername : style.sendername
                            }`}
                        >
                            {message.recipient === auth.currentUser.uid
                                ? `${message.firstName} ${message.lastName} `
                                : 'You'}
                        </span>
                        <div className={style.chatbubbles}>
                            <div
                                className={` ${
                                    message.recipient === auth.currentUser.uid ? style.receiver : style.sender
                                }`}
                            >
                                {message.text}
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messageRefEnd} />
            </div>

            <form onSubmit={handleSubmit} className={style.chatform}>
                <input
                    type='text'
                    value={newMessage}
                    onChange={event => setNewMessage(event.target.value)}
                    className={style.messageinput}
                    placeholder='Escribe tu mensaje...'
                />

                <button type='submit' className={style.send}>
                    Enviar
                </button>
            </form>
            <div ref={smtRef}></div>
        </div>
    )
}
