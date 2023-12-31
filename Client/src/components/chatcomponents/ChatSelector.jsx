import React from 'react'
import style from './chatSelector.module.scss'
const ChatSelector = ({ inbox, handleUserSelection }) => {
    return (
        <div>
            {inbox?.map((item, index) => (
                <div
                    className={style.chatlist}
                    key={index}
                    onClick={() => handleUserSelection(item.sender)}
                >
                    {item.name}
                </div>
            ))}
        </div>
    )
}

export default ChatSelector
