import { useState, useEffect } from "react";
import { createContext } from "react";
import { BOOKS } from "../books";


export const BookContext = createContext(null)

const getDefaultCart = () => {
    let card = {}
    for (let index = 0; index < BOOKS.length + 1; index++) {
        card[index] = 0
    }
    return card
}

export default function BookContextProvider(props) {
    const [item, setItem] = useState(BOOKS)
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([]);

    const menuItems = [...new Set(BOOKS.map((val) => val.type))]
    const fitterItems = (cat) => {
        const newItems = BOOKS.filter((newval) => newval.type === cat)
        setItem(newItems)
    }
    useEffect(() => {
        const getCarList = () => {
            setBooks(BOOKS)
            setFilteredBooks(BOOKS)
        };
        getCarList();
    }, []);
    const getTotalCart = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = BOOKS.find((book) => book.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    const addToCard = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCard = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    console.log(cartItems)  

    const setFilterBooks = ({query, type}) => {
        let filtered = books
        if (query) {
            filtered = filtered.filter((book) => book.productName.toLowerCase().includes(query.toLowerCase()))
            setFilteredBooks(filtered)
            // console.log(filteredBooks)
            // console.log(filtered)
            // setBooks(filtered)
            return
        }
        if (type) {
            filtered = filtered.filter((book) => (book.type == type))
            setFilteredBooks(filtered)
            console.log(filtered)
        }
        if(type||query){
            setFilteredBooks(filtered)
            return
        }
        setFilteredBooks(books)
    }



    const contextValue = { filteredBooks: filteredBooks, cartItems, addToCard, removeFromCard, getTotalCart, filteredBooks, setFilterBooks, item, menuItems, fitterItems, setItem }
    return (
        <BookContext.Provider value={contextValue}>{props.children}</BookContext.Provider>
    )
}
