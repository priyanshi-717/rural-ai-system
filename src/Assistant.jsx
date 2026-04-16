import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Send, Leaf, BriefcaseMedical } from 'lucide-react';

export default function Assistant() {
  const { domain } = useParams();
  const navigate = useNavigate();
  
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Configure theme based on domain
  const isAgri = domain === 'agriculture';
  const theme = {
    color: isAgri ? 'bg-[#5e8264]' : 'bg-[#e57368]',
    lightColor: isAgri ? 'bg-[#eef8f0]' : 'bg-[#fdedeb]',
    borderColor: isAgri ? 'border-[#bbf7d0]' : 'border-[#fecaca]',
    textColor: isAgri ? 'text-green-800' : 'text-red-800',
    title: isAgri ? 'Agriculture Assistant' : 'Healthcare Assistant',
    Icon: isAgri ? Leaf : BriefcaseMedical,
    welcomeText: isAgri ? 'Ask me about farming, crops, weather, or schemes' : 'Ask me about health, symptoms, nutrition, or schemes',
    suggestions: isAgri 
      ? ['Crop Advice', 'Pest Control', 'Weather Tips', 'Market Prices', 'Soil Health', 'Govt Schemes']
      : ['Check Symptoms', 'First Aid', 'Nutrition Tips', 'Maternal Health', 'Child Care', 'Health Schemes']
  };

  const handleSend = async (textToSend = input) => {
    if (!textToSend.trim()) return;
    
    const newMsg = { role: 'user', content: textToSend };
    setMessages(prev => [...prev, newMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/chat', {
        message: textToSend,
        domain: domain
      });
      setMessages(prev => [...prev, { role: 'ai', content: response.data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: "Network error connecting to backend." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#fcfcfc] font-sans">
      {/* Header */}
      <header className={`${theme.color} text-white p-4 flex items-center gap-4`}>
        <button onClick={() => navigate(-1)} className="p-2 bg-black/10 rounded-full hover:bg-black/20">
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-2">
          <theme.Icon size={24} />
          <div>
            <h1 className="font-bold leading-tight">{theme.title}</h1>
            <p className="text-xs opacity-80">Ask me anything</p>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center mt-10">
            <theme.Icon size={48} className={theme.textColor} />
            <h2 className="text-xl font-bold mt-4">Welcome!</h2>
            <p className="text-gray-500 text-sm mt-2 text-center">{theme.welcomeText}</p>
            
            {/* Suggestions Grid */}
            <div className="grid grid-cols-2 gap-3 w-full mt-8">
              {theme.suggestions.map((sug, i) => (
                <button 
                  key={i}
                  onClick={() => handleSend(sug)}
                  className={`p-3 rounded-xl border ${theme.lightColor} ${theme.borderColor} ${theme.textColor} font-medium text-sm text-left flex items-center gap-2`}
                >
                  <span className="text-lg opacity-70">⚡</span> {sug}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-2xl max-w-[85%] ${
                  msg.role === 'user' ? `${theme.color} text-white rounded-br-sm` : 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-gray-400 text-sm italic">AI is typing...</div>}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100 pb-8">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full p-1 pl-4 shadow-sm focus-within:border-gray-400 transition">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about crops, health, etc..."
            className="flex-1 bg-transparent focus:outline-none text-gray-700 py-2"
          />
          <button 
            onClick={() => handleSend()}
            disabled={isLoading}
            className={`p-3 rounded-full ${isLoading ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}