import { Fragment } from "react";
import GameInfo from "./GameInfo";

const Game = () => {
  const data = {
    type: "game",
    name: "Dota 2",
    steam_appid: 570,
    short_description:
      "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.",
    developers: ["Valve"],
    header_image:
      "https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg?t=1618283868",
    platforms: {
      windows: true,
      mac: true,
      linux: true,
    },
    metacritic: {
      score: 90,
      url:
        "https://www.metacritic.com/game/pc/counter-strike-global-offensive?ftag=MCD-06-10aaa1f",
    },
    categories: [
      {
        id: 1,
        description: "Multi-player",
      },
      {
        id: 9,
        description: "Co-op",
      },
      {
        id: 29,
        description: "Steam Trading Cards",
      },
      {
        id: 30,
        description: "Steam Workshop",
      },
      {
        id: 40,
        description: "SteamVR Collectibles",
      },
      {
        id: 35,
        description: "In-App Purchases",
      },
      {
        id: 8,
        description: "Valve Anti-Cheat enabled",
      },
    ],
    genres: [
      {
        id: "1",
        description: "Action",
      },
      {
        id: "37",
        description: "Free to Play",
      },
      {
        id: "2",
        description: "Strategy",
      },
    ],
    release_date: {
      coming_soon: false,
      date: "22 Aug, 2012",
    },
    recommendations: {
      total: 3057769,
    },
  };

  return (
    <Fragment>
      <GameInfo key={data.steam_appid} data={data} />
    </Fragment>
  );
};

export default Game;
