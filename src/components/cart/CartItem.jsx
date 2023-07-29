import React from 'react'
import { addOrders, removeOrders, updateOrders } from '../../features/slice/movieSlice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
    const { data } = props;
    const dispatch = useDispatch();
    
  return (
    <>
      <div className="cart-products">
        <img src={data.image} alt=""/>
        <div className="cart-description">
            <p>
                <b>{data.name}</b>
            </p>
            <p>
                <b>{data.price}</b>
            </p>
          <div className="container">
            <button onClick={() => dispatch(removeOrders({id : data.id}))}>-</button>
            <input type="text" value={data.count} onChange={(e) => {dispatch(updateOrders({id: data.id, count : e.target.value}))}} />
            <button onClick={() => dispatch(addOrders({id: data.id, count: data.count}))}>+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
