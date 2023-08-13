import React from 'react';
import style from './chatselector.module.scss'
const ChatSelector = ({ inbox, handleUserSelection }) => {
  return (
    <div >
      {inbox.map((item, index) => (
        <div className={style.chatlist} key={index} onClick={() => handleUserSelection(item.sender)}>
          User: {item.sender}
        </div>
      ))}
    </div>
  );
};



export default ChatSelector;
