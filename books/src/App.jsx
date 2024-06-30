import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Shop from './pages/shop/shop'
import Account from './pages/account/account'
import Card from './pages/card/card'
import Navbar from './component/navbar'
import Shopmain from './pages/shop/shopmain'
import BookContextProvider from './context/shop-context'
import AuthProvider from './context/AuthContext'
import Protected from './pages/protected/protected'


function App() {

  return (
    <>
      <AuthProvider>
        <BookContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route element={<Protected/>}>
                <Route path='/' element={<Shop />} />
                <Route path='/card' element={<Card />} />
              </Route>
              <Route path='/account' element={<Account />} />
            </Routes>
          </Router>
        </BookContextProvider>
      </AuthProvider>
    </>
  )
}

export default App


