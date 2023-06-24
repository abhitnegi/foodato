import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import './Cart.css'
import { getAllOrders } from '../../features/slice/movieSlice';

const Cart = () => {
    const cartList = useSelector(getAllOrders)
    const renderCart = cartList.map((value,id) => {
      if(value.count > 0){
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
    </div>
  )
}

export default Cart
