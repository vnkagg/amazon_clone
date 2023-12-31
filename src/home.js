/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './home.css'
import Product from './product'
function Home() {
  return (
    <div className='homePage'>
        <div className='homeContainer'>
            <img 
                className="homeImage" 
                src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             />
             <div className='homeRow'>
                 <Product
                     id="49538094"
                     title="Lenovo Legion 5 Pro AMD Ryzen 7 5800H40cm 500Nits QHD Gaming Laptop"
                     price={123990}
                     rating={4}
                     image="https://m.media-amazon.com/images/I/71glTO3lJNL._SX679_.jpg"
                 />
                 
                <Product
                    id="23445930"
                    title="Apple iPhone 14 Pro Max (256 GB) - Deep Purple"
                    price={143990}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/31GmCJTD0GL._SY445_SX342_QL70_FMwebp_.jpg"
                />
                 <Product
                    id="12321341"
                    title="MANQ Men Black Solid Slim Fit Single-Breasted Three-Piece Formal Suit"
                    price={3879}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51cbThVpojL._UY879_.jpg"
                />
             </div>
             <div className='homeRow'>
                <Product
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product
                        id="12321341"
                        title="Apple AirPods Pro (2nd Generation) ​​​​​​​"
                        price={24499}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg"
                    />
                <Product
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={6499}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={72499}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />    
             </div>
             <div className='homeRow'>
                <Product
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={654900}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />   
             </div>
        </div>
    </div>
  )
}

export default Home