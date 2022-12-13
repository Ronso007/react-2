import "./Product.css";
import React from "react";

function Product({ id, name, price, imageUrl, description, addProduct }) {
  return (
    <div className="card item">
      <img src={imageUrl} alt={name} />
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <div className="price">${price}</div>
      {addProduct ? (
        <button onClick={(e) => addProduct(e, id)}>Add to Cart</button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Product;
