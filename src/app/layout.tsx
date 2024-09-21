import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import { Toaster } from '@/components/ui/toaster';

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={twMerge(
                    inter.variable,
                    calistoga.variable,
                    'bg-gray-900 text-white antialiased font-sans'
                )}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
