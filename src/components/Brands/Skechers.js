import React from 'react'
import Product from "../Product"
import { products } from '../../data/products';

function Skechers() {
    // Filter Skechers products
    const skechersProducts = products.filter(product => product.brand === "Skechers");

    return (
        <div>
            {skechersProducts.map((product, index) => {
                // Create a new row every 3 products
                if (index % 3 === 0) {
                    return (
                        <div key={index} className="home__row">
                            {skechersProducts.slice(index, index + 3).map(product => (
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

export default Skechers;