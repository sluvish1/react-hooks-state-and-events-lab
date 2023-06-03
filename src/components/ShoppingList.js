import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const[selectedCategory, setCategory] = useState("All")

  function handelChange(e) {
   setCategory(e.target.value)
  }

  const filtedItems = items.filter((oneItem) => {
    if (selectedCategory === "All") {
    return true
    } else {
      return selectedCategory === oneItem.category
  }
})

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handelChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
