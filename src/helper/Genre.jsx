import React from 'react'
import { useParams } from 'react-router-dom'
import { getAllOrders } from '../features/slice/movieSlice'
import { useSelector } from 'react-redux'
import Combo from './Combo'

const Genre = () => {
  const { type } = useParams()
  let render = useSelector(getAllOrders)
  return (
    <div className='choose'>
      {render.map((value,i) => {
        if(type === value.type){
          return <Combo value={value} index={i} />
        }
      })}
    </div>
  )
}

export default Genre

