import React from 'react'
import { BOOKS } from '../../books'
import { useContext } from 'react'
import { BookContext } from '../../context/shop-context'
import CartItem from './cart-item'
import "./cart.css"
import { useNavigate } from 'react-router-dom'

export default function Card() {
  const {cartItems, addToCard, removeFromCard, getTotalCart} = useContext(BookContext)
  const totalCount = getTotalCart()
  const turnBack = useNavigate()
  return (
    <div className="cart"> 
      <div>
        <h1>Your Card Items</h1>
      </div>
      <div className="cartItems">
        {
          BOOKS.map((book) => {
            if(cartItems[book.id] !== 0){
              return <CartItem data={book}/>
            }
          })
        }
      </div>
      <div className="checkout">
        <p>Subtotal: {totalCount}$</p>
        <button onClick={()=>turnBack("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}
