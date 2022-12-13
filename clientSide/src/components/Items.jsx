import React from "react";
import Product from "./Product";
import Cart from "./Cart";

function Items({ items, addProduct }) {
  return (
    <>
      {!addProduct ? <Cart items={items} /> : <></>}
      <div className="items">
        {items.map((product) => (
          <Product
            addProduct={addProduct}
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            description={product.description}
          />
        ))}
      </div>
    </>
  );
}

export default Items;
