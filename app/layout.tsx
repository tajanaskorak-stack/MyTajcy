import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'MyTajcy - Helping your ideas shine – with a smile.',
  description: 'Modern web solutions, business automation, and creative design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr" className="dark" suppressHydrationWarning>
      <body className={`${montserrat.className} ${montserrat.variable} ${inter.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
