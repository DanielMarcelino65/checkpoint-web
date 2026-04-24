'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Gamepad2, Search, List, User, LogOut } from 'lucide-react';

export default function Header() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary-foreground backdrop-blur-md border-b border-secondary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center  h-16">
          {/* Logo com ícone */}
          <div className="justify-self-start">
            <Link
              href="/"
              className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <Gamepad2 className="h-8 w-8" />
              <span className="font-bold text-xl text-white">Checkpoint</span>
            </Link>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex justify-self-center items-center gap-6">
            <Link
              href="/games/search"
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors font-medium"
            >
              <Search className="h-4 w-4" />
              Buscar
            </Link>
            <Link
              href="/lists"
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors font-medium"
            >
              <List className="h-4 w-4" />
              Listas
            </Link>
            {session?.user && (
              <Link
                href={`/user/me`}
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors font-medium"
              >
                <User className="h-4 w-4" />
                Meu Perfil
              </Link>
            )}
          </nav>

          {/* Área de autenticação (Desktop) */}
          <div className="hidden md:flex justify-self-end items-center gap-4">
            {session?.user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {session.user.image ? (
                    <Image
                      width={32}
                      height={32}
                      src={session.user.image}
                      alt="Avatar"
                      className="h-8 w-8 rounded-full border border-white/30"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-primary-foreground flex items-center justify-center text-sm font-bold text-white">
                      {session.user.name?.charAt(0) || 'U'}
                    </div>
                  )}
                  <span className="text-primary hidden lg:block">
                    {session.user.name}
                  </span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="flex items-center text-sm gap-1 text-gray-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-gray-800"
                >
                  <LogOut className="h-4 w-4" />
                  Sair
                </button>
              </div>
            ) : (
              <Link
                href="/api/auth/signin"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Entrar
              </Link>
            )}
          </div>

          {/* Botão menu mobile */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 animate-in slide-in-from-top">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/games/search"
              className="block text-gray-300 hover:text-white transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Search className="h-4 w-4 inline mr-2" />
              Buscar Jogos
            </Link>
            <Link
              href="/lists"
              className="block text-gray-300 hover:text-white transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <List className="h-4 w-4 inline mr-2" />
              Listas
            </Link>
            {session?.user && (
              <Link
                href={`/user/me`}
                className="block text-gray-300 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="h-4 w-4 inline mr-2" />
                Meu Perfil
              </Link>
            )}
            <div className="pt-2 border-t border-gray-700">
              {session?.user ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {session.user.image ? (
                      <Image
                        width={32}
                        height={32}
                        src={session.user.image}
                        alt="Avatar"
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold text-white">
                        {session.user.name?.charAt(0) || 'U'}
                      </div>
                    )}
                    <span className="text-sm text-gray-200">
                      {session.user.name}
                    </span>
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="text-xs text-gray-400 hover:text-white flex items-center gap-1"
                  >
                    <LogOut className="h-3 w-3" />
                    Sair
                  </button>
                </div>
              ) : (
                <Link
                  href="/api/auth/signin"
                  className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Entrar
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
