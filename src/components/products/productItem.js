import React from 'react'

function ProductItem({item}) {
  return (
    <div style={{marginTop:'50px'}}>

    <img style={{width:'100px'}} src={item.image} alt={item.title} />
    <h3>{item.title}</h3>
    <p style={{fontSize:'22px'}}>R{item.price}</p>
    <p>{item.quantity}</p>
    <p>{item.description}</p>
    <button>Add to cart</button>
    </div>
  )
}

export default ProductItem;