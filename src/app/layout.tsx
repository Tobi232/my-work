import '../app/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Bells Market Shop',
  description: 'A modern market web app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
};