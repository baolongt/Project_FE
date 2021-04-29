import { Fragment } from "react";
import GameInfo from "./GameInfo";

const Game = () => {
  const data = {
    type: "game",
    name: "Counter-Strike: Global Offensive",
    steam_appid: 730,
    short_description:
      "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).",
    developers: ["Valve", "Hidden Path Entertainment"],
    header_image:
      "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1612812939",
    platforms: {
      windows: true,
      mac: true,
      linux: true,
    },
    metacritic: {
      score: 83,
      url:
        "https://www.metacritic.com/game/pc/counter-strike-global-offensive?ftag=MCD-06-10aaa1f",
    },
    categories: [
      {
        id: 1,
        description: "Multi-player",
      },
      {
        id: 22,
        description: "Steam Achievements",
      },
      {
        id: 28,
        description: "Full controller support",
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
        id: 35,
        description: "In-App Purchases",
      },
      {
        id: 8,
        description: "Valve Anti-Cheat enabled",
      },
      {
        id: 15,
        description: "Stats",
      },
      {
        id: 41,
        description: "Remote Play on Phone",
      },
      {
        id: 42,
        description: "Remote Play on Tablet",
      },
      {
        id: 43,
        description: "Remote Play on TV",
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
    ],
    release_date: {
      coming_soon: false,
      date: "22 Aug, 2012",
    },
    recommendations: {
      total: 3058047,
    },
  };

  return (
    <Fragment>
      <GameInfo key={data.steam_appid} data={data} />
    </Fragment>
  );
};

export default Game;
