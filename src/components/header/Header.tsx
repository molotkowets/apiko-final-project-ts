import React, { useState } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/icons/LogoFull.svg'
import { ReactComponent as FavoriteFalse } from '../../assets/icons/FavoritesFalse.svg'
import { ReactComponent as FavoriteTrue } from '../../assets/icons/FavoriteTrue.svg'
import CartIcon from '../cart-icon/CartIcon'
import AuthActive from '../auth-active/AuthActive'
import AuthNotActive from '../auth-active/AuthNotActive'

export default function Header() {
const [favState, setFavState] = useState(false)
const isAuth = false

  return (
    <div className='header'>
      <NavLink to="/">
        <Logo/>
      </NavLink>
      <div className='header-right-side'>
        <div className='header-icons'>
          <NavLink to="favorites" className={"fav-link-button"} >
           {favState ? <FavoriteTrue/> : <FavoriteFalse/>} 
          </NavLink>
          <NavLink to="cart">
            <CartIcon/>
          </NavLink>
        </div>
        <div className='auth-header-active'>
          {isAuth ? <AuthActive /> : <AuthNotActive/>}
          
        </div>
      </div>

      
    </div>
  )
}
