import React from 'react'
import Product from "./Product"

function Nike() {
  return (
    <div>
      <div className="home__row">
        <Product
          id="11"
          title="NIKE AIRFORCE'07 "
          price={10900}

          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4e890856-b6ce-492b-83f5-9aca6e147ad8/air-force-1-07-lv8-shoes-Blj3sx.png"
        />
        <Product
          id="13"
          title="NIKE AJ1 MIDSE"
          price={12925}

          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0d6a88ca-7ff8-4ad9-991b-b2e2a33cf66e/air-jordan-1-mid-se-shoes-CQ6f9G.png"
        />
        <Product
          id="13"
          title="NIKE AIR DELDON"
          price={11000}

          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61bf94c2-eee8-4f4e-895f-53e68a1fe930/air-deldon-hoodie-basketball-shoes-L07kGx.png"
        />
      </div>
      <div className="home__row">
        <Product
          id="11"
          title="NIKE VAPOURMAX"
          price={13000}

          image="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3c7f0a74-9376-4b50-a410-5795807e2845/dunk-high-retro-shoes-WGkPW2.png"
        />
        <Product
          id="13"
          title="NIKE BLAZER MID"
          price={10000}

          image="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eea83ac-7862-459e-abf5-2f566e2f0ac1/blazer-mid-77-vintage-shoes-d8ZCkw.png"
        />
        <Product
          id="13"
          title="NIKE LOW DUNK"
          price={9225}

          image="https://images.stockx.com/images/Nike-Dunk-Low-Retro-QS-Flash-White-Argon-Blue-Flash-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1658842672&q=75"
        />
      </div>
      <div className="home__row">
        <Product
          id="13"
          title="NIKE DUNK LOW BLUE SASHIKO"
          price={20000}

          image="https://images.stockx.com/images/Nike-Dunk-Low-Industrial-Blue-Sashiko-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1676277261&q=75"
        />
        <Product
          id="11"
          title="NIKE ZION HP"
          price={10000}

          image="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/693cc53f-d228-472a-bf17-0a2e2c42daf7/air-jordan-1-mid-se-craft-shoes-RmP7J6.png"
        />
        <Product
          id="11"
          title="JORDAN 1 LOW MULTI-COLOR (W)"
          price={19900}

          image="https://mikaandmia.com/wp-content/uploads/2022/11/Jordan-1-Low-SE-Multi-Color-W-PhotoRoom.png"
        />
      </div>
      <div className="home__row">
        <Product
          id="11"
          title="NIKE JUNIPER"
          price={7050}

          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b24aea97-f10e-40b2-91eb-2bc027a4dd89/juniper-trail-2-next-nature-trail-running-shoes-PT4wqk.png"
        />
        <Product
          id="13"
          title="NIKE COSMIC 2"
          price={13000}

          image="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c0642094-8cfc-4850-ab9a-55b7e2f6f755/cosmic-unity-2-basketball-shoes-S6n2s3.png"
        />
        <Product
          id="13"
          title="NIKE AJ1 CRAFT"
          price={14225}

          image="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/312c82cd-03f7-4b38-97bb-37348c415250/zion-2-pf-basketball-shoes-pwN2Q4.png"
        />
      </div>
    </div>
  )
}

export default Nike