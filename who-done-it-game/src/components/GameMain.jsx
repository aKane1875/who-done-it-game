import React, { useState } from "react";
import Board from "./Board";

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

  const murderer = suspects[Math.floor(Math.random() * suspects.length)];

  const murderWeapon = weapons[Math.floor(Math.random() * weapons.length)];

  const murderLocation =
    locations[Math.floor(Math.random() * locations.length)];

  return (
    <div>
      <h3>SUSPECTS</h3>
      <h1>MAIN GAME SCREEN</h1>
      <Board />
      {suspects.map((suspect) => {
        return <li>{suspect}</li>;
      })}
      <h3>MURDERER: {murderer}</h3>
      <h3>WEAPONS</h3>
      {weapons.map((weapon) => {
        return <li>{weapon}</li>;
      })}
      <h3>MURDER WEAPON: {murderWeapon}</h3>
      <h3>LOCATIONS</h3>
      {locations.map((locations) => {
        return <li>{locations}</li>;
      })}
      <h3>MURDER LOCATION: {murderLocation}</h3>
    </div>
  );
};

export default GameMain;
