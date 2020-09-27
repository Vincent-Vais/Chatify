import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FlipMove from "react-flip-move";
import Message from "../Message/Message.component";
import MessageForm from "../MessageForm/MessageForm.component";
import { firebase, db } from "../../firebase";
import { animateScroll } from "react-scroll";
import "./ChatCanvas.styles.css";

const ChatCanvas = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const params = useParams();
  useEffect(() => {
    db.collection(`${params.id}`)
      .orderBy("timestamp", "asc")
      .onSnapshot((snap) => {
        setMessages(
          snap.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, [params.id]);

  const sendMessage = (event, input, setInput) => {
    event.preventDefault();
    db.collection(`${params.id}`).add({
      text: input,
      username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: "messages",
    });
  };

  useEffect(scrollToBottom, [messages]);
  return (
    <div className="chat-canvas">
      <div className="messages-container" id="messages">
        <FlipMove>
          {messages &&
            messages.map(({ message, id }) => (
              <Message key={id} message={message} username={username} />
            ))}
        </FlipMove>
      </div>
      <form className="form">
        <MessageForm sendMessage={sendMessage} />
      </form>
    </div>
  );
};

export default ChatCanvas;
