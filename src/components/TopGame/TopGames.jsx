import TopGameTable from "./TopGameTable";

const TopGames = (props) => {
  const data = {
    most_played_games: [
      {
        appid: 730,
        name: "Counter-Strike: Global Offensive",
        players_now: "478,578",
        peak_today: "988,108",
      },
      {
        appid: 570,
        name: "Dota 2",
        players_now: "314,431",
        peak_today: "611,023",
      },
      {
        appid: 1172470,
        name: "Apex Legends",
        players_now: "118,629",
        peak_today: "205,994",
      },
      {
        appid: 440,
        name: "Team Fortress 2",
        players_now: "73,897",
        peak_today: "84,047",
      },
      {
        appid: 271590,
        name: "Grand Theft Auto V",
        players_now: "71,799",
        peak_today: "134,187",
      },
      {
        appid: 252490,
        name: "Rust",
        players_now: "49,652",
        peak_today: "90,255",
      },
      {
        appid: 359550,
        name: "Tom Clancy's Rainbow Six Siege",
        players_now: "49,337",
        peak_today: "90,840",
      },
      {
        appid: 230410,
        name: "Warframe",
        players_now: "44,862",
        peak_today: "71,839",
      },
      {
        appid: 1085660,
        name: "Destiny 2",
        players_now: "40,263",
        peak_today: "48,269",
      },
      {
        appid: 252950,
        name: "Rocket League",
        players_now: "40,154",
        peak_today: "81,167",
      },
      {
        appid: 238960,
        name: "Path of Exile",
        players_now: "39,422",
        peak_today: "82,965",
      },
      {
        appid: 892970,
        name: "Valheim",
        players_now: "39,147",
        peak_today: "64,752",
      },
      {
        appid: 431960,
        name: "Wallpaper Engine",
        players_now: "35,539",
        peak_today: "51,607",
      },
      {
        appid: 346110,
        name: "ARK: Survival Evolved",
        players_now: "35,047",
        peak_today: "56,899",
      },
      {
        appid: 381210,
        name: "Dead by Daylight",
        players_now: "31,902",
        peak_today: "45,483",
      },
    ],
    trending_games: [
      {
        appid: 1183940,
        name: "Scavengers",
        players_now: "8,663",
      },
      {
        appid: 885970,
        name: "Total War: ROME REMASTERED",
        players_now: "4,927",
      },
      {
        appid: 1541780,
        name: "Resident Evil Village Gameplay Demo",
        players_now: "4,116",
      },
      {
        appid: 678960,
        name: "CODE VEIN",
        players_now: "2,250",
      },
      {
        appid: 1407200,
        name: "World of Tanks",
        players_now: "1,683",
      },
      {
        appid: 621060,
        name: "PC Building Simulator",
        players_now: "1,864",
      },
      {
        appid: 829590,
        name: "CryoFall",
        players_now: "1,899",
      },
      {
        appid: 826630,
        name: "Iron Harvest",
        players_now: "1,366",
      },
      {
        appid: 502500,
        name: "ACE COMBAT™ 7: SKIES UNKNOWN",
        players_now: "1,952",
      },
      {
        appid: 978520,
        name: "Legend of Keepers",
        players_now: "1,518",
      },
      {
        appid: 424840,
        name: "Little Nightmares",
        players_now: "1,734",
      },
      {
        appid: 349040,
        name: "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
        players_now: "3,362",
      },
      {
        appid: 493520,
        name: "GTFO",
        players_now: "3,072",
      },
      {
        appid: 633230,
        name: "NARUTO TO BORUTO: SHINOBI STRIKER",
        players_now: "2,203",
      },
      {
        appid: 1566410,
        name: "東方虹龍洞 ～ Unconnected Marketeers.",
        players_now: "2,219",
      },
    ],
    popular_releases: [
      {
        appid: 1183940,
        name: "Scavengers",
        peak_today: "13,784",
        price: "Free",
      },
      {
        appid: 885970,
        name: "Total War: ROME REMASTERED",
        peak_today: "11,304",
        price: "530000₫",
      },
      {
        appid: 1541780,
        name: "Resident Evil Village Gameplay Demo",
        peak_today: "5,831",
        price: "Free",
      },
      {
        appid: 1407200,
        name: "World of Tanks",
        peak_today: "3,491",
        price: "Free",
      },
      {
        appid: 1566410,
        name: "東方虹龍洞 ～ Unconnected Marketeers.",
        peak_today: "3,416",
        price: "165000₫",
      },
      {
        appid: 829590,
        name: "CryoFall",
        peak_today: "3,073",
        price: "122000₫",
      },
      {
        appid: 978520,
        name: "Legend of Keepers",
        peak_today: "2,783",
        price: "169000₫",
      },
      {
        appid: 1442820,
        name: "R-Type Final 2",
        peak_today: "572",
        price: "310000₫",
      },
      {
        appid: 1291010,
        name: "Warpips",
        peak_today: "505",
        price: "111000₫",
      },
      {
        appid: 1528080,
        name: "Gas Station Simulator: Prologue - Early Days",
        peak_today: "459",
        price: "Free",
      },
      {
        appid: 1556200,
        name: "Predator: Hunting Grounds",
        peak_today: "230",
        price: "749000₫",
      },
      {
        appid: 1568590,
        name: "Goose Goose Duck",
        peak_today: "203",
        price: "Free",
      },
      {
        appid: 1540220,
        name: "Sugar * Style",
        peak_today: "175",
        price: "225000₫",
      },
      {
        appid: 1385100,
        name: "Insurmountable",
        peak_today: "151",
        price: "169000₫",
      },
      {
        appid: 1597400,
        name: "LOST EGG 2: Be together",
        peak_today: "88",
        price: "38500₫",
      },
    ],
    hot_releases: [
      {
        appid: 1566410,
        name: "東方虹龍洞 ～ Unconnected Marketeers.",
        rating: "89.01%",
        price: "165000₫",
      },
      {
        appid: 1141550,
        name: "CUCKOLD SIMULATOR: Life as a Beta Male Cuck",
        rating: "88.73%",
        price: "30000₫",
      },
      {
        appid: 1495420,
        name: "Dragon Creek",
        rating: "84.95%",
        price: "140000₫",
      },
      {
        appid: 1385100,
        name: "Insurmountable",
        rating: "84.60%",
        price: "169000₫",
      },
      {
        appid: 1528080,
        name: "Gas Station Simulator: Prologue - Early Days",
        rating: "84.59%",
        price: "Free",
      },
      {
        appid: 442210,
        name: "Switchcars",
        rating: "84.29%",
        price: "99000₫",
      },
      {
        appid: 1294060,
        name: "铁道少女：梦想轨迹",
        rating: "83.27%",
        price: "90000₫",
      },
      {
        appid: 1571140,
        name: "东方十昊狱 ~ Hella Dazzling Hell!!",
        rating: "83.00%",
        price: "119500₫",
      },
      {
        appid: 978520,
        name: "Legend of Keepers",
        rating: "82.20%",
        price: "169000₫",
      },
      {
        appid: 1540220,
        name: "Sugar * Style",
        rating: "82.04%",
        price: "225000₫",
      },
      {
        appid: 1564560,
        name: "Island Farmer",
        rating: "81.66%",
        price: "21000₫",
      },
      {
        appid: 1567740,
        name: "To Hell With It",
        rating: "81.42%",
        price: "Free",
      },
      {
        appid: 1593860,
        name: "Girl Jigsaw",
        rating: "81.00%",
        price: "10500₫",
      },
      {
        appid: 843180,
        name: "Clan O'Conall",
        rating: "80.79%",
        price: "165000₫",
      },
      {
        appid: 1410260,
        name: "The Last King's Archer",
        rating: "80.28%",
        price: "12000₫",
      },
    ],
  };
  return (
    <div className="grid grid-cols-12 mx-5 ">
      <div className="col-start-2 col-end-6">
        <TopGameTable type="Most Played Games" data={data.most_played_games} />
      </div>
      <div className="col-start-7 col-end-11">
        <TopGameTable type="Trending Games" data={data.trending_games} />
      </div>
      <div className="col-start-2 col-end-6">
        <TopGameTable type="Popular Releases" data={data.popular_releases} />
      </div>
      <div className="col-start-7 col-end-11">
        <TopGameTable type="Hot Releases" data={data.hot_releases} />
      </div>
    </div>
  );
};

export default TopGames;
