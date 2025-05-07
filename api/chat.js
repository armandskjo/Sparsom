// server/api/chat.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { message } = await req.json();

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ reply: "API-nøkkel mangler på serveren." }, { status: 500 });
  }

  try {
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

    if (!data.choices || !data.choices[0]) {
      return NextResponse.json({ reply: "Noe gikk galt med OpenAI-svaret." }, { status: 500 });
    }

    const reply = data.choices[0].message.content;
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Feil i API-kall:", error);
    return NextResponse.json({ reply: "Det oppstod en teknisk feil. Prøv igjen senere." }, { status: 500 });
  }
}
