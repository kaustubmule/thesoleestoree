import React from "react";
import "./Home.css";
import "./Animation.css";
import { useState } from "react"

import Product from "./Product";

function Home() {
  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black',
  })

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
      })
    }
    else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
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

        <img
          className="home__image "
          src="https://i.ibb.co/MsX4TrQ/Untitled-design.png"
          alt=""
        />
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
            <span class="parallax-text" text="SKETCHERS">
              SKETCHERS
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
            id="12321341"
            title="Air jordan 1 Smoke Grey"
            price={25000}

            image="https://media.gq.com/photos/6177129f5f26fedaa5b6f05f/master/w_2000,h_1333,c_limit/1_Travis_Scott_x_Fragment_Design_Jordan_1_low_sneaker.jpghttps://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="49538094"
            title="Shoe"
            price={239.0}

            image="https://media.gq.com/photos/6177129f5f26fedaa5b6f05f/master/w_2000,h_1333,c_limit/1_Travis_Scott_x_Fragment_Design_Jordan_1_low_sneaker.jpghttps://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="23445930"
            title="Shoe"
            price={98.99}

            image="https://media.gq.com/photos/6177129f5f26fedaa5b6f05f/master/w_2000,h_1333,c_limit/1_Travis_Scott_x_Fragment_Design_Jordan_1_low_sneaker.jpghttps://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>

        {/* <div className="home__row">
          <Product
            id="4903850"
            title="Shoe"
            price={199.99}

            image="https://media.gq.com/photos/6177129f5f26fedaa5b6f05f/master/w_2000,h_1333,c_limit/1_Travis_Scott_x_Fragment_Design_Jordan_1_low_sneaker.jpghttps://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Shoe"
            price={98.99}

            image="https://media.gq.com/photos/6177129f5f26fedaa5b6f05f/master/w_2000,h_1333,c_limit/1_Travis_Scott_x_Fragment_Design_Jordan_1_low_sneaker.jpghttps://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="Shoe"
            price={598.99}

            image="https://media.gq.com/photos/6177129f5f26fedaa5b6f05f/master/w_2000,h_1333,c_limit/1_Travis_Scott_x_Fragment_Design_Jordan_1_low_sneaker.jpghttps://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Shoe"
            price={1094.98}

            image="https://media.gq.com/photos/6177129f5f26fedaa5b6f05f/master/w_2000,h_1333,c_limit/1_Travis_Scott_x_Fragment_Design_Jordan_1_low_sneaker.jpghttps://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />

          <Product
            id="23445930"
            title="Shoe"
            price={98.99}

            image="https://media.gq.com/photos/6177129f5f26fedaa5b6f05f/master/w_2000,h_1333,c_limit/1_Travis_Scott_x_Fragment_Design_Jordan_1_low_sneaker.jpghttps://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="23445930"
            title="Shoe"
            price={98.99}

            image="https://media.gq.com/photos/6177129f5f26fedaa5b6f05f/master/w_2000,h_1333,c_limit/1_Travis_Scott_x_Fragment_Design_Jordan_1_low_sneaker.jpghttps://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div><div className="home_row">
          <button class="cta">
            <span class="hover-underline-animation"> Shop now </span>
            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
              <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
            </svg>
          </button>
        </div> */}
      </div>
    </div >
  );
}

export default Home;