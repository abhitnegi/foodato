import { useSelector } from 'react-redux';
import { addOrders, getView } from '../features/slice/movieSlice';
import { useDispatch } from 'react-redux';

const Combo = (props) => {
    const render = useSelector(getView)
    const dispatch = useDispatch()
    const { value, index, piece } = props;

    const add = (id, count) => {
      if(render)  alert("Kindly Login First")
      
      dispatch(addOrders({id: id, count: count}))

    }

  return (
    <div key={index} className='item'>
      <img src={value.image} alt="" />
      <h3>{value.name}</h3>
      <h4>₹{value.price}{piece}</h4>
      <button onClick={() => add(value.id, value.count)}><b>Add To Cart ({value.count})</b></button>
    </div>
  )
}

export default Combo
