import React, { useState } from 'react'
import { Chat } from '../chat/Chat'
import { AppWrapper } from '../chat/AppWrapper'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

function ChatApp() {
    const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
    const [isInChat, setIsInChat] = useState(null)
    const [room, setRoom] = useState('')

    if (!isAuth) {
        return (
            <AppWrapper
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                setIsInChat={setIsInChat}
            ></AppWrapper>
        )
    }

    return (
        <AppWrapper
            isAuth={isAuth}
            setIsAuth={setIsAuth}
            setIsInChat={setIsInChat}
        >
            {!isInChat ? (
                <div className="room">
                    <label> Type room name: </label>
                    <input onChange={(e) => setRoom(e.target.value)} />
                    <button
                        onClick={() => {
                            setIsInChat(true)
                        }}
                    >
                        Enter Chat
                    </button>
                </div>
            ) : (
                <Chat room={room} />
            )}
        </AppWrapper>
    )
}

export default ChatApp
