import React from "react";

const ResultComponent = (props) => {
  return (
    <a
      href={`/info/${props.id}`}
      className="mt-1 grid grid-cols-10 hover:bg-gray-400 cursor-pointer"
    >
      <img src={props.imageUrl} alt="game" className="col-span-2 scale-100" />
      <div className="col-start-3 col-span-7 ml-2 text-black">
        <p>{props.name}</p>
      </div>
    </a>
  );
};

export default ResultComponent;
