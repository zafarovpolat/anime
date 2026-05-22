import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Panelia — Манга онлайн',
  description: 'Panelia — читайте мангу, манхву и маньхуа онлайн бесплатно',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
