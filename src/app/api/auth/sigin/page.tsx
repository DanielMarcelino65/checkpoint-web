import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SignInButtons from './SignInButtons';

export default async function SignInPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  const providers = await getProviders();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center p-6 bg-primary-foreground rounded-2xl gap-6 shadow-lg">
        <h1 className="text-3xl text-primary font-bold text-center">
          Entre na sua conta
        </h1>
        <SignInButtons providers={providers} />
      </div>
    </div>
  );
}
