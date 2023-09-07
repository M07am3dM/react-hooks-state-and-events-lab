import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState('');
  // const cart = inCart ? 'in-cart' : '';

  const handleCartChange = () => setInCart(inCart => inCart = !inCart);

  return (
    // <li className={cart}>
    <li className={inCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartChange}>{inCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
