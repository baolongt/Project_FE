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
      <div className="mb-6 space-y-6 text-center lg:ml-8 lg:text-left lg:grid lg:grid-cols-10 ">
        <h1 className="font-bold text-5xl md:text-7xl lg:col-span-8">
          {information.name}
        </h1>
        <p className="italic text-justify text-sm md:text-base lg:col-span-6">
          {aboutTheGame}
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-11 md:mt-16 lg:ml-8">
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
                  className="text-sm md:text-base inline-block font-bold list-category"
                >
                  {el.description}
                </li>
              );
            })}
            {gameCategories.map((el) => {
              return (
                <li
                  key={el.id}
                  className="text-sm md:text-base inline-block font-bold list-category"
                >
                  {el.description}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="ml-2 sm:ml-4 lg:ml-16 col-span-5">
          <table class="table-auto">
            <tbody>
              <tr>
                <td className="w-screen font-bold text-xs pb-3 sm:pb-6 md:text-base lg:pb-12 xl:text-lg">
                  App Type
                </td>
                <td className="w-screen font-bold text-xs pb-3 sm:pb-6 md:text-base lg:pb-12 xl:text-lg">
                  {information.type.replace(/^\w/, (c) => c.toUpperCase())}
                </td>
              </tr>
              <tr>
                <td className="w-screen font-bold text-xs pb-3 sm:pb-6 md:text-base lg:pb-12 xl:text-lg">
                  Developers
                </td>
                <td className="w-screen font-bold text-xs pb-3 sm:pb-6 md:text-base lg:pb-12 xl:text-lg">
                  {information.developers.join(", ")}
                </td>
              </tr>
              <tr>
                <td className="w-screen font-bold text-xs pb-3 sm:pb-6 md:text-base lg:pb-12 xl:text-lg">
                  Platforms
                </td>
                <td className="w-screen font-bold text-xs pb-3 sm:pb-6 md:text-base lg:pb-12 xl:text-lg">
                  {gamePlatforms.join(", ")}
                </td>
              </tr>
              <tr>
                <td className="w-screen font-bold text-xs pb-3 sm:pb-6 md:text-base lg:pb-12 xl:text-lg">
                  Release Date
                </td>
                <td className="w-screen font-bold text-xs pb-3 sm:pb-6 md:text-base lg:pb-12 xl:text-lg">
                  {information.release_date.date}
                </td>
              </tr>
              <tr>
                <td className="w-screen font-bold text-xs pb-3 sm:pb-6 md:text-base lg:pb-12 xl:text-lg ">
                  Recommend
                </td>
                <td className="w-screen font-bold text-xs pb-3 sm:pb-6 md:text-base lg:pb-12 xl:text-lg">
                  {information.recommendations.total}
                </td>
              </tr>
              <tr>
                <td className="w-screen font-bold text-xs pb-3 sm:pb-6 md:text-base ">
                  Score In Metacritic
                </td>
                <td className="w-screen font-bold text-xs pb-3 sm:pb-6 md:text-base ">
                  {information.metacritic.score}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
