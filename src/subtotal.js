import React from 'react'
import { getTotalBasket, getTotalQuantity } from './reducer'
import './subtotal.css'
import { useStateValue } from './stateProvider'
import { useNavigate } from 'react-router-dom';
function Subtotal() {
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();
  return (
    <>
    <div className='subtotal'>
        <div className='amount'>Subtotal ({getTotalQuantity(state.basket)} items) : {new Intl.NumberFormat('en-IN', {style : 'currency', currency : 'INR'}).format(getTotalBasket(state.basket))}</div>
        <div><input type = "checkbox"></input>This order contains a gift</div>
        <button className='random' onClick={() => navigate('/payment')}>Proceed to Buy</button>
    </div>
    </>
  )
}

export default Subtotal