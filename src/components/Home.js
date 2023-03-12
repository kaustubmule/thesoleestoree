import React from "react";
import "./Home.css";
import "./Animation.css";
import { useState } from "react"

import Product from "./Product";

function Home() {
  const [showBImage, setShowBImage] = useState(true);

  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black',
  })

  const toggleStyle = () => {
    setShowBImage(!showBImage);
    if (myStyle.color === "black") {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
      })
    }
    else {
      setMyStyle({
        color: 'black',
        backgroundColor: '#FFFEF2',
      })
    }
  }

  return (
    <div className="home" style={myStyle}>
      <div className="home__container">
        <div className="float">
          <label class="switch">
            <input type="checkbox" onClick={toggleStyle} />
            <span class="slider"></span>
          </label>
        </div>

        {showBImage ? <img
          className="home__image "
          src="https://i.ibb.co/MsX4TrQ/Untitled-design.png"
          alt=""
        /> : <img className="home__image " src="https://i.ibb.co/Cv0DGnx/thesolestorewhite.png" alt="Image" />}




        <div className="brands" style={{ marginTop: '350px' }}>
          <div className="brand">
            <span class="parallax-text" text="NIKE">
              NIKE
            </span>
            <img className="brandShoe" src="https://i.ibb.co/dgvM3z2/j-WQq0t-Foi5i-Tvjojw-Or-BL-transformed.png" alt="Nike sneaker" />
          </div>
          <div className="brand">
            <span class="parallax-text" text="ADIDAS">
              ADIDAS
            </span>
            <img className="brandShoe" src="https://freepngimg.com/thumb/adidas_shoes/3-2-adidas-shoes-png-clipart.png" alt="Adidas sneaker" />
          </div>
          <div className="brand">
            <span class="parallax-text" text="PUMA">
              PUMA
            </span>
            <img className="brandShoe" src="https://i.ibb.co/C2KHdnP/Sqy-Rz2-Rj-Mv3-Op-Ah7-4t-Wi-transformed.png" alt="Puma sneaker" />
          </div>
          <div className="brand">
            <span class="parallax-text" text="SKECHERS">
              SKECHERS
            </span>
            <img className="brandShoe" src="https://i.ibb.co/ky5LgCT/png-clipart-sneakers-converse-adidas-shoe-skechers-shose-orange-outdoor-shoe-thumbnail-transformed.png" alt="SKETCHERS sneaker" />
          </div>
          <div className="brand">
            <span class="parallax-text" text="REEBOK">
              REEBOK
            </span>
            <img className="brandShoe" src="https://i.ibb.co/GWB0sRb/TRk-C-Od-Ka-GXnbs6rtda4n-transformed.png" alt="Reebok sneaker" />
          </div>
        </div>

        <div className="home__row">
          <Product
            id="11"
            title="AJ1 Mid Light Smoke Grey"
            price={25000}

            image="https://www.kindpng.com/picc/m/576-5762379_air-jordan-1-mid-light-smoke-grey-554724.png"
          />
          <Product
            id="12"
            title="AJ1 Mid SE Craft"
            price={12295}

            image="https://cdn.shopify.com/s/files/1/0670/7323/products/DM9652-102-PHSRH000-2000_2000x.png?v=1676946956"
          />
          <Product
            id="13"
            title="AJ1 Retro High OG"
            price={16995}

            image="https://cdn.shopify.com/s/files/1/0603/3031/1875/products/1_f1760765-8b5a-43e1-b6fc-8618b6e52e7c_540x.jpg?v=1672758518"
          />
        </div>

        <div className="home__row">
          <Product
            id="21"
            title="Adi2000 Shoes"
            price={10999}

            image="https://images.footlocker.com/is/image/FLEU/316703328704?wid=620&hei=620&fmt=png-alpha"
          />
          <Product
            id="22"
            title="Adidas ZX 2K Boost 20"
            price={5600}

            image="https://i31.takemore.net/images/products/62/12/45/adidas-gz7733-zx_2k_boost_20-1.jpg"
          />
          <Product
            id="23"
            title="Adidas Superstar Shoes"
            price={11999}

            image="https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/711/8350/100/1/736338250/736338250_1_360x464.webp"
          />

        </div>

        <div className="home__row">
          <Product
            id="31"
            title="NB 1080 Black Running Shoes"
            price={15999}

            image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTIrjpYJUsDQNS4giKzBtBBtmQMRWcjqyKVKeFr49TaISfFOGED"
          />

          <Product
            id="32"
            title="NB 991 Eclipse Running Shoes"
            price={29999}

            image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRR2itqkEJBZ2F9s43EJfssWDm02vgzAs0gz74YxhOUIwyCvQgU"
          />
          <Product
            id="33"
            title="NB 550 White"
            price={15999}

            image="https://i.ebayimg.com/images/g/nkMAAOSwHJNjPzqE/s-l500.png"
          />
          
        </div>
        <div className="showMore_shoes">
          <button className="showMore">Show More</button>
        </div>
      </div>

    </div >
  );
}

export default Home;