import React from 'react'
import './checkoutProduct.css'
import { useStateValue } from './stateProvider';
function CheckoutProduct({id, title, image, price, rating, quantity, bg, hide}) {
    const [state, dispatch] = useStateValue();
    const handleRemove = () => {
        dispatch({type : 'DELETE_ITEM', id : id});
    }
    const handleDropdown = (event) => {
        const qty = parseInt(event.target.value);
        dispatch({type : 'UPDATE_ITEM', item : {id : id, title : title, image : image, price : price, rating : rating, quantity : qty}});
    }
  return (
    <>
        <hr />
        <div className='checkoutProduct' style={{backgroundColor : `${bg%2 === 1  ?  "rgba(205, 205, 205, 0.2)" : 'rgba(205, 205, 205, 0.491)' }`}}>
            <div className='checkoutImage'><img className="checkoutProductImage" src={image} /></div>
            <div className='checkoutProductRight'>
                <div className='checkoutProductInfo'>
                    <span className='checkoutTitle'><strong>{title}</strong></span>
                    <span className='checkoutRating'>{Array(rating).fill().map(() => <p>🌟</p>)}</span>
                    <span className='checkoutPrice'>{new Intl.NumberFormat('en-IN', {style : 'currency', currency : 'INR'}).format(price)}</span>
                    {!hide && <select value={quantity} className="checkoutDropdown" onChange={handleDropdown}>
                        {Array(quantity + 5).fill().map((_, i) => {return <option value={i+1}>{i+1}</option>})}
                    </select>}
                    {hide && <div className='qty'>Qty : <strong>{quantity}</strong></div>}
                </div>
                {!hide && <div className='checkoutProductRemove'>
                    <button onClick={handleRemove}>Remove</button>
                </div>}
            </div>
        </div>
    </>
  )
}

export default CheckoutProduct