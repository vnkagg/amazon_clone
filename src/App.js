import './App.css';
import Header from './header';
import Home from './home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './checkout';
import Login from './login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useStateValue } from './stateProvider';
import {auth } from './firebase'
import Payment from './payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './orders';

const promise = loadStripe(
  'pk_test_51NQ7wKSIF32EltxbPrYuh40Y1kPvrd1RVs3x7oBxff4xwqhzfP5bBMAzl7WqRre4qfklfb2HrgYZMZuM3k9wdYs2000KW2p4Vv'
  );


function App() {

  const [state, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, authUser => {
      if(authUser){
        dispatch({type : "SET_USER", user : authUser})      ;
      } else {
        dispatch({type : "SET_USER", user : null})
      }
    })
  }, []);

  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path='/'         element={
                                          <>
                                            <Header />
                                            <Home />
                                          </>} 
          />
          <Route path='/checkout' element={
                                          <>
                                            <Header />
                                            <Checkout />
                                          </>} 
          />
          <Route path='/login'    element={
                                          <Login />} 
          />
          <Route path='/payment'  element={
                                          <>
                                            <Header />
                                            <Elements stripe={promise}>
                                              <Payment />
                                            </Elements>
                                          </>} 
          />
          <Route path='/orders'   element={
                                          <>
                                            <Header />
                                            <Orders />
                                          </>
          } />
        </Routes>
    </Router>
    </div>
  );
}

export default App;