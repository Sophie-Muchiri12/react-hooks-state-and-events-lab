import {useState} from "react";

function Item({ name, category }) {

  const [IsCart,setIsCart] = useState(false)

  function addingtocart(){
    setIsCart((IsCart) => !IsCart)
  }

  const cart = IsCart ? "Remove From Cart" : "Add to Cart"
   const liClassName = IsCart ? "in-cart" : ""

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addingtocart} className="add">{cart}</button>
    </li>
  );
}

export default Item;
