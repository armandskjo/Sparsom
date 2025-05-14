// pages/ai.js
import { useState } from 'react';

export default function AIPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [...messages, userMessage] }),
    });

    const data = await response.json();
    setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
  };

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>Sparsom AI-assistent</h2>
      <div style={{ marginBottom: '1rem' }}>
        {messages.map((msg, i) => (
          <p key={i}><strong>{msg.role === 'user' ? 'Du' : 'Sparsom'}:</strong> {msg.content}</p>
        ))}
      </div>
      <form onSubmit={sendMessage} style={{ display: 'flex' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Still et spørsmål..."
          style={{ flex: 1, padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px' }}>Send</button>
      </form>
    </main>
  );
}
