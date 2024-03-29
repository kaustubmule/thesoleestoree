import React from "react";
import "./css/Home.css";
import "./css/Animation.css";
import { useState, useEffect } from "react"
import Product from "./Product";
import { Link } from "react-router-dom";
import NIKE from "./Videos/NIKE.mp4";
import NB from "./Videos/NB.mp4"
import ADIDAS from "./Videos/ADIDAS.mp4"
import Intro from "./Loader/Intro.js";
import Carousel from 'react-bootstrap/Carousel';

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
        backgroundColor: '#FFFEF2',
      })
    }
  }

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (

    loading ? <Intro /> :
      <div className="home" style={myStyle}>

        <div className="home__container">
          <div className="float">
            <label class="switch">
              <input type="checkbox" onClick={toggleStyle} />
              <span class="slider"></span>
            </label>
          </div>


          <Carousel className="home__slide" controls={false}>
            <Carousel.Item className="slide" interval={20000}>
              <video autoPlay loop muted height={"850"} width={"100%"}>
                <source src={NIKE} type="video/mp4" />
              </video>
            </Carousel.Item>
            <Carousel.Item className="slide" interval={40000}>
              <video autoPlay loop muted height={"850"} width={"100%"}>
                <source src={NB} type="video/mp4" />
              </video>
            </Carousel.Item>
            <Carousel.Item className="slide" interval={28000}>
              <video autoPlay loop muted height={"850"} width={"100%"}>
                <source src={ADIDAS} type="video/mp4" />
              </video>
            </Carousel.Item>

          </Carousel>




          <div className="brands" style={{ marginTop: '200px' }}>
            <Link to="/nike">
              <div className="brand">
                <span class="parallax-text" text="NIKE">
                  NIKE
                </span>
                <img className="brandShoe" src="https://i.ibb.co/dgvM3z2/j-WQq0t-Foi5i-Tvjojw-Or-BL-transformed.png" alt="Nike sneaker" />
              </div>
            </Link>
            <Link to="/adidas">
              <div className="brand">
                <span class="parallax-text" text="ADIDAS">
                  ADIDAS
                </span>
                <img className="brandShoe" src="https://freepngimg.com/thumb/adidas_shoes/3-2-adidas-shoes-png-clipart.png" alt="Adidas sneaker" />
              </div>
            </Link>
            <Link to="/puma">
              <div className="brand">
                <span class="parallax-text" text="PUMA">
                  PUMA
                </span>
                <img className="brandShoe" src="https://i.ibb.co/C2KHdnP/Sqy-Rz2-Rj-Mv3-Op-Ah7-4t-Wi-transformed.png" alt="Puma sneaker" />
              </div>
            </Link>
            <Link to="/skechers">
              <div className="brand">
                <span class="parallax-text" text="SKECHERS">
                  SKECHERS
                </span>
                <img className="brandShoe" src="https://i.ibb.co/6vh01FJ/195969573631-4-removebg-preview.png" alt="SKETCHERS sneaker" />
              </div>
            </Link>
            <Link to="/reebok">
              <div className="brand">
                <span class="parallax-text" text="REEBOK">
                  REEBOK
                </span>
                <img className="brandShoe" src="https://i.ibb.co/GWB0sRb/TRk-C-Od-Ka-GXnbs6rtda4n-transformed.png" alt="Reebok sneaker" />
              </div>
            </Link>

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
              title="NIKE DUNK LOW BLUE SASHIKO"
              price={20000}

              image="https://images.stockx.com/images/Nike-Dunk-Low-Industrial-Blue-Sashiko-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1676277261&q=75"
            />
          </div>

          <div className="home__row">
            <Product
              id="21"
              title="JEREMY SCOTT OPAL 4.0 SHOES
            "
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
              title="ADIDAS X MARIMEKKO SHOES"
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

          <div className="showMore_shoes">
            <Link to="/filter">

              <button className="showMore">
                Show More
              </button>

            </Link>
            <button
              role="link"
              onClick={() => openInNewTab('https://form.jotform.com/230956050055451')} className="feedback" style={{
                background: "none",
                color: "inherit",
                border: "1px",
                padding: 0,
                font: "inherit",
                cursor: "pointer",
                outline: "inherit",
              }}>
              Any Issues?
            </button>
          </div>
        </div>


      </div >


  );
}

export default Home;