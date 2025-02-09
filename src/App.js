import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [user1Message, setUser1Message] = useState('');
  const [user2Message, setUser2Message] = useState('');
  const [user1Messages, setUser1Messages] = useState([]);
  const [user2Messages, setUser2Messages] = useState([]);

  // Handle User1's message input
  const handleUser1MessageChange = (e) => {
    setUser1Message(e.target.value);
  };

  // Handle User2's message input
  const handleUser2MessageChange = (e) => {
    setUser2Message(e.target.value);
  };

  // Send User1's message
  const handleSendUser1Message = () => {
    if (user1Message.trim()) {
      // Add User1's message to their chat
      setUser1Messages([...user1Messages, { text: user1Message, sender: 'User1', id: Date.now() }]);
      // Add User1's message to User2's chat
      setUser2Messages([...user2Messages, { text: user1Message, sender: 'User1', id: Date.now() }]);
      setUser1Message('');
    }
  };

  // Send User2's message
  const handleSendUser2Message = () => {
    if (user2Message.trim()) {
      // Add User2's message to their chat
      setUser2Messages([...user2Messages, { text: user2Message, sender: 'User2', id: Date.now() }]);
      // Add User2's message to User1's chat
      setUser1Messages([...user1Messages, { text: user2Message, sender: 'User2', id: Date.now() }]);
      setUser2Message('');
    }
  };

  return (
    <div className="chat-container">
      {/* User1's Chat */}
      <div className="chat-box user1-chat">
        <h3>User1</h3>
        <div className="messages">
          {user1Messages.map((msg) => (
            <div key={msg.id} className={msg.sender === 'User1' ? 'message user1' : 'message user2'}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={user1Message}
            onChange={handleUser1MessageChange}
            placeholder="Typing...."
            className="input-field"
          />
          <button onClick={handleSendUser1Message} className="send-btn">Send</button>
        </div>
      </div>

      {/* User2's Chat */}
      <div className="chat-box user2-chat">
        <h3>User2</h3>
        <div className="messages">
          {user2Messages.map((msg) => (
            <div key={msg.id} className={msg.sender === 'User2' ? 'message user2' : 'message user1'}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={user2Message}
            onChange={handleUser2MessageChange}
            placeholder="Typing....."
            className="input-field"
          />
          <button onClick={handleSendUser2Message} className="send-btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default App;