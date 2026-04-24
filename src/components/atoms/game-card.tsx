import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Gamepad2, List, Heart } from 'lucide-react';

export interface GameCardProps {
  name: string;
  coverUrl: string;
  playedCount: number;
  listsCount: number;
  likesCount: number;
  likedByUser?: boolean;
  parentPlatforms?: { platform: { id: number; name: string; slug: string } }[];
}

export function GameCard({
  name,
  coverUrl,
  playedCount,
  listsCount,
  likesCount,
  likedByUser = false,
  parentPlatforms = [],
}: GameCardProps) {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toString();
  };

  const platformLabels: Record<string, string> = {
    pc: 'PC',
    playstation: 'PS',
    xbox: 'Xbox',
    nintendo: 'Nin',
    ios: 'iOS',
    android: 'And',
    mac: 'Mac',
  };

  return (
    <Card className="group w-full pt-0 max-w-96 overflow-hidden rounded-xl border-0 shadow-lg transition-all hover:shadow-xl">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={coverUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-black/60 to-transparent" />
      </div>
      <CardContent className="space-y-3 p-4">
        <h3 className="text-base font-semibold leading-tight text-foreground line-clamp-2">
          {name}
        </h3>
        {parentPlatforms.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {parentPlatforms.slice(0, 4).map((p) => (
              <Badge
                key={p.platform.id}
                variant="outline"
                className="rounded-md border-muted-foreground/30 px-1.5 py-0 text-[10px] font-medium text-muted-foreground"
              >
                {platformLabels[p.platform.slug] || p.platform.slug}
              </Badge>
            ))}
            {parentPlatforms.length > 4 && (
              <Badge
                variant="outline"
                className="rounded-md border-muted-foreground/30 px-1.5 py-0 text-[10px] font-medium text-muted-foreground"
              >
                +{parentPlatforms.length - 4}
              </Badge>
            )}
          </div>
        )}
        <div className="flex items-center justify-between pt-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Gamepad2 className="h-3.5 w-3.5" />
            <span>{formatNumber(playedCount)}</span>
          </div>
          <div className="flex items-center gap-1">
            <List className="h-3.5 w-3.5" />
            <span>{formatNumber(listsCount)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart
              className={`h-3.5 w-3.5 transition-all ${
                likedByUser ? 'fill-red-500 text-red-500' : ''
              }`}
            />
            <span>{formatNumber(likesCount)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
