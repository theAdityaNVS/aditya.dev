import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles, User, Loader2, AlertCircle } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: "Hi! I'm Nova, an AI assistant trained on this portfolio. Ask me anything about the developer's skills, experience, or projects!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setHasError(false);

    try {
      // Prepare history for API (excluding the very latest user message which is sent as 'message')
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText || "I'm thinking...",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("AI Error:", error);
      setHasError(true);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I'm having trouble connecting to my brain (Gemini API) right now. Please try again later or verify the API key.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-assistant" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            <Sparkles size={16} />
            <span>Powered by Google Gemini</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Ask Me Anything</h2>
          <p className="text-slate-400">Interact with a virtual version of me to learn more about my background.</p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] w-full max-w-2xl mx-auto">
            {/* Chat Header */}
            <div className="p-4 border-b border-white/10 bg-slate-900/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                        <Bot className="text-white" size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-white">Nova Assistant</h3>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-xs text-slate-400">Online</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            msg.role === 'user' ? 'bg-slate-700' : 'bg-primary/20'
                        }`}>
                            {msg.role === 'user' ? <User size={16} className="text-white"/> : <Bot size={16} className="text-primary"/>}
                        </div>
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                            msg.role === 'user' 
                                ? 'bg-primary text-white rounded-tr-sm' 
                                : 'bg-slate-800 text-slate-200 border border-white/5 rounded-tl-sm'
                        }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-center gap-2 text-slate-400 ml-12 text-sm">
                        <Loader2 className="animate-spin" size={16} />
                        <span>Thinking...</span>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-900/80 border-t border-white/10">
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="e.g., What frameworks does Alex know?"
                        className="w-full bg-slate-800/50 border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <Send size={18} />
                    </button>
                </div>
                {hasError && !process.env.API_KEY && (
                   <div className="mt-2 flex items-center gap-2 text-xs text-red-400">
                     <AlertCircle size={12} />
                     <span>API Key missing. Add API_KEY to environment variables.</span>
                   </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
