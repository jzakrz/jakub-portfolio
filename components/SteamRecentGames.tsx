type SteamGame = {
  appid: number;
  name: string;
  playtime_2weeks?: number;
  playtime_forever: number;
};

type SteamResponse = {
  response?: {
    games?: SteamGame[];
  };
};

const gamingPreferences = [
  { label: "Long-form worlds", genre: "RPG" },
  { label: "Systems & trade-offs", genre: "Strategy" },
  { label: "Shared problem-solving", genre: "Co-op" },
];

function formatPlaytime(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  return `${Math.round(minutes / 60)} hrs`;
}

async function getRecentGames() {
  const apiKey =\n    process.env.STEAM_API_KEY ?? process.env.STEAM_WEB_API_KEY;
  const steamId = process.env.STEAM_ID;

  if (!apiKey || !steamId) return null;

  const params = new URLSearchParams({
    key: apiKey,
    steamid: steamId,
    count: "3",
    format: "json",
  });

  try {
    const response = await fetch(
      `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?${params}`,
      { next: { revalidate: 21600 } },
    );

    if (!response.ok) return null;

    const data = (await response.json()) as SteamResponse;
    return data.response?.games?.slice(0, 3) ?? null;
  } catch {
    return null;
  }
}

export default async function SteamRecentGames() {
  const games = await getRecentGames();

  if (!games?.length) {
    return (
      <div className="steam-shelf steam-shelf--fallback">
        <div className="steam-shelf__header">
          <p>My gaming shelf</p>
          <span>03 modes</span>
        </div>
        <div className="steam-shelf__list">
          {gamingPreferences.map((preference, index) => (
            <article key={preference.genre}>
              <span>0{index + 1}</span>
              <div>
                <p>{preference.genre}</p>
                <strong>{preference.label}</strong>
              </div>
              <span aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
        <p className="steam-shelf__note">
          Three kinds of play I keep returning to.
        </p>
      </div>
    );
  }

  return (
    <div className="steam-shelf">
      <div className="steam-shelf__header">
        <p>Recently played</p>
        <span>Live from Steam</span>
      </div>
      <div className="steam-shelf__list">
        {games.map((game, index) => (
          <article key={game.appid}>
            <span>0{index + 1}</span>
            <div>
              <p>{game.name}</p>
              <strong>
                {game.playtime_2weeks
                  ? `${formatPlaytime(game.playtime_2weeks)} recently`
                  : `${formatPlaytime(game.playtime_forever)} total`}
              </strong>
            </div>
            <a
              href={`https://store.steampowered.com/app/${game.appid}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${game.name} on Steam`}
            >
              ↗
            </a>
          </article>
        ))}
      </div>
      <p className="steam-shelf__note">Updated every six hours.</p>
    </div>
  );
}
