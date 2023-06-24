import React from 'react'
import { PRODUCT } from '../../product'
import './menu.css'
import Take from './Take'

const Give = () => {
  return (
    <div className='Shop'>
        <div className="shop-title">
            <h1>MENU</h1>
            <h1>To Order, Kindly Login</h1>
        </div>
        <div className="shop-product">
            {PRODUCT.map((value,i) => (
                <Take data={value} key={i}/>
            ))}
        </div>
    </div>
  )
}

export default Give
