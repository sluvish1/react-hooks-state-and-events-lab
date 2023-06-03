import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [isLight, setLight] = useState(true) //isLight is a varible, setLight is a function

  function handelClick() {
    setLight((isLight) => !isLight)//when button is clicked it'll switch between dark & light
  }

  const appClass = isLight ? "App light" : "App dark"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handelClick}>{isLight? "Light Mode":"Dark Mode"} </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
