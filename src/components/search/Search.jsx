import React from 'react'
import { useSelector } from 'react-redux'
import { getAllOrders } from '../../features/slice/movieSlice'
import Result from './Result'
import './Search.css'

const Search = (props) => {
  let count = 0;
  const list = useSelector(getAllOrders);
  const renderList = list.map((value, i ) => {
    let newValue = value.title.split(" ")
    if(value.title.toLowerCase() === props.newSearch.toLowerCase()){     
      count = count+1;
      return <Result data={value} key={i}/>

    }
    else if(newValue[0].toLowerCase() === props.newSearch.toLowerCase()){
      count = count+1;
      return <Result data={value} key={i}/>
    }
  })
  return (
    <div className='search-result'>
      <div className="carts-products">
        {renderList}
      </div>
      <div className="empty">
        {count===0 ? <h1>No Such Coffee Exists</h1> : <></>}
      </div>
    </div>
  )
}

export default Search
