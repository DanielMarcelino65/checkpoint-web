'use client';
import { SessionProvider, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  return (
    <SessionProvider>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full flex-col items-center justify-center bg-white dark:bg-black">
          <h1 className="font-bold text-4xl">Welcome to Checkpoint</h1>

          {session ? (
            <p>Bem vindo, {session.user?.name}!</p>
          ) : (
            <Link href="/api/auth/signin/google">
              <button>Sign-In with Google</button>
            </Link>
          )}
        </main>
      </div>
    </SessionProvider>
  );
}
