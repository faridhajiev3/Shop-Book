import React from 'react'
import "./account.css"
import useForm from '../../hooks/useForm'
import { useContext } from 'react'
import AuthProvider, { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
export default function Account() {

  const navigate = useNavigate()

  const { formValue, handleChange } = useForm({
    email: "",
    password: ""
  })

  const { signIn, isAuth } = useContext(AuthContext)


  const handleSubmit = (e) => {
    e.preventDefault()
    signIn(formValue.email, formValue.password)
    console.log(isAuth)
    if(true){
      navigate("/")
    }
  }
  return (
    <div className='body'>
      <div className="container-log">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Login / Sign In</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="email" id="username" name="email" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required onChange={handleChange} />
          </div>
          <button className='button' type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
