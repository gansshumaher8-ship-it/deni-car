import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

// ВАЖНО: Указываем основной домен, чтобы картинки работали везде
export const metadata: Metadata = {
  metadataBase: new URL('https://xn--d1acjt.com'), 

  title: "Автоломбард Дмитров | Деньги под залог авто | DENI-CAR",
  description: "Выдаем наличные под залог ПТС и авто за 1 час. Ставка от 5%. Машина остается у вас. Одобрение 100%.",
  
  openGraph: {
    title: "DENI-CAR — Деньги сразу",
    description: "Нужны деньги? Выдадим до 5 млн под залог ПТС. Дмитров, ул. Загорская, 22.",
    url: "https://xn--d1acjt.com",
    siteName: "Автоломбард DENI-CAR",
    images: [
      {
        url: "/bg.jpg", // Убедитесь, что bg.jpg лежит в папке public!
        width: 1200,
        height: 630,
        alt: "Автоломбард в Дмитрове",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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