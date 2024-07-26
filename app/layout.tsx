import { GeistSans } from 'geist/font/sans';

import './globals.css';

import ThemeProvider from '@/components/theme-provider';
import Header from '@/components/header';

import Footer from '@/components/footer';

const defaultUrl = process.env.WEBSITE_URL ? `https://${process.env.WEBSITE_URL}` : 'http://localhost:3000';

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: 'Contapars Starter Kit',
    description: 'The fastest way to create and use pattern to a usecase'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={GeistSans.className} suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <main className="min-h-screen flex flex-col items-center">
                        <Header defaultUrl={defaultUrl} />
                        <div className="flex-1 w-full flex flex-col gap-10 items-center mt-10">
                            <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">{children}</div>
                        </div>
                        <Footer />
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
