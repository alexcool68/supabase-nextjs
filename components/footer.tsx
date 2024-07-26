export default function Footer() {
    return (
        <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
            <p>
                Powered by{' '}
                <a href={process.env.WEBSITE_URL} target="_blank" className="font-bold hover:underline" rel="noreferrer">
                    Alexis LEROY
                </a>
            </p>
        </footer>
    );
}
