import React from 'react'
import Product from "../Product"
import { products } from '../../data/products';

function Nike() {
  // Filter Nike products
  const nikeProducts = products.filter(product => product.brand === "Nike");

  return (
    <div>
      {nikeProducts.map((product, index) => {
        // Create a new row every 3 products
        if (index % 3 === 0) {
          return (
            <div key={index} className="home__row">
              {nikeProducts.slice(index, index + 3).map(product => (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default Nike;