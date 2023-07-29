import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { auth, provider } from '../../firebaseconfig'
import { signInWithPopup, signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { ShoppingCart } from "phosphor-react"
import { updateView } from '../../features/slice/movieSlice'
import { useDispatch } from 'react-redux'

export default function Navbar() {
  const dispatch = useDispatch()
  const [ view, setView ] = useState(true)
    
  const [ user ] = useAuthState(auth) 

  const login = async (e) =>{
    e.preventDefault();
    await signInWithPopup (auth, provider);
    dispatch(updateView())
    setView(!view)
  }

  const logout = async () => {
    await signOut(auth);
    window.location.reload(true)
    setView(!view)
  }

  return (
    <>
    <div className='navbar'>
      <div className="left"> 
        <div className="links">
          <Link to='/'>FOODATO</Link>
        </div>
      </div>
      <div className="right">
        {!view && <Link to='/cart'><ShoppingCart size={25} className='cart-icon'/></Link>}
        {view ? <><button onClick={(e) => {login(e)}}>Log in</button></> : <div className='drop'>
        <button className='user'>{user?.displayName}</button>
        <div className="dropdown">
          <Link to='/' id='hello'><button onClick={logout}>Log Out</button></Link>
        </div>
        </div>}
      </div>    
    </div> 
    </>
  )
}