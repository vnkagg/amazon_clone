import React from 'react'
import './checkout.css'
import CheckoutProduct from './checkoutProduct'
import Subtotal from './subtotal'
import { useStateValue } from './stateProvider'
function Checkout() {
  const [state, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <img className="bannerImage" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg" />
        <div className='main'>
          <div className="checkoutLeft">
              <div className='title'>
                  <h1>Shopping Cart</h1>
              </div>
              {
                Array.from(state.basket.values()).map((element, index) => 
                    <CheckoutProduct 
                      id={element.id}
                      image={element.image}
                      title={element.title}
                      rating={element.rating}
                      price={element.price}
                      quantity={element.quantity}
                      bg={index}
                    />)
              }
          </div>
          <div className="checkoutRight">
              <Subtotal />
          </div>
        </div>
    </div>
  )
}

export default Checkout