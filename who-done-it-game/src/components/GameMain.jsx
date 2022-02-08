import React, { useState } from "react";

const GameMain = () => {
  const [suspects, setSuspects] = useState([
    "Brown",
    "Green",
    "White",
    "Black",
    "Scarlet",
    "Peacock",
    "Plum",
    "Mustard",
  ]);

  const [weapons, setWeapons] = useState([
    "dagger",
    "revolver",
    "candlestick",
    "rope",
    "spanner",
    "lead pipe",
  ]);

  const [locations, setLocations] = useState([
    "Kitchen",
    "Study",
    "Dining Room",
    "Billiard Room",
    "Library",
    "Conservatory",
  ]);

  return (
    <div>
      <h3>SUSPECTS</h3>
      <h1>MAIN GAME SCREEN</h1>
      {suspects.map((suspect) => {
        return <li>{suspect}</li>;
      })}
      <h3>WEAPONS</h3>
      {weapons.map((weapon) => {
        return <li>{weapon}</li>;
      })}
      <h3>LOCATIONS</h3>
      {locations.map((locations) => {
        return <li>{locations}</li>;
      })}
    </div>
  );
};

export default GameMain;
