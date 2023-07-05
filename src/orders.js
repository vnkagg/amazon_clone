import React, { useEffect, useState } from 'react'
import { useStateValue } from './stateProvider'
import ordersCss from './orders.module.css'
import { db } from './firebase';
import { doc, getDoc, query, orderBy, collection, onSnapshot } from 'firebase/firestore';
import Order from './order';

function Orders() {
    const [state, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        if(state.user){
            // const queryRef = query(collection(db, 'users', state.user?.uid, 'orders'), orderBy('created', 'desc'));
            const x = []; 
            onSnapshot(query(collection(db, 'users', state.user?.uid, 'orders'), orderBy('created', 'desc')), async(snapshot) => {
                snapshot.forEach((doc) => {
                    // x.push({data : doc.data(), created : doc});
                    x.push(doc.data());
                    console.log("data", doc);
                });
            });    
            console.log("x >>> ", x);
            setOrders(x);
            // console.log("orders >>> ", orders);
        }
    }, [state.user]);

    // useEffect(() => {
    //     console.log("orders", orders)
    // }, [orders]);
    dispatch({type : "CLEAR_BASKET"});
  return (
    <div className={ordersCss.orders}>
    <h1>Your Orders</h1>

    <div className={ordersCss.orders__order}>
        {orders?.map(order => (
            <Order order={order} />
        ))}
    </div>
</div>
)
}

export default Orders