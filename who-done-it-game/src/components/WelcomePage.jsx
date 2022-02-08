import React from "react";
import { Link } from "react-router-dom";

import Introduction from "./Introduction";

const WelcomePage = () => {
  return (
    <div>
      <h1>
        Welcome to......<br></br> THERE'S BEEN A MURDER!
      </h1>
      <img src="https://media.istockphoto.com/photos/murder-picture-id537015399?b=1&k=20&m=537015399&s=170667a&w=0&h=adADpbk7b6mnLU6qb5p5nuvFLcjtvsn_Le-z6ldEwxI=" />
      <br></br>
      <Link to={"/intro"}>
        <button>START GAME</button>
      </Link>
    </div>
  );
};

export default WelcomePage;
