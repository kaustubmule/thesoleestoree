import React from 'react'
import Product from "./Product"

function Adidas() {
    return (
        <div>
            <div className="home__row">
            <Product
            id="21"
            title="STREET ICON"
            price={4000}

            image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bea682ea358743599a76afb200d99c10_9366/STREET_ICON_M_Black_GC0660_01_standard.jpg"
            />
            <Product
            id="22"
            title="FORUM LOW"
            price={10800}

            image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/75aee7eb0fc343d484c9adf30019d225_9366/Forum_Low_Shoes_White_GY8556_01_standard.jpg"
          />
          <Product
            id="23"
            title="SKATEBOARDING SUEDE"
            price={5999}

            image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/439c316b2caf4bf499b3aeba00160a61_9366/Daily_3.0_Lifestyle_Skateboarding_Suede_Shoes_Red_GY2252_01_standard.jpg"
          />
          </div>
          <div className="home__row">
             <Product
            id="21"
            title="FORUM EXHBIT"
            price={9999}

            image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b19534d0b69a4d0f83c7af230161ead6_9366/Forum_Exhibit_Low_Shoes_Grey_IF9956_01_standard.jpg"
          />
            <Product
            id="22"
            title="BREAKNET 2.0"
            price={12900}

            image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d9cbf93890554349a33eaf8100cc02f1_9366/Breaknet_2.0_Shoes_White_HP9451_01_standard.jpg"
          />
          <Product
            id="23"
            title="CENNENTIAL 85"
            price={10999}

            image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dcf06aa9374c407bb133af0f00214ae6_9366/Centennial_85_Low_Shoes_White_ID1812_01_standard.jpg"
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
            id="21"
            title="ADI2000"
            price={10999}

            image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/34a88a6f03b243499013af2a00b6bf78_9366/Adi2000_Shoes_Red_H03487_01_standard.jpg"
          />
            <Product
            id="22"
            title="RIVARLY LOW"
            price={11900}

            image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1cae2a26304f8b87daaf5e00e628f7_9366/Rivalry_Low_86_Shoes_Grey_HQ7017_01_standard.jpg"
          />
          <Product
            id="23"
            title="ADIDAS X DISNEY"
            price={8000}

            image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/32982002d55e435795d3ae8a00cb99d5_9366/adidas_x_Disney_Advantage_Muppets_Lace_Shoes_White_GY6587_01_standard.jpg"
          />
        </div>
        </div>
    )
}

export default Adidas