import Link from 'next/link';
import AuthButton from './auth-button';
import ModeToggle from './mode-toggle';
import { BadgeEuro } from 'lucide-react';

export default function Header({ defaultUrl }: { defaultUrl: string }) {
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-20">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
                <Link href={defaultUrl} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <BadgeEuro className="w-8 h-8 text-primary" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Contapars</span>
                </Link>
                <div className="flex items-center gap-2">
                    <AuthButton />
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}
