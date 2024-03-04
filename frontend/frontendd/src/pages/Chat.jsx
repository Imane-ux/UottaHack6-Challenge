import React, { useState, useRef } from 'react';
import './Chat.css';
import Sidebar from './SideBar';
import { BsMicFill } from 'react-icons/bs'; // Import Bootstrap icons

const Chat = () => {
  const msgRef = useRef();

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [uploadPopupVisible, setUploadPopupVisible] = useState(false); // State for managing upload popup visibility

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      const data = {
        message: message.trim(),
        sender: "imane" // Assume sender is "me" for sent messages
      };
      setMessages([...messages, data]); // Add the new message to the messages state
      setMessage(''); // Clear the message input field
    }
  };

  const toggleUploadPopup = () => {
    setUploadPopupVisible(!uploadPopupVisible);
  };

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <div className="chat-container">
          <div className="message-display">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === 'me' ? 'sent' : 'received'}`}>
                <div className="sender">{msg.sender}</div>
                <div className="content">{msg.message}</div>
              </div>
            ))}
          </div>
          <div className="message-input">
            <div className="add-button-container" style={{ position: 'relative' }}>
              <button onClick={toggleUploadPopup} className="add-button">+</button>
              {uploadPopupVisible && (
                <div className="upload-popup">
                  <div>Upload a File</div>
                </div>
              )}
            </div>
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Message #channel"
              className="message-input-field"
              ref={msgRef}
            />
            <button onClick={sendMessage} className="send-button">Send</button>
            <button onClick={toggleUploadPopup} className="send-button"><BsMicFill /></button> {/* Add microphone icon */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
