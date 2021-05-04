import React from "react";

const TopGameTable = (props) => {
  const { data } = props;

  let tableHeader = [];
  let title = "";
  if (props.type === "Most Played Games") {
    title = "Most Played Games";
    tableHeader = ["Players Now", "Peak Today"];
  } else if (props.type === "Trending Games") {
    title = "Trending Games";
    tableHeader = ["Players Now"];
  } else if (props.type === "Popular Releases") {
    title = "Popular Releases";
    tableHeader = ["Peak Today", "Price"];
  } else if (props.type === "Hot Releases") {
    title = "Hot Releases";
    tableHeader = ["Rating", "Price"];
  }

  return (
    <div>
      <table className="table-auto border-collapse text-left my-8">
        <thead>
          <tr>
            <th className="w-1/2 text-2xl">{title}</th>
            {tableHeader.map((el, index) => {
              return (
                <th key={`header${index}`} className="w-2/12 text-lg text-center">
                  {el}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => {
            return (
              <tr key={`row${index}`} className="">
                {title === "Most Played Games" && (
                  <React.Fragment>
                    <td>{el.name}</td>
                    <td className="text-center">{el.players_now}</td>
                    <td className="text-center">{el.peak_today}</td>
                  </React.Fragment>
                )}
                {title === "Trending Games" && (
                  <React.Fragment>
                    <td>{el.name}</td>
                    <td className="text-center">{el.players_now}</td>
                  </React.Fragment>
                )}
                {title === "Popular Releases" && (
                  <React.Fragment>
                    <td>{el.name}</td>
                    <td className="text-center">{el.peak_today}</td>
                    <td className="text-center">{el.price}</td>
                  </React.Fragment>
                )}
                {title === "Hot Releases" && (
                  <React.Fragment>
                    <td>{el.name}</td>
                    <td className="text-center">{el.rating}</td>
                    <td className="text-center">{el.price}</td>
                  </React.Fragment>
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
