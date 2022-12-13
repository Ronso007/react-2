import React from "react";
import Product from "./Product";

function ChosenItems({ items }) {
  return (
    <div className="items">
      {items.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default ChosenItems;
