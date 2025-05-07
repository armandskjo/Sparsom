// server/api/chat.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { message } = await req.json();

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: message,
      temperature: 0.7,
      max_tokens: 500
    })
  });

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "Beklager, jeg kunne ikke svare akkurat nå.";

  return NextResponse.json({ reply });
}
