import TopGameTable from "./TopGameTable";
import { Fragment, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import API from "../../API/HTTP";

const TopGames = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [redirectInfo, setRedirectInfo] = useState({
    isRedirect: false,
    location: "",
  });
  const [isFailLoaded, setIsFailLoaded] = useState(false);

  const redirectToGameDetail = async (appID) => {
    setRedirectInfo({
      isRedirect: true,
      location: appID,
    });
  };

  useEffect(() => {
    async function fecthData() {
      try {
        const timer = setTimeout(() => {
          setIsFailLoaded(true);
        }, 10000);
        const respone = await API.get("/top-game");
        setData(respone.data.data);
        setIsLoaded(true);
        clearTimeout(timer);
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
      {redirectInfo.isRedirect && (
        <Redirect
          push
          to={{
            pathname: `/info/${redirectInfo.location}`,
          }}
        />
      )}
      {isFailLoaded && (
        <Redirect
          to={{
            pathname: "/error",
          }}
        />
      )}
      {isLoaded && (
        <div className="grid grid-cols-12 md:mx-5 ">
          <div className="col-span-12 lg:col-span-6">
            <TopGameTable
              type="Most Played Games"
              data={data.most_played_games}
              redirectToGameDetail={redirectToGameDetail}
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <TopGameTable
              type="Trending Games"
              data={data.trending_games}
              redirectToGameDetail={redirectToGameDetail}
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <TopGameTable
              type="Popular Releases"
              data={data.popular_releases}
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <TopGameTable
              type="Hot Releases"
              data={data.hot_releases}
              redirectToGameDetail={redirectToGameDetail}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default TopGames;
