import React from 'react'
import { BOOKS } from '../../books'
import { useContext } from 'react'
import { BookContext } from '../../context/shop-context'

export default function Button() {
    const { menuItems, fitterItems, setItem } = useContext(BookContext)
    return (
        <div>
            {
                menuItems.map(val => (
                    <button onClick={()=>fitterItems(val)}>{val}</button>
                ))
            }
            <button onClick={() => setItem(BOOKS)}>all</button>
        </div>
    )
}
