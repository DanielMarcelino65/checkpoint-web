'use client';
import Header from '@/components/atoms/header';
import { ThemeProvider } from '@/components/atoms/theme-provider';
import { SessionProvider } from 'next-auth/react';

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
