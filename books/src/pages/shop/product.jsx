import React from 'react'
import "./product.css"
import Product2 from './product2'
import { useContext } from 'react'
import { BookContext } from '../../context/shop-context'
export default function Product(props) {
    const { id, productName, info, price, productImage, type } = props.data
    const { addToCard, cartItems, filteredBooks } = useContext(BookContext)
    const cartCount = cartItems[id]
    return (
        <div>
            <div className='cardItem'>
                <img className='img' src={productImage} alt="" />
                <div className='contect'>
                    <div>
                        <div>
                            <p className='productName'>{productName}</p>
                            <p className='info'>{info}</p>
                            <p className='type'>{type}</p>
                            <p className='price'>${price}</p>
                        </div>
                        <button className='addToCart' onClick={() => addToCard(id)}>Add To Basket  {cartCount > 0 && <> ({cartCount})</>}</button>
                    </div>
                </div>
            </div>
        </div>
        // <Product2/>
    )
}
