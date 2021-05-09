import React from "react";
import defaultLogo from "../../images/DefaultLogo.jpg"

const TopGameTable = (props) => {
  const { data } = props;

  let tableHeader = [];
  let title = "";
  if (props.type === "Most Played Games") {
    title = "Most Played Games";
    tableHeader = ["Players Now", "Peak Today"];
  } else if (props.type === "Trending Games") {
    title = "Trending Games";
    tableHeader = ["", "Players Now"];
  } else if (props.type === "Popular Releases") {
    title = "Popular Releases";
    tableHeader = ["Peak Today", "Price"];
  } else if (props.type === "Hot Releases") {
    title = "Hot Releases";
    tableHeader = ["Rating", "Price"];
  }
  const length = title.length;


  return (
    <div>
      <table className="table-auto border-collapse text-left my-8 mx-2 px-2 py-3 sm:px-5 sm:py-4 md:mx-2 lg:mx-2 xl:mx-3 2xl:mx-24">
        <thead>
          <tr>
            <th className="text-lg w-screen sm:text-xl md:text-2xl">
              <span>{title.substr(0, length - 6)}</span>
              <span className="hidden md:inline">
                {title.substr(length - 6, length - 1)}
              </span>
            </th>
            {tableHeader.map((el, index) => {
              return (
                <th
                  key={`header${index}`}
                  className="text-center w-screen md:text-base md:w-2/12 lg:w-4/12 xl:w-2/12 2xl:text-lg"
                >
                  {el}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => {
            return (
              <tr key={`row${index}`} className="hover:bg-gray-600">
                <td className="border-b overflow-hidden truncate w-2 ">
                  {el.header_image ? (
                    <img
                      src={el.header_image}
                      alt="te"
                      className="cursor-pointer inline-block h-12 mr-3 sm:w-7/12 md:w-3/12 2xl:w-3/12 2xl:h-14"
                      onClick={() => {
                        return props.redirectToGameDetail(el.appid);
                      }}
                    />
                  ) : (
                    <img
                      src={defaultLogo}
                      alt="te"
                      className="cursor-pointer inline-block h-12 mr-3 sm:w-7/12 md:w-3/12 2xl:w-3/12 2xl:h-14"
                      onClick={() => {
                        return props.redirectToGameDetail(el.appid);
                      }}
                    />
                  )}

                  <span
                    className="cursor-pointer hidden md:inline 2xl:text-lg"
                    onClick={() => {
                      return props.redirectToGameDetail(el.appid);
                    }}
                  >
                    {el.name}
                  </span>
                </td>
                {title === "Most Played Games" && (
                  <>
                    <td className="text-center text-green-500 border-b">
                      {el.players_now}
                    </td>
                    <td className="text-center border-b">{el.peak_today}</td>
                  </>
                )}
                {title === "Trending Games" && (
                  <>
                    <td className="text-center border-b"></td>
                    <td className="text-center text-green-500 border-b">
                      {el.players_now}
                    </td>
                  </>
                )}
                {title === "Popular Releases" && (
                  <>
                    <td className="text-center text-green-500 border-b">
                      {el.peak_today}
                    </td>
                    <td className="text-center border-b">{el.price}</td>
                  </>
                )}
                {title === "Hot Releases" && (
                  <>
                    <td className="text-center text-green-500 border-b">
                      {el.rating}
                    </td>
                    <td className="text-center border-b">{el.price}</td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TopGameTable;
