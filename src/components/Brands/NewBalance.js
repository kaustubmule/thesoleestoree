import React from 'react'
import Product from "../Product"
import { products } from '../../data/products';

function NewBalance() {
  // Filter NewBalance products
  const newBalanceProducts = products.filter(product => product.brand === "NewBalance");

  return (
    <div>
      {newBalanceProducts.map((product, index) => {
        // Create a new row every 3 products
        if (index % 3 === 0) {
          return (
            <div key={index} className="home__row">
              {newBalanceProducts.slice(index, index + 3).map(product => (
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

export default NewBalance;