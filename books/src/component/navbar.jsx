import React from 'react'
import { Link } from 'react-router-dom'
import { MdLockPerson } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import "./navbar.css"
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const { user, signOut } = useContext(AuthContext)
    const back = useNavigate()
    const handleLogOut = () => {
        signOut()
        back("/account")
    }
    return (
        <div className="navbar">
            <div className='input-container'>
                <IoSearch size={18} style={{ position: "absolute", left: "5px" }} />
                <input type="text" className='input' placeholder='What are you looking for ? ' />
            </div>
            <div className="links">
                <Link to="/">shop</Link>
                <Link to="/account" className='lock'>
                    <MdLockPerson size={26} style={{ color: "#333" }} />
                </Link>
                <Link to="/card" className='card'>
                    <FaCartShopping size={24} />
                    <p>Basket</p>
                </Link>
                <button className='logout' type='button' onClick={handleLogOut}>Logout</button>
                {/* <div>
                    <span>Welcome {user.name}</span>
                </div> */}
            </div>
        </div>
    )
}
