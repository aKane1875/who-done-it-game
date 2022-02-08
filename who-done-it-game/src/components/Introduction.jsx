import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div>
      <h1>THERE'S BEEN A MURDER!!!!</h1>
      <h2>Who done it?? Can you solve the case?</h2>
      <p>
        It is your job to determine who committed the murder, which weapon they
        used and where the crime was committed
      </p>
      <Link to={"/main"}>
        <button>CONTINUE TO MAIN GAME SCREEN</button>
      </Link>
    </div>
  );
};

export default Introduction;
