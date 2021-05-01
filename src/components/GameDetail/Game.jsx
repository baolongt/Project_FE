import { Fragment } from "react";
import GameInfo from "./GameInfoComponent/GameInfo";
import GamePrices from "./GamePricesComponent/GamePrices";

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

  const detail = {
    message: "Successfully",
    data: {
      name: "PLAYERUNKNOWN'S BATTLEGROUNDS",
      short_description:
        "PLAYERUNKNOWN'S BATTLEGROUNDS is a battle royale shooter that pits 100 players against each other in a struggle for survival. Gather supplies and outwit your opponents to become the last person standing.",
      header_image:
        "https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg?t=1619690452",
      website: "http://www.pubg.com",
      price_overview: {
        currency: "VND",
        initial: 34000000,
        final: 17000000,
        discount_percent: 50,
        initial_formatted: "340.000₫",
        final_formatted: "170.000₫",
      },
      price_countries: [
        {
          id: "us",
          name: "U.S. Dollar",
          current_price: "$14.99 at -50%",
          converted_price: "345742,28₫",
          lowest_price: "345742,28₫",
        },
        {
          id: "uk",
          name: "British Pound",
          current_price: "£13.49 at -50%",
          converted_price: "431755,44₫",
          lowest_price: "431755,44₫",
        },
        {
          id: "eu",
          name: "Euro",
          current_price: "14,99€ at -50%",
          converted_price: "417482,98₫",
          lowest_price: "417482,98₫",
        },
        {
          id: "ru",
          name: "Russian Ruble",
          current_price: "474 ₽ at -50%",
          converted_price: "145617,32₫",
          lowest_price: "145617,32₫",
        },
        {
          id: "br",
          name: "Brazilian Real",
          current_price: "R$ 37,50 at -50%",
          converted_price: "160612,85₫",
          lowest_price: "119924,26₫",
        },
        {
          id: "jp",
          name: "Japanese Yen",
          current_price: "¥ 1650 at -50%",
          converted_price: "349113,36₫",
          lowest_price: "349113,36₫",
        },
        {
          id: "id",
          name: "Indonesian Rupiah",
          current_price: "Rp 109999 at -50%",
          converted_price: "176044,86₫",
          lowest_price: "176044,86₫",
        },
        {
          id: "my",
          name: "Malaysian Ringgit",
          current_price: "RM37.49 at -50%",
          converted_price: "211134,58₫",
          lowest_price: "211134,58₫",
        },
        {
          id: "ph",
          name: "Philippine Peso",
          current_price: "₱379.97 at -50%",
          converted_price: "181711,71₫",
          lowest_price: "181711,71₫",
        },
        {
          id: "sg",
          name: "Singapore Dollar",
          current_price: "S$17.49 at -50%",
          converted_price: "303727,24₫",
          lowest_price: "303727,24₫",
        },
        {
          id: "th",
          name: "Thai Baht",
          current_price: "฿279.50 at -50%",
          converted_price: "206821,59₫",
          lowest_price: "206451,60₫",
        },
        {
          id: "vn",
          name: "Vietnamese Dong",
          current_price: "170000₫ at -50%",
          converted_price: "170000₫",
          lowest_price: "170000₫ at -50%",
        },
        {
          id: "kr",
          name: "South Korean Won",
          current_price: "₩ 16000 at -50%",
          converted_price: "331013,95₫",
          lowest_price: "331013,95₫",
        },
        {
          id: "tr",
          name: "Turkish Lira",
          current_price: "₺43,50 at -50%",
          converted_price: "121092,78₫",
          lowest_price: "121092,78₫",
        },
        {
          id: "ua",
          name: "Ukrainian Hryvnia",
          current_price: "236₴ at -50%",
          converted_price: "196145,23₫",
          lowest_price: "196145,23₫",
        },
        {
          id: "mx",
          name: "Mexican Peso",
          current_price: "Mex$ 150.00 at -50%",
          converted_price: "171831,98₫",
          lowest_price: "171831,98₫",
        },
        {
          id: "ca",
          name: "Canadian Dollar",
          current_price: "CDN$ 18.49 at -50%",
          converted_price: "347359,27₫",
          lowest_price: "347359,27₫",
        },
        {
          id: "au",
          name: "Australian Dollar",
          current_price: "A$ 21.47 at -50%",
          converted_price: "384091,46₫",
          lowest_price: "383733,67₫",
        },
        {
          id: "nz",
          name: "New Zealand Dollar",
          current_price: "NZ$ 19.99 at -50%",
          converted_price: "332709,33₫",
          lowest_price: "332709,33₫",
        },
        {
          id: "no",
          name: "Norwegian Krone",
          current_price: "129,50 kr at -50%",
          converted_price: "361693,90₫",
          lowest_price: "360297,39₫",
        },
        {
          id: "pl",
          name: "Polish Zloty",
          current_price: "36,49zł at -50%",
          converted_price: "223051,54₫",
          lowest_price: "223051,54₫",
        },
        {
          id: "ch",
          name: "Swiss Franc",
          current_price: "CHF 15.99 at -50%",
          converted_price: "405083,15₫",
          lowest_price: "405083,15₫",
        },
        {
          id: "cn",
          name: "Chinese Yuan",
          current_price: "¥ 49 at -50%",
          converted_price: "174758,12₫",
          lowest_price: "174758,12₫",
        },
        {
          id: "in",
          name: "Indian Rupee",
          current_price: "₹ 499 at -50%",
          converted_price: "155594,95₫",
          lowest_price: "155594,95₫",
        },
        {
          id: "cl",
          name: "Chilean Peso",
          current_price: "CLP$ 5200 at -50%",
          converted_price: "168688,15₫",
          lowest_price: "168688,15₫",
        },
        {
          id: "pe",
          name: "Peruvian Sol",
          current_price: "S/.26.00 at -50%",
          converted_price: "158443,86₫",
          lowest_price: "134067,88₫",
        },
        {
          id: "co",
          name: "Colombian Peso",
          current_price: "COL$ 24500 at -50%",
          converted_price: "151830,12₫",
          lowest_price: "151830,12₫",
        },
        {
          id: "za",
          name: "South African Rand",
          current_price: "R 159.50 at -50%",
          converted_price: "254627,38₫",
          lowest_price: "254627,38₫",
        },
        {
          id: "hk",
          name: "Hong Kong Dollar",
          current_price: "HK$ 94.00 at -50%",
          converted_price: "279200,99₫",
          lowest_price: "279200,99₫",
        },
        {
          id: "tw",
          name: "Taiwan Dollar",
          current_price: "NT$ 399 at -50%",
          converted_price: "329601,88₫",
          lowest_price: "329601,88₫",
        },
        {
          id: "sa",
          name: "Saudi Riyal",
          current_price: "60.00 SR at -50%",
          converted_price: "368998,53₫",
          lowest_price: "368998,53₫",
        },
        {
          id: "ae",
          name: "U.A.E. Dirham",
          current_price: "60.00 AED at -50%",
          converted_price: "376774,84₫",
          lowest_price: "376774,84₫",
        },
        {
          id: "ar",
          name: "Argentine Peso",
          current_price: "ARS$ 499,50 at -50%",
          converted_price: "123144,15₫",
          lowest_price: "58140,31₫",
        },
        {
          id: "il",
          name: "Israeli New Shekel",
          current_price: "₪44.12 at -50%",
          converted_price: "313565,14₫",
          lowest_price: "313565,14₫",
        },
        {
          id: "kz",
          name: "Kazakhstani Tenge",
          current_price: "2950₸ at -50%",
          converted_price: "158246,29₫",
          lowest_price: "158246,29₫",
        },
        {
          id: "kw",
          name: "Kuwaiti Dinar",
          current_price: "4.52 KD at -50%",
          converted_price: "346234,14₫",
          lowest_price: "346234,14₫",
        },
        {
          id: "qa",
          name: "Qatari Riyal",
          current_price: "55.67 QR at -50%",
          converted_price: "352656,11₫",
          lowest_price: "352656,11₫",
        },
        {
          id: "cr",
          name: "Costa Rican Colon",
          current_price: "₡4500 at -50%",
          converted_price: "168074,73₫",
          lowest_price: "140062,28₫",
        },
        {
          id: "uy",
          name: "Uruguayan Peso",
          current_price: "$U275 at -50%",
          converted_price: "144264,68₫",
          lowest_price: "130625,11₫",
        },
        {
          id: "az",
          name: "CIS - U.S. Dollar",
          current_price: "$8.99 at -50%",
          converted_price: "207353,11₫",
          lowest_price: "207353,11₫",
        },
        {
          id: "pk",
          name: "South Asia - USD",
          current_price: "$14.99 at -50%",
          converted_price: "345742,28₫",
          lowest_price: "241950,40₫",
        },
      ],
      platforms: { windows: true, mac: false, linux: false },
      categories: [
        "Multi-player",
        "PvP",
        "Online PvP",
        "Stats",
        "Remote Play on Phone",
        "Remote Play on Tablet",
      ],
      recommendations: { total: 1425290 },
      release_date: { coming_soon: false, date: "21 Dec, 2017" },
    },
  };

  return (
    <Fragment>
      <GameInfo key={data.steam_appid} data={data} />
      <GamePrices gamePrices={detail} />
    </Fragment>
  );
};

export default Game;
