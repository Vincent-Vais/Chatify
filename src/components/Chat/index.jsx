import React, { useState, useEffect, useRef } from "react";
import FlipMove from "react-flip-move";
import Message from "./Message/Message.component";
import MessageForm from "./MessageForm/MessageForm.component";
import { firebase, db } from "../../firebase";
import useStyles from "./Chat.styles";
import { selectUser } from "../../store/user/selectors";
import { selectChannel } from "../../store/channels/selectors";
import { useSelector, shallowEqual } from "react-redux";

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

const Chat = () => {
  const user = useSelector(selectUser, shallowEqual);
  const channel = useSelector(selectChannel, shallowEqual);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { id } = channel;
    db.collection(`channels/${id}/messages`)
      .orderBy("timestamp", "asc")
      .onSnapshot((snap) => {
        setMessages(
          snap.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, [channel]);

  const sendMessage = (event, input, setInput) => {
    event.preventDefault();
    const { id } = channel;
    db.collection(`channels/${id}/messages`).add({
      text: input,
      username: user.name,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  const classes = useStyles();
  return (
    <div className={classes.canvas}>
      <div className={classes.messages} id="messages">
        <FlipMove>
          {messages &&
            messages.map(({ message, id }) => (
              <Message key={id} message={message} username={user.name} />
            ))}
        </FlipMove>
        <AlwaysScrollToBottom />
      </div>
      <form className={classes.form}>
        <MessageForm sendMessage={sendMessage} />
      </form>
    </div>
  );
};

export default Chat;
