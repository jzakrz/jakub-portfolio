"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

export type SteamGamePreview = {
  appid: number;
  name: string;
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

function getFallbackUrl(appid: number) {
  return `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appid}/header.jpg`;
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
  const content = (
    <>
      <Image
        src={getCoverUrl(game.appid)}
        alt={duplicate ? "" : `${game.name} cover`}
        fill
        sizes="(max-width: 760px) 138px, 176px"
        priority={priority}
        unoptimized
        onError={(event) => {
          const image = event.currentTarget;
          if (image.dataset.fallbackApplied) return;
          image.dataset.fallbackApplied = "true";
          image.src = getFallbackUrl(game.appid);
        }}
      />
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
  const [isPaused, setIsPaused] = useState(false);
  const duration = Math.max(34, games.length * 4.2);
  const trackStyle = {
    "--steam-carousel-duration": `${duration}s`,
  } as CSSProperties;

  return (
    <section
      className={`steam-shelf steam-carousel${isPaused ? " is-paused" : ""}`}
      aria-label="Recently played Steam games"
    >
      <div className="steam-shelf__header steam-carousel__header">
        <p>Recent rotation</p>
        <div>
          <span>{String(games.length).padStart(2, "0")} games</span>
          <button
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-pressed={isPaused}
          >
            {isPaused ? "Play" : "Pause"}
          </button>
        </div>
      </div>

      <div className="steam-carousel__viewport">
        <div className="steam-carousel__track" style={trackStyle}>
          <div className="steam-carousel__group">
            {games.map((game, index) => (
              <GameCover
                key={game.appid}
                game={game}
                priority={index < 2}
              />
            ))}
          </div>
          <div className="steam-carousel__group" aria-hidden="true">
            {games.map((game) => (
              <GameCover key={`duplicate-${game.appid}`} game={game} duplicate />
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
