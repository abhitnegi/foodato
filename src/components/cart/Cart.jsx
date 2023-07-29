import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import './Cart.css'
import { getAllOrders } from '../../features/slice/movieSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  let view = 0;
  let totalAmount = [];
  let sum =[];
  let abhit = null;

    const cartList = useSelector(getAllOrders)
    const navigate = useNavigate()
    const renderCart = cartList.map((value,id) => {
      if(value.count > 0){
        view=view+1
        return <CartItem data={value} key={id} />
      }
    })
  return (
    <div>
      <div className="cart-title">
        <h1>Cart Item</h1>
      </div>
      <div className="cart-product">
        {renderCart}      
      </div>
      {view>0 && <div className="bill">
        <h4>PRODUCT</h4>          
        <h4>QUANTITY </h4>         
        <h4>PRICE</h4>         
        <h4>TOTAL AMOUNT</h4>
      </div>} 
      <hr />
      {view === 0 && <h1 style={{textAlign: "center"}}>Cart Is Empty</h1>}
      {cartList.map((value,id) => {
        if(value.count > 0){
          let amount = value.price*value.count;
          totalAmount.push(amount)
           
          return (
            <div key={id} className='billing'>
              <b>{value.name}</b>
              <b>{value.count}</b>
              <b>₹{value.price}</b>         
              <b>₹{amount}</b>
              <br />
            </div>           
          )
        }
      })}  
      <hr />
      <div className="total">
        {totalAmount.map((value, index) => {
            abhit += value;
            sum.push(abhit)
        })}
        {sum.map((value,index) => {
          let length = sum.length;
          if(index === length-1){
            return <b>₹{value}</b>
          }
        })}
      </div>
      <hr />
      {view > 0 && <div className="buttons">
        <button onClick={() => navigate('/')}>SHOP MORE</button>
        <button onClick={() => alert('Thank You :)')}>PAYMENT</button>
      </div>}
    </div>
  )
}

export default Cart
