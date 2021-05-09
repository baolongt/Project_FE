import "./GameInfo.css";
import logo from "../../../images/SteamLogo.png"

const GameInfo = (props) => {
  const information = props.data;

  let aboutTheGame = "";
  if (information.short_description) {
    aboutTheGame = information.short_description
      .split("<br />")
      .join("")
      .split("&quot;")
      .join("");
  }

  const gamePlatforms = [];
  if (information.platforms) {
    if (information.platforms.windows) {
      gamePlatforms.push("Windows");
    }
    if (information.platforms.mac) {
      gamePlatforms.push("Mac");
    }
    if (information.platforms.linux) {
      gamePlatforms.push("Linux");
    }
  }

  return (
    <div className="container bg-gray-700 rounded-lg mx-auto my-8 pt-8 pb-8 ">
      <div className="mb-6 space-y-6 text-center lg:ml-8 lg:text-left lg:grid lg:grid-cols-10 ">
        <h1 className="font-bold text-3xl md:text-7xl lg:col-span-7">
          {information.name}
        </h1>
        <p className="italic text-justify text-xs md:text-base lg:col-span-6">
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
            {information.categories.map((el, index) => {
              return (
                <li
                  key={`category${index}`}
                  className="text-sm md:text-base inline-block font-bold list-category"
                >
                  {el}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-5 ml-2 sm:ml-4 lg:ml-16 lg:mr-16">
          <table className="table-auto">
            <tbody>
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
                  {information.release_date
                    ? information.release_date.date
                    : "none"}
                </td>
              </tr>
              <tr>
                <td className="w-screen font-bold text-xs pb-3 sm:pb-6 md:text-base lg:pb-12 xl:text-lg ">
                  Recommend
                </td>
                <td className="w-screen font-bold text-xs pb-3 sm:pb-6 md:text-base lg:pb-12 xl:text-lg">
                  {information.recommendations
                    ? information.recommendations.total
                    : "none"}
                </td>
              </tr>
            </tbody>
          </table>
          <a href={information.link_steam}>
            <img
              className="mt-2 -ml-2 w-8/12 sm:mt-1 sm:-ml-5 md:mt-0 md:-ml-6 xl:-ml-10"
              src={logo}
              alt="SteamLogo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
