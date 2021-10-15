import React from 'react'
import "./Home.css"
import Product from './Product'


function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image" src="amazon_home.jpg"></img>
            <div className="home__row">
                 <Product id="132324" title="The Lean startup" 
                 price={29.99}
                 image="the-lean-startup-eric-ries.jpeg"
                 rating={4}
                 />           
                 <Product id="222334" title="
AGNI A1522 Electric Jigsaw Machine" 
                 price={49.99}
                 image="second_product.jpg"
                 rating={4}
                 />             
                

            </div>
             <div className="home__row">
                  <Product id="362723" title="Samsung U32J590 32-inch UHD LED-Lit Monitor" 
                 price={299}
                 image="third_product.jpg"
                 rating={5}
                 />           
                 <Product id="423237" title="
Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)" 
                 price={54.99}
                 image="fouth_product.jpg"
                 rating={5}
                 />            
                 <Product id="637382" title="
2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi + Cellular, 128GB) - Space Grey (5th Generation)" 
                 price={149.99}
                 image="fifth_product.jpg"
                 rating={5}
                 />           
                    
                
            </div>
             <div className="home__row">
                 <Product id="56479" title="Samsung AU8000 Crystal 4K UHD Smart TV" 
                 price={4999}
                 image="samsungled.jpeg"
                 rating={5}
                 />           
                         
                
                
                
            </div>
            </div>
            
        </div>
    );
}

export default Home
