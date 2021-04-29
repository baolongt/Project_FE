import { Fragment } from "react";
import GameInfo from "./GameInfo";

const Game = () => {
  const data = {
    type: "game",
    name: "Counter-Strike: Global Offensive",
    about_the_game:
      "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.). Counter-Strike took the gaming industry by surprise when the unlikely MOD became the most played online PC action game in the world almost immediately after its release in August 1999,&quot; said Doug Lombardi at Valve. &quot;For the past 12 years, it has continued to be one of the most-played games in the world, headline competitive gaming tournaments and selling over 25 million units worldwide across the franchise. CS: GO promises to expand on CS' award-winning gameplay and deliver it to gamers on the PC as well as the next gen consoles and the Mac.&quot;",
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
      total: 3057769,
    },
  };

  return (
    <Fragment>
      <GameInfo data={data} />
    </Fragment>
  );
};

export default Game;
