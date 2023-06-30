import React from 'react'

const Take = (props) => {
    const { data } = props;
  return (
    <div className='search-div'>
      <div className="product">
        <img src={data.productImage} alt="" className='menu-image'/>
        <div className="description">
            <p>
                <b>{data.title}</b>
            </p>
            <p>
                <b>{data.price}</b>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Take
