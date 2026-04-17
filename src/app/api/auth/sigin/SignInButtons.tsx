'use client';

import { signIn } from 'next-auth/react';
import type { ClientSafeProvider } from 'next-auth/react';

interface Props {
  providers: Record<string, ClientSafeProvider> | null;
}

export default function SignInButtons({ providers }: Props) {
  if (!providers) return <div>Carregando...</div>;

  return (
    <div className="flex flex-col gap-3">
      {Object.values(providers).map((provider) => (
        <button
          key={provider.id}
          onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Entrar com {provider.name}
        </button>
      ))}
    </div>
  );
}
