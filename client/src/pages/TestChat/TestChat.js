import { useEffect } from "react";
import React, { useState } from "react";
import { io } from "socket.io-client";
// import ScrollToBottom from "react-scroll-to-bottom";
import './TestChat.css';



// // Connect to Socket.io
const socket = io.connect("http://localhost:8800")
socket.on("connect", () => {
  console.log(`you are connected with id: ${socket.id}`); // x8WIv7-mJelg7on_ALbx
  // socket.emit('new-user-add', () => {
  //   const userId = 10
  // })
});

socket.on('recieve-message', ms => {
  alert(ms)
})

function Chat({ socket, username }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        // room: room,
        sender: username,
        message: currentMessage,
      };


      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (


    // socket.on('recieve-message', ms => {
    //   alert(ms)
    // })

    // socket.emit('custom-event', 10, 'hi', { a: 'aa' })

    // socket.on("get-users", () => {
    // const sendMs = () => {
    //   let ms = document.getElementById('msId').value;
    //   socket.emit('chat', ms);
    //   document.getElementById('msId').value = '';


    //   socket.emit('send-message', ms)
    // }

    // const displayMessage = () => {
    //   const message = document.getElementById('showMessage').value;
    //   document.getElementById('showMessage').value = '';
    // }


    // function Message() {
    //   const [messageReceived, setMessageReceived] = useState()
    // }
    // useEffect(() => {
    //   socket.on('recieve-message', ms => {
    //     alert(ms)


    //   })
    // }, [socket]); 


    // const TestChat = () =>

    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        {/* <ScrollToBottom className="message-container"> */}
        {messageList.map((messageContent) => {
          return (
            <div
              className="message"
              id={username === messageContent.sender ? "you" : "other"}
            >
              <div>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="author">{messageContent.sender}</p>
                </div>
              </div>
            </div>
          );
        })}
        {/* </ScrollToBottom> */}
      </div>
      {/* <main id='chatMain'>
      <section id="col-1">
        <h2>Chats</h2>
      </section>
      <section id="col-2"> */}


      <div id="msDiv">
        {/* <form id="send-container"> */}
        <input
          type="test"
          value={currentMessage}
          onChange={(event) => { setCurrentMessage(event.target.value) }}
          id="msId"
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }} />
        <button onClick={sendMessage} id="sendMs">Send</button>
        {/* </form> */}
        {/* <h3 id="showMessage"> { }</h3> */}
      </div>
      {/* </section> */}
      {/* </main > */}
    </div>

  );
}


export default Chat;