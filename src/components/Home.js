import React from "react";
import "./Home.css";
import "./Animation.css";
import { useState } from "react"
import Product from "./Product";
import { Link } from "react-router-dom";

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
          src="image.png"
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
            title="JORDAN 1 LOW MULTI-COLOR (W)"
            price={19900}

            image="https://mikaandmia.com/wp-content/uploads/2022/11/Jordan-1-Low-SE-Multi-Color-W-PhotoRoom.png"
          />
          <Product
            id="12"
            title="adidas x gucci gazelle pink"
            price={65000}

            image="https://images.stockx.com/images/adidas-x-Gucci-Gazelle-Pink.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1656093961&q=75"
          />
          <Product
            id="13"
            title="NIKE DUNK LOW INDUSTRIAL BLUE SASHIKO"
            price={20000}

            image="https://images.stockx.com/images/Nike-Dunk-Low-Industrial-Blue-Sashiko-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1676277261&q=75"
          />
        </div>

        <div className="home__row">
          <Product
            id="21"
            title="JEREMY SCOTT OPAL WINGS 4.0 "
            price={21999}

            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/6a5aea66fb3b45478113af500018a847_9366/Jeremy_Scott_Opal_Wings_4.0_Shoes_Black_IE6862_01_standard.jpg"
          />
          <Product
            id="22"
            title="PUREBOOST 22 SHOES"
            price={12900}

            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/8024f2fd73864c04a28daf4701571e8e_9366/Pureboost_22_Shoes_White_HQ8585_01_standard.jpg"
          />
          <Product
            id="23"
            title="ADIDAS X MARIMEKKO SUPERSTAR"
            price={11999}

            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/c61a24587171400fba8daf8800e9a5c3_9366/adidas_x_Marimekko_Superstar_Shoes_White_HP9779_01_standard.jpg"
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
        <Link to="/filter">
        <div className="showMore_shoes">
          <button className="showMore" style={{ myStyle }}>Show More</button>
        </div>
        </Link>
      </div>

    </div >
  );
}

export default Home;