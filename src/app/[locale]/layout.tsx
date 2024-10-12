import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
    subsets: ['latin'],
    variable: '--font-serif',
    weight: ['400'],
});

export const metadata: Metadata = {
    title: "Ferdinand's Portfolio",
    description: 'Modern & Minimalist Ferdinand Portfolio',
};

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    unstable_setRequestLocale(locale);
    const messages = await getMessages();
    return (
        <html lang={locale} className="scroll-smooth">
            <body
                className={cn(
                    inter.variable,
                    calistoga.variable,
                    'bg-gray-900 text-white antialiased font-sans'
                )}
            >
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <Toaster />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
