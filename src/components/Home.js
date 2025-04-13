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
import { products } from '../data/products';

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

  // Get first 6 products for display
  const featuredProducts = products.slice(0, 6);

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
            {featuredProducts.slice(0, 3).map(product => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>

          <div className="home__row">
            {featuredProducts.slice(3, 6).map(product => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
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