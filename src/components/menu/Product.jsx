import React from 'react'
import { addOrders } from '../../features/slice/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../../features/slice/movieSlice';

export default function Product(props) {
    // const { id, title, price, productImage } = props.data;
    const orderCount = useSelector(getAllOrders)
    const { data } = props;
    const dispatch = useDispatch();
    let renderCount = orderCount.map((value,id) => {
      if (data.id === id){
        return <p className='count'>{value.count}</p>
      }
    })

  return (
    <div>
      <div className="product">
        <img src={data.productImage} alt="" className='product-image'/>
        <div className="description">
            <p>
                <b>{data.title}</b>
            </p>
            <p>
                <b>{data.price}</b>
            </p>
        </div>
        <div className="order-count">
          <button className='order' onClick={() => dispatch(addOrders({id: data.id, count: data.count}))}>Add To Cart ({renderCount})</button>
        </div>
      </div>
    </div>
  )
}