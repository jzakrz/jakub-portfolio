"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

export type SteamGamePreview = {
  appid: number;
  name: string;
  img_icon_url?: string;
  playtime_2weeks?: number;
  playtime_forever: number;
};

type SteamGameCarouselProps = {
  games: SteamGamePreview[];
};

function formatPlaytime(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  return `${Math.round(minutes / 60)} hrs`;
}

function getPlaytimeLabel(game: SteamGamePreview) {
  return game.playtime_2weeks
    ? `${formatPlaytime(game.playtime_2weeks)} recently`
    : `${formatPlaytime(game.playtime_forever)} total`;
}

function getCoverUrl(appid: number) {
  return `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appid}/library_600x900.jpg`;
}

function getHeaderUrl(appid: number) {
  return `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appid}/header.jpg`;
}

function getIconUrl(game: SteamGamePreview) {
  if (!game.img_icon_url) return null;
  return `https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`;
}

function GameCover({
  game,
  duplicate = false,
  priority = false,
}: {
  game: SteamGamePreview;
  duplicate?: boolean;
  priority?: boolean;
}) {
  const imageSources = [
    getCoverUrl(game.appid),
    getHeaderUrl(game.appid),
    getIconUrl(game),
  ].filter((source): source is string => Boolean(source));
  const [imageIndex, setImageIndex] = useState(0);
  const imageSource = imageSources[imageIndex];
  const isIcon = imageSource === getIconUrl(game);

  const content = (
    <>
      {imageSource ? (
        <Image
          key={imageSource}
          className={isIcon ? "steam-game-card__image--icon" : undefined}
          src={imageSource}
          alt={duplicate ? "" : `${game.name} cover`}
          fill
          sizes="(max-width: 760px) 138px, 176px"
          priority={priority && imageIndex === 0}
          unoptimized
          onError={() => setImageIndex((index) => index + 1)}
        />
      ) : (
        <span className="steam-game-card__placeholder" aria-hidden="true">
          {game.name.slice(0, 2)}
        </span>
      )}
      <span className="steam-game-card__scrim" aria-hidden="true" />
      <span className="steam-game-card__copy">
        <strong>{game.name}</strong>
        <small>{getPlaytimeLabel(game)}</small>
      </span>
    </>
  );

  if (duplicate) {
    return (
      <article className="steam-game-card" aria-hidden="true">
        {content}
      </article>
    );
  }

  return (
    <a
      className="steam-game-card"
      href={`https://store.steampowered.com/app/${game.appid}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${game.name} on Steam`}
    >
      {content}
    </a>
  );
}

export default function SteamGameCarousel({ games }: SteamGameCarouselProps) {
  const loopGames = Array.from(
    { length: Math.max(6, games.length) },
    (_, index) => ({
      game: games[index % games.length],
      isVisualRepeat: index >= games.length,
    }),
  );
  const duration = Math.max(34, loopGames.length * 4.2);
  const trackStyle = {
    "--steam-carousel-duration": `${duration}s`,
  } as CSSProperties;

  return (
    <section
      className="steam-shelf steam-carousel"
      aria-label="Recently played Steam games"
    >
      <div className="steam-shelf__header steam-carousel__header">
        <p>Recent rotation</p>
        <span>{String(games.length).padStart(2, "0")} games</span>
      </div>

      <div className="steam-carousel__viewport">
        <div className="steam-carousel__track" style={trackStyle}>
          <div className="steam-carousel__group">
            {loopGames.map(({ game, isVisualRepeat }, index) => (
              <GameCover
                key={`${game.appid}-${index}`}
                game={game}
                duplicate={isVisualRepeat}
                priority={!isVisualRepeat && index < 2}
              />
            ))}
          </div>
          <div className="steam-carousel__group" aria-hidden="true">
            {loopGames.map(({ game }, index) => (
              <GameCover
                key={`duplicate-${game.appid}-${index}`}
                game={game}
                duplicate
              />
            ))}
          </div>
        </div>
      </div>

      <div className="steam-shelf__note steam-carousel__note">
        <span>Live from Steam</span>
        <span>Updated every six hours</span>
      </div>
    </section>
  );
}
