import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, phone, car, amount } = await req.json();

    const message = `
🔥 *НОВАЯ ЗАЯВКА С САЙТА* 🔥

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
🚗 *Авто:* ${car}
💰 *Сумма:* ${amount} ₽
    `;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}