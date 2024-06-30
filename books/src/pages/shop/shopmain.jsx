import React, { useState } from 'react'
import Product from './product'
import { BOOKS, NEWS } from '../../books'
import { useContext } from 'react'
import { BookContext } from '../../context/shop-context'
import News from './news'
import useForm from '../../hooks/useForm'
import Button from '../button/button'

export default function Shopmain() {
    const { filteredBooks, setFilterBooks, item, } = useContext(BookContext)
    const { formValue, handleChange } = useForm({
        query: "",
        type: ""
    })

    const onSubmitHandle = (e) => {
        e.preventDefault()
        setFilterBooks(formValue)
    }
    return (
        <div className='shop-container'>
            <p className='sellers'>Top Sellers</p>
            <form className='formSearch' onSubmit={onSubmitHandle}>
                <select name="type" onChange={handleChange} onSubmit={onSubmitHandle}>
                    <option value="">All</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Romance">Romance</option>
                    <option value="MysTery">MysTery</option>
                    <option value="Horror">Horror</option>
                </select>
                <input type="text" name='query' onChange={handleChange}/>
                <button type='submit'>top</button>
            </form>
            <div>  
                {/* <Button/> */}
                <div className="books">
                    {
                        filteredBooks.map((book) => (
                            <Product key={book.id}  data={book} />
                        ))
                    }
                </div>
            </div>
            <h2 className='port'>News</h2>
            <div>
                <div className="news">
                    {
                        NEWS.map((item) => (<News key={item.id} port={item } />))
                    }
                </div>
            </div>
        </div>
    )
}
