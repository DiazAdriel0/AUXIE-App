import React from 'react';

const ChatSelector = ({ inbox, handleUserSelection }) => {
  return (
    <div>
      {inbox.map((item, index) => (
        <div key={index} onClick={() => handleUserSelection(item.sender)}>
          User: {item.sender}
        </div>
      ))}
    </div>
  );
};

export default ChatSelector;
