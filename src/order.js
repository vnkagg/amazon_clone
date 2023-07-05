import React from 'react'
import './order.css'
import moment from "moment";
import CheckoutProduct from "./checkoutProduct";

function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order ID :</h2><small>{order.orderId}</small>
            <p className="order__id">
                <p>{moment.unix(order.created).format("MMMM DD YYYY, HH:mm:ss")}</p>
            </p>
            {order.basket?.map((item, index) => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    quantity={item.quantity}
                    hide={true}
                    bg={index}
                />
            ))}
            Total Amount : {new Intl.NumberFormat('en-IN', {style: 'currency', currency : 'INR'}).format(order.amount/100)} 
        </div>
    )
}

export default Order
