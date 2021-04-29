import { Fragment } from "react";

const GameInfo = (props) => {
  const information = props.data;
  const aboutTheGame = information.about_the_game
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

  return (
    <Fragment>
      <div>
        <h1>{information.name}</h1>
        <p>{aboutTheGame}</p>
      </div>
      <div>
        <img src={information.header_image} alt="GameImage" />

        <ul>
          {information.genres.map((el) => {
            return <li>{el.description}</li>;
          })}
          {gameCategories.map((el) => {
            return <li>{el.description}</li>;
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default GameInfo;
