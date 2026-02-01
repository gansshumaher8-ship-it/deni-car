import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css"; // <--- Самая важная строка, она подключает дизайн

const montserrat = Montserrat({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Автоломбард Дмитров | DENI-CAR",
  description: "Деньги под залог ПТС и авто в Дмитрове",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}