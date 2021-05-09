import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Header = () => {
  const [isTurnBack, setIsTurnBack] = useState(false);

  const turnBackToHomePage = () => {
    setIsTurnBack(true);
  };

  return (
    <React.Fragment>
      {isTurnBack && (
        <Redirect
          push
          to={{
            pathname: "/",
          }}
        />
      )}
      <nav className="bg-gray-900 flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div
          className="flex cursor-pointer items-center flex-shrink-0 text-white mr-6"
          onClick={turnBackToHomePage}
        >
          <svg
            className="fill-current h-12 w-12 mr-2"
            width="58"
            height="58"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-3xl tracking-tight">
            Steam Tracker
          </span>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
