import React from 'react'
import './header.css'
import { Search } from '@mui/icons-material'
import { ShoppingBasket } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useStateValue } from './stateProvider'
import { getTotalQuantity } from './reducer'
import {  auth } from './firebase'
function Header() {
  const [state, dispatch] = useStateValue();
  const handleAuth = () => {
    if(state.user){
      auth.signOut();
    }
  }
  return (
    <>
      <div className='header'>
        <Link to='/'>
          <img alt="header logo" className='logo' src ="http://pngimg.com/uploads/amazon/amazon_PNG11.png" /> 
        </Link>
        <div className='option'>
          <span className='opt-line1'>Hello</span>
          <span className='opt-line2'>Select Your Address</span>
        </div>
        <div className='search'>
          <input type= "text" className='searchInput'/>
          <div className='searchIconBg'>
            <Search className='searchIcon' />
          </div>
        </div>
        <div className='nav'>
          <Link to={!state.user ? '/login' : ''}>
            <div onClick={handleAuth} className='option'>
              <span className='opt-line1'>Hello {state.user ? state.user.email : "Guest"}</span>
              <span className='opt-line2'>{state.user ? "Sign Out" : "Sign In"}</span>
            </div>
          </Link>
          <Link to='/orders'>
            <div className='option'>
              <span className='opt-line1'>Returns</span>
              <span className='opt-line2'>& Orders</span>
            </div>
          </Link>
          <div className='option'>
            <span className='opt-line1'>Your</span>
            <span className='opt-line2'>Prime</span>
          </div>
          <Link to='/checkout'>
          <div className='shoppingBasket'>
            <span><ShoppingBasket /></span>
            <span className='basketCount'>{getTotalQuantity(state.basket)}</span>
          </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header