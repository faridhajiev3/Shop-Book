import React, { useContext } from 'react'
import { BookContext } from '../../context/shop-context'

export default function CartItem(props) {
    const { id, productName, price, productImage } = props.data
    const { removeFromCard, cartItems, addToCard } = useContext(BookContext)
    return (
        <div className='cartItem'>
            <img src={productImage} className='img' />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p className='price'>${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCard(id)}> ----- </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItems(Number(e.target.value), id)}/>
                    <button onClick={() => addToCard(id)}> +++ </button>
                </div>
            </div> 
        </div>
    )
}
