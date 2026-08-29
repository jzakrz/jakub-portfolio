import SteamGameCarousel from "@/components/SteamGameCarousel";

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

type SteamResult =
  | { games: SteamGame[]; diagnostic: null }
  | { games: null; diagnostic: string };

const gamingPreferences = [
  { label: "Long-form worlds", genre: "RPG" },
  { label: "Systems & trade-offs", genre: "Strategy" },
  { label: "Shared problem-solving", genre: "Co-op" },
];

async function getRecentGames(): Promise<SteamResult> {
  const apiKey =
    process.env.STEAM_API_KEY ?? process.env.STEAM_WEB_API_KEY;
  const steamId = process.env.STEAM_ID;

  const missingVariables = [
    !apiKey ? "STEAM_API_KEY" : null,
    !steamId ? "STEAM_ID" : null,
  ].filter(Boolean);

  if (!apiKey || !steamId) {
    return {
      games: null,
      diagnostic: `Preview diagnostic: missing ${missingVariables.join(" and ")}.`,
    };
  }

  const params = new URLSearchParams({
    key: apiKey,
    steamid: steamId,
    count: "10",
    format: "json",
  });

  try {
    const response = await fetch(
      `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?${params}`,
      { next: { revalidate: 21600 } },
    );

    if (!response.ok) {
      return {
        games: null,
        diagnostic: `Preview diagnostic: Steam API returned ${response.status}.`,
      };
    }

    const data = (await response.json()) as SteamResponse;
    const games = data.response?.games?.slice(0, 10);

    if (!games?.length) {
      return {
        games: null,
        diagnostic: "Preview diagnostic: Steam returned no recently played games.",
      };
    }

    return { games, diagnostic: null };
  } catch {
    return {
      games: null,
      diagnostic: "Preview diagnostic: Steam could not be reached during deployment.",
    };
  }
}

export default async function SteamRecentGames() {
  const { games, diagnostic } = await getRecentGames();
  const previewDiagnostic =
    process.env.VERCEL_ENV === "preview" ? diagnostic : null;

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
          {previewDiagnostic ?? "Three kinds of play I keep returning to."}
        </p>
      </div>
    );
  }

  return <SteamGameCarousel games={games} />;
}
