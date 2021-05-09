import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import API from "../../API/HTTP";
import GameInfo from "./GameInfoComponent/GameInfo";
import GamePrices from "./GamePricesComponent/GamePrices";
import { Redirect } from "react-router-dom";

const Game = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFailLoaded, setIsFailLoaded] = useState(false);

  useEffect(() => {
    async function fecthData() {
      try {
        const timer = setTimeout(() => {
          setIsFailLoaded(true);
        }, 10000);
        const respone = await API.get(`/app-ids/${id}`);
        setData(respone.data.data);
        setIsLoaded(true);
        clearTimeout(timer);
      } catch (error) {
        console.error(error);
        setIsLoaded(false);
      }
    }
    fecthData();
  }, [id]);

  return (
    <Fragment>
      {isFailLoaded && (
        <Redirect
          to={{
            pathname: "/error",
          }}
        />
      )}
      {!isLoaded && <h1 className="text-center text-xl">Loading...</h1>}
      {isLoaded && <GameInfo data={data} />}
      {isLoaded && <GamePrices price_countries={data.price_countries} />}
    </Fragment>
  );
};

export default Game;
