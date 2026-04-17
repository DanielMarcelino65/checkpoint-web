'use client';
import { Button } from '@/components/ui/button';
import { SessionProvider, useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  return (
    <SessionProvider>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full flex-col items-center justify-center bg-white dark:bg-black">
          <div className="flex flex-col bg-primary-foreground items-center p-6 gap-6 rounded-2xl">
            <h1 className="font-bold text-4xl">Welcome to Checkpoint</h1>
            {session ? (
              <>
                <p>Bem vindo, {session.user?.name}!</p>
                <Button onClick={() => signOut()}>Sign Out</Button>
              </>
            ) : (
              <Link href="/api/auth/signin">
                <Button>Sign-In</Button>
              </Link>
            )}
          </div>
        </main>
      </div>
    </SessionProvider>
  );
}
