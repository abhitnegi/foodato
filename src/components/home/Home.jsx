import React from 'react'
import { useSelector } from 'react-redux'
import { getAllOrders } from '../../features/slice/movieSlice'
import picture from "../assets/1.webp"
import picture1 from "../assets/5.webp"
import picture2 from "../assets/1.jpg"
import picture3 from "../assets/5.jpg"
import { Link } from 'react-router-dom'
import "./Home.css"
import Combo from '../../helper/Combo'

export default function Home() {
  let order = useSelector(getAllOrders)
  return (
    <>
    <div className="home">
      <div className="genre">
        <h1 style={{textAlign: "center"}}>GENRE</h1>
        <br />
        <div className="description">
          <Link to='/show/pizza' style={{color: "black"}}><div className="pizza">
            <img src={picture} alt="" />
            <h2>PIZZA</h2>
          </div></Link>
          <Link to='/show/pasta' style={{color: "black"}}><div className="pasta">
            <img src={picture1} alt="" />
            <h2>PASTA</h2>
          </div></Link> 
          <Link to='/show/burger' style={{color: "black"}}><div className="burger">
            <img src={picture2} alt="" />
            <h2>BURGER</h2>
          </div></Link> 
          <Link to='/show/sandwich' style={{color: "black"}}><div className="sandwich">
            <img src={picture3} alt="" />
            <h2>SANDWICH</h2>
          </div></Link> 
        </div>
        <br /><br />
        <div className="combos">
          <h1 style={{textAlign: "center"}}>COMBOS</h1>
          <div className="description">
            {order.map((value, index) => {
              if(value.type === "combo"){
                return <Combo key={index} value={value}/>
              }
            })}
          </div>          
        </div>
        <div className="desserts">
          <h1 style={{textAlign: "center"}}>DESSERTS</h1>
          <br />
          <div className="dessert">
            {order.map((value, index) => {
              if(value.type === "dessert"){
                return <Combo key={index} value={value} piece="/piece"/>
              }
            })}
          </div>          
        </div>
        <br /><br />
        <div className="drinks">
          <h1 style={{textAlign: "center"}}>DRINKS</h1>
          <br />
          <div className="description">
            {order.map((value, index) => {
              if(value.type === "drink"){
                return <Combo key={index} value={value}/>
              }
            })}
          </div>          
        </div>
        <br /><br />
        <div className="starters">
          <h1 style={{textAlign: "center"}}>STARTERS</h1>
          <br />
          <div className="dessert">
            {order.map((value, index) => {
              if(value.type === "starter"){
                return <Combo key={index} value={value}/>
              }
            })}
          </div>          
        </div>
      </div>
    </div>
    </>
  )
}
