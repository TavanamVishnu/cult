import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Chatbot = () => {
  const [isChatbotExpanded, setIsChatbotExpanded] = useState(false);
  const [inputText, setInputText] = useState('');
  const [allMessages, setAllMessages] = useState([]);

  const toggleChatbot = () => {
    setIsChatbotExpanded(!isChatbotExpanded);
  };

  const closeChatbot = () => {
    setIsChatbotExpanded(false);
  };

  const sendMessage = async () => {
    let url = "https://api.openai.com/v1/chat/completions";
  
    let model = 'gpt-3.5-turbo';

    let messagesToSend = [
      ...allMessages,
      {
        role: 'user',
        content: inputText,
      }
    ];

    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: model,
        messages: messagesToSend,
      }),
    });

    let resjson = await res.json();
    if (resjson && resjson.choices && resjson.choices.length > 0) {
      let botMessage = resjson.choices[0].message.content;
      setAllMessages([
        ...messagesToSend,
        { role: 'bot', content: botMessage },
      ]);
    }
    setInputText('');
  };

  return (
    <div>
      <div
        className={`position-fixed bottom-0 end-0 p-3 bg-primary text-white rounded-circle ${isChatbotExpanded ? 'd-none' : ''}`}
        style={{ cursor: 'pointer', zIndex: 1000 }}
        onClick={toggleChatbot}
      >
        <div>🤖</div>
      </div>

      {isChatbotExpanded && (
        <div
          className="position-fixed fixed-bottom fixed-right w-50 h-75 bg-light border rounded overflow-hidden"
          style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)', zIndex: 1000 }}
        >
          <div className="d-flex flex-column h-100">
            <div className="d-flex justify-content-between p-2 bg-primary text-white">
              <div>Chatbot</div>
              <button
                className="btn btn-link text-white"
                onClick={closeChatbot}
              >
                Close
              </button>
            </div>
            <div className="flex-grow-1 overflow-auto p-3">
              {allMessages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 text-${message.role === 'user' ? 'right' : 'left'}`}
                >
                  <strong>{message.role === 'user' ? 'You' : 'Bot'}:</strong>{' '}
                  {message.content}
                </div>
              ))}
            </div>

            <div className="d-flex p-3 border-top">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-grow-1 me-2 form-control"
                placeholder="Type your question..."
              />
              <button
                onClick={sendMessage}
                className="btn btn-primary"
                style={{ minWidth: '80px' }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
