import './TestChat.css';
import { io } from "socket.io-client";

// Connect to Socket.io
const socket = io("http://localhost:8800");



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