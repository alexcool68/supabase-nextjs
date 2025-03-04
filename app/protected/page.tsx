import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export default async function ProtectedPage() {
    const supabase = createClient();

    const {
        data: { user }
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect('/login');
    }

    return (
        <div className="flex-1 w-full flex flex-col gap-20 items-center">
            <div className="w-full">
                <div className="py-6 font-bold bg-purple-950 text-center">
                    This is a protected page that you can only see as an authenticated user
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
                <main className="flex-1 flex flex-col gap-6">Main</main>
            </div>
        </div>
    );
}
