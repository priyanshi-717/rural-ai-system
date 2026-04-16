import "../index.css";

function Chat() {
  return (
    <div className="chat-container">

      <h2>Agriculture Assistant</h2>
      <p>Ask me anything...</p>

      <div className="chat-box">
        <div className="ai-msg">Hello! How can I help you?</div>
        <div className="user-msg">I need farming advice</div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <button>🎤</button>
      </div>

    </div>
  );
}

export default Chat;