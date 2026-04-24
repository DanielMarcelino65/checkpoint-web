'use client';
import { GameCard } from '@/components/atoms/game-card';
import { ROCKSTAR_GAMES } from '@/mock/games';

export default function Home() {
  return (
    <main className="flex flex-1 w-full items-center justify-center bg-white dark:bg-black">
      <div className="flex flex-1 max-w-7xl flex-col items-center justify-center">
        {ROCKSTAR_GAMES.results.length > 0 && (
          <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ROCKSTAR_GAMES.results.map((game) => (
              <GameCard
                key={game.id}
                parentPlatforms={game.parent_platforms}
                coverUrl={game.background_image}
                name={game.name}
                likesCount={10}
                listsCount={120}
                playedCount={520}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
