import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

// --- ЗДЕСЬ НАСТРАИВАЕТСЯ SEO ---
export const metadata: Metadata = {
  // Заголовок, который виден в поиске (синий текст)
  title: "Автоломбард Дмитров | Деньги под залог авто и ПТС | DENI-CAR",
  
  // Описание под заголовком (серый текст)
  description: "Срочные займы под залог автомобиля в Дмитрове. Выдача наличных за 1 час до 90% стоимости. Ставка от 5%. Авто остается у вас или на стоянке. Без справок о доходах и с любой кредитной историей. Работаем 24/7.",
  
  // Ключевые слова для роботов
  keywords: "автоломбард дмитров, деньги под залог авто, займ под птс дмитров, ссуда под залог машины, кредит под залог автомобиля, ломбард авто, деньги сразу, займ без справок",
  
  // Настройки для ссылок в соцсетях (WhatsApp, Telegram, VK)
  openGraph: {
    title: "DENI-CAR — Деньги под залог авто в Дмитрове",
    description: "Одобрение за 30 минут. Получите до 5 млн рублей под залог ПТС. Машина остается у вас.",
    url: "https://xn--d1acjt.com", // Ваш домен дени.com
    siteName: "Автоломбард DENI-CAR",
    images: [
      {
        url: "/bg.jpg", // Картинка, которая подтянется при отправке ссылки
        width: 1200,
        height: 630,
        alt: "Автоломбард в Дмитрове",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  
  // Иконки сайта
  icons: {
    icon: "/logo.jpg", // Или .ico, если есть
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },

  // Подтверждение для Яндекс.Вебмастера (сюда потом вставите код, если Яндекс попросит)
  verification: {
    yandex: "", // Код верификации Яндекса
    google: "", // Код верификации Google
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}