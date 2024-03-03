import React, { useState } from 'react';
import './Chat.css';
import Sidebar from './SideBar';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { sender: 'Maryam', message: message }]);
      setMessage('');
    }
  };

  return (
    <div className="d-flex" id="wrapper"> {/* Use flexbox for layout */}
      <Sidebar /> {/* Render the Sidebar component */}
      <div id="page-content-wrapper">
        <div className="chat-container"> {/* Add your chat container */}
          <div className="message-display">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === 'Maryam' ? 'sent' : 'received'}`}>
                <div className="sender smaller">{msg.sender}</div>
                <div className="content">{msg.message}</div>
              </div>
            ))}
          </div>
          <div className="message-input">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Message #channel"
              className="message-input-field"
            />
            <button onClick={sendMessage} className="send-button">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
