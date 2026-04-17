'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import type { ClientSafeProvider } from 'next-auth/react';
import Image from 'next/image';

interface Props {
  providers: Record<string, ClientSafeProvider> | null;
}

export default function SignInButtons({ providers }: Props) {
  if (!providers) return <div>Carregando...</div>;

  return (
    <div className="flex flex-col gap-3">
      {Object.values(providers).map((provider) => (
        <Button
          key={provider.id}
          onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          className="flex items-center gap-2 p-4"
        >
          Entrar com {provider.name}
          <Image
            src={'/google-logo.svg'}
            alt="Google Logo"
            width={18}
            height={18}
          />
        </Button>
      ))}
    </div>
  );
}
