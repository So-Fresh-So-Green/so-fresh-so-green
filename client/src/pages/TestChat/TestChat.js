import './TestChat.css';
import { io } from "socket.io-client";

 // Connect to Socket.io
const socket = io("http://localhost:8800");

useEffect(() => {
  socket.current = io("ws://localhost:8800");
  socket.current.emit("new-user-add", user._id);
  socket.current.on("get-users", (users) => {
    setOnlineUsers(users);
  });
}, [user]);


socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });

const TestChat = () =>
  <main id='chatMain'>
    <section id="col-1">
        <h2>Chats</h2>
    </section>

    <section id="col-2">


  <div id="msDiv">
    <input id="msId" />
    <button id="sendMs">Send</button>
  </div>
    </section>
  </main>

  export default TestChat;