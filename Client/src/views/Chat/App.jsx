import React, { useState, useEffect } from "react";
import { Chat } from "../Chat/chat";
import { Auth } from "../Chat/Auth";
import { AppWrapper } from "../Chat/AppWrapper";
import Cookies from "universal-cookie";
import "./App.css";

const cookies = new Cookies();

function ChatApp() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [recipient, setRecipient] = useState(""); // Change: Use 'recipient' instead of 'room'
  const [isInChat, setIsInChat] = useState(false);

  if (!isAuth) {
    return (
      <AppWrapper
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      >
        <Auth setIsAuth={setIsAuth} />
      </AppWrapper>
    );
  }

  return (
    <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
      {!isInChat ? (
        <div className="room">
          <label> Type user ID: </label> {/* Change: Update label */}
          <input onChange={(e) => setRecipient(e.target.value)} /> {/* Change: Use 'recipient' */}
          <button
            onClick={() => {
              setIsInChat(true);
            }}
          >
            Start Conversation
          </button>
        </div>
      ) : (
        <Chat recipient={recipient} /> /* Change: Pass 'recipient' prop */
      )}
    </AppWrapper>
  );
}

export default ChatApp;
