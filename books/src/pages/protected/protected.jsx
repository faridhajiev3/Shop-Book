import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Outlet,Navigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Protected({children}) {
    const {isAuth} = useContext(AuthContext)
    // let navigate = useNavigate()

    // useEffect(()=>{
    //     navigate("/account")
    // }, [isAuth, navigate])
  return isAuth ? <Outlet/> : <Navigate to='account'/>;
}
