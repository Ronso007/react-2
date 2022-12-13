import "./Cart.css";
import { React, useState } from "react";
import FormPopUp from "./FormPopUp";

function Cart({ items }) {
  const [showForm, setShowForm] = useState(false);

  const getTotal = () => {
    let sum = 0;
    items.map((item) => (sum += item.price));
    return sum;
  };

  const changeFormState = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="cart">
      <button onClick={changeFormState}>Add details</button>
      <div className="totalPrice">Total: ${getTotal()}</div>
      <FormPopUp show={showForm} close={changeFormState} items={items} />
    </div>
  );
}

export default Cart;
