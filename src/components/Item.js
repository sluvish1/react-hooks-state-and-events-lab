import React, { useState } from "react";

function Item({ name, category }) {

  const[inCart, setCart] = useState(false)

  function handelCartClick(name) {
    setCart((inCart) => !inCart)
 
}


  return (
    <li className={inCart? "in-cart" :""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handelCartClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
