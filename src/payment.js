import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutProduct from './checkoutProduct';
import { useStateValue } from './stateProvider'
import { getTotalQuantity, getTotalBasket } from './reducer';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import payment from './payment.module.css'
import { db } from './firebase';
import { collection, setDoc, addDoc, doc } from 'firebase/firestore';

function Payment() {
    const navigate = useNavigate();
    const [state, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [suceeded, setSuceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            try {
                const response = await axios(
                    {method: 'post',
                    baseURL:'http://127.0.0.1:5001/clone-85620/us-central1/api',
                    url: `/payments/create?total=${getTotalBasket(state.basket) * 100}`});
                setClientSecret(response.data.clientSecret);
            } catch (error) {  
                console.log("error", error);
            }
        }
        getClientSecret();
    }, [state.basket]);
    console.log("clientSecret", clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card : elements.getElement(CardElement)
            }
        }).then(async({paymentIntent}) => {
            console.log("paymentIntent", paymentIntent);
            const paymentRef = await doc(db, "users", state.user?.uid, "orders", paymentIntent.id);
            await setDoc(paymentRef, {
                basket : state.basket,
                orderId : paymentIntent.id,
                amount : paymentIntent.amount, 
                created :paymentIntent.created});
            console.log("paymentRef >>>", paymentRef);
            setSuceeded(true);
            setError(null);
            setProcessing(false);
            setDisabled(false);
            // navigate('/orders');
            navigate('/orders', {replace : true});
        })
    }
    const handleChange = (event) => {
        setDisabled(!event.complete);
        // console.log(event)
        setError(event.error ? event.error.message : '');
    }

  return (
    <div className={payment.page}>
        <div className={payment.heading}>
            <h1>Checkout ({getTotalQuantity(state.basket)} items)</h1>
        </div>
        <div className={payment.section}>
            <div className={payment.Title}>
                Delivery Information
            </div>
            <div className={payment.content}>
                {state.user?.email}
                <p>E219 RadhaKrishnan Hall of Residence</p>
                <p>IIT Kharagpur, West Bengal, 721302</p>
            </div>
        </div>
        <div className={payment.section}>
            <div className={payment.Title}>Review Items and Delivery</div>
            <div className={payment.content}>
                {Array.from(state.basket.values())
                    .map((element, index) => 
                    <CheckoutProduct 
                        id={element.id}
                        image={element.image}
                        title={element.title}
                        price={element.price}
                        rating={element.rating}
                        quantity={element.quantity}
                        bg={index}
                    />)}
            </div>
        </div>
        <div className={payment.section}>
            <div className={payment.Title}>Payment Details</div>
            <div className={payment.content}>
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>

                    <div className={payment.orderTotal}>
                        Total Amount : {new Intl.NumberFormat('en-IN', {style : 'currency', currency : 'INR'}).format(getTotalBasket(state.basket))}
                    </div>
                    <button className={payment.payButton} disabled={disabled || processing || suceeded}>{`${processing ? "Order Processing" : "Confirm Purchase"}`}</button>
                </form>
            </div>
            {error && <div>{error}</div>}
        </div>

    </div>
  )
}

export default Payment