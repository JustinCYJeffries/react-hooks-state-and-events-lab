import React, {useState} from "react";

function Item({ name, category }) {
  const [appClass, setAppClass] = useState(true)
  function handleClick(){
    setAppClass((appClass)=>!appClass)
  }
  return (
    <li className={appClass ? " " : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
