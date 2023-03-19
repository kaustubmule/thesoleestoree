import React from 'react'
import Product from "./Product"
  
function Nike() {
  return (
    <div>
      <div className="home__row">
    <Product
      id="11"
      title="JORDAN 1 LOW MULTI-COLOR (W)"
      price={19900}

      image="https://mikaandmia.com/wp-content/uploads/2022/11/Jordan-1-Low-SE-Multi-Color-W-PhotoRoom.png"
    />
    <Product
      id="13"
      title="NIKE DUNK LOW BLUE SASHIKO"
      price={20000}

      image="https://images.stockx.com/images/Nike-Dunk-Low-Industrial-Blue-Sashiko-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1676277261&q=75"
    />
    <Product
      id="13"
      title="NIKE DUNK LOW BLUE SASHIKO"
      price={20000}

      image="https://images.stockx.com/images/Nike-Dunk-Low-Industrial-Blue-Sashiko-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1676277261&q=75"
    />
  </div></div>
  )
}

export default Nike