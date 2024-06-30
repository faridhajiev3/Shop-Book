import React, { useReducer } from 'react'
import { createContext } from 'react'


const AUTH_USER = {
    name: "Ferid",
    email: "ferid@haciyev.com",
    password: "ferid123"
}

const AuthContext = createContext()

const intialState = {
    isAuth: false,
    user: {}
}


function reducer(state = intialState, action) {
    if (action.type === "login") {
        return {
            ...state,
            user: action.payload,
            isAuth: true,
        }
    } else if (action.type === "logout") {
        return {
            ...state,
            isAuth: false,
            user: null
        }
    }
}

export default function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, intialState)
    function signIn(email, password) {
        if(AUTH_USER.email == email && AUTH_USER.password == password){
            dispatch({type: "login", payload: AUTH_USER})
        }
    }

    function signOut() {
        dispatch({type: "logout"})
    }

    return <AuthContext.Provider value={{signIn, signOut, user: state.user, isAuth: state.isAuth}}>{children}</AuthContext.Provider>
}

export {AuthProvider, AuthContext} ;