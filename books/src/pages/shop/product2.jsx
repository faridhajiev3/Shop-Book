import React from 'react'

export default function Product2(props) {
    const { id, productName, info, price, productImage } = props.data
    return (
        <div className='cardItem'>
            <img className='img' src={productImage} alt="" />
            <div className='contect'>
                <div>
                    <div>
                        <p className='productName'>{productName}</p>
                        <p className='info'>{info}</p>
                        <p className='price'>${price}</p>
                    </div>
                    <button className='addToCart'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
