import "./GameInfo.css";

const GameInfo = (props) => {
  const information = props.data;
  const aboutTheGame = information.short_description
    .split("<br />")
    .join("")
    .split("&quot;")
    .join("");
  let gameCategories = [];
  if (information.categories.length > 3) {
    gameCategories.push(information.categories[0]);
    gameCategories.push(information.categories[1]);
    gameCategories.push(information.categories[2]);
  } else {
    gameCategories = information.categories;
  }

  const gamePlatforms = [];
  if (information.platforms.windows) {
    gamePlatforms.push("Windows");
  }
  if (information.platforms.mac) {
    gamePlatforms.push("Mac");
  }
  if (information.platforms.linux) {
    gamePlatforms.push("Linux");
  }

  return (
    <div className="container bg-gray-700 mx-auto my-8 pt-8 pb-8 ">
      <div className="mb-6 space-y-6 text-center lg:text-left lg:grid lg:grid-cols-10 ">
        <h1 className="font-bold text-7xl lg:col-span-8">{information.name}</h1>
        <p className="italic lg:col-span-5">{aboutTheGame}</p>
      </div>
      <div className="container mx-auto mt-16 grid grid-cols-11">
        <div className="col-span-6">
          <img
            className="h-auto w-full"
            src={information.header_image}
            alt="GameImage"
          />
          <ul className="space-x-1 lg:space-x-12 space-y-4 mt-2 text-center">
            {information.genres.map((el) => {
              return (
                <li
                  key={el.id}
                  className="inline-block font-bold list-category"
                >
                  {el.description}
                </li>
              );
            })}
            {gameCategories.map((el) => {
              return (
                <li
                  key={el.id}
                  className="inline-block font-bold list-category"
                >
                  {el.description}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="ml-3 sm:ml-12 lg:ml-24 col-span-5 grid grid-cols-2">
          <div className="col-span-1 space-y-6 lg:space-y-12">
            <p className="text-xs sm:text-base font-bold">App Type</p>
            <p className="text-xs sm:text-base font-bold">Developers</p>
            <p className="text-xs sm:text-base font-bold">Platforms</p>
            <p className="text-xs sm:text-base font-bold">Release Date</p>
            <p className="text-xs sm:text-base font-bold">Recommend</p>
            <p className="text-xs sm:text-base font-bold">
              Score In Metacritic
            </p>
          </div>
          <div className="col-span-1 space-y-6 lg:space-y-12">
            <p className="text-xs font-bold">
              {information.type.replace(/^\w/, (c) => c.toUpperCase())}
            </p>
            <p className="text-xs sm:text-base font-bold">
              {information.developers.join(", ")}
            </p>
            <p className="text-xs sm:text-base font-bold">
              {gamePlatforms.join(", ")}
            </p>
            <p className="text-xs sm:text-base font-bold">
              {information.release_date.date}
            </p>
            <p className="text-xs sm:text-base font-bold">
              {information.recommendations.total}
            </p>
            <p className="text-xs sm:text-base font-bold">
              {information.metacritic.score}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
