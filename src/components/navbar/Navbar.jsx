import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { auth, provider } from '../../firebaseconfig'
import { signInWithPopup, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import { useSelector } from 'react-redux'
import { getAllOrders } from '../../features/slice/movieSlice'
import { ShoppingCart, DotsThree, MagnifyingGlass } from "phosphor-react"

export default function Navbar(props) {
  const list = useSelector(getAllOrders)
  const [ searches, setSearches ] = useState("") 
  const [ showLinks, setShowLinks ] = useState(false) 
  const [ view, setView ] = useState(true)
    
  const [ user ] = useAuthState(auth) 

  const navigate = useNavigate()

  const login = async (e) =>{
    e.preventDefault();
    await signInWithPopup (auth, provider);
    navigate("/order")
    setView(!view)
  }

  const logout = async () => {
    await signOut(auth);
    window.location.reload(true)
    setView(!view)
  }

  const search = (e) => {
    e.preventDefault();
    if(searches === ""){
      alert("Search Bar Empty")
      // navigate("/")
    }
    else{navigate('/search')
    setSearches("")
    props.getData(searches)}
  }
  
  return (
    <>
    <div className='navbar'>
      <div className="left"> 
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          {view ? <Link to='/menu'>Menu</Link> : <Link to='/order'>Order</Link>}  
        </div>
        <button className='button' onClick={() => {setShowLinks(!showLinks)}}><DotsThree size={30}/></button>
      </div>
      <div className="searchbar">
        <input type="text" placeholder='Search....' value={searches} onChange={(e) => setSearches(e.target.value)}/>
        <button className='search' onClick={search}><MagnifyingGlass size={20}/></button>
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