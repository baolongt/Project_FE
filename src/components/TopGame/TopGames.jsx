import TopGameTable from "./TopGameTable";
import { Fragment, useEffect, useState } from "react";
import API from "../../API/HTTP";

const TopGames = (props) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    async function fecthData() {
      try {
        const respone = await API.get("/top-game");
        setData(respone.data);
        setIsLoaded(true);
      } catch (error) {
        console.error(error);
        setIsLoaded(false);
      }
    }
    fecthData();
  }, []);

  return (
    <Fragment>
      {!isLoaded && <h1 className="text-center text-xl">Loading...</h1>}
      {isLoaded && (
        <div className="grid grid-cols-12 md:mx-5 ">
          <div className="col-span-12 lg:col-span-6">
            <TopGameTable
              type="Most Played Games"
              data={data.most_played_games}
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <TopGameTable type="Trending Games" data={data.trending_games} />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <TopGameTable
              type="Popular Releases"
              data={data.popular_releases}
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <TopGameTable type="Hot Releases" data={data.hot_releases} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default TopGames;
