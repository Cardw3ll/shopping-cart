import React from 'react'

function CartItem({item}) {
  return (
    <div>
        <img src={item.image} alt={item.name} style={{maxWidth:'150px', maxHeight:'150px'}} />
       
        <div>
            <h3>Title</h3>
            <h4>{item.title}</h4>
        </div>

        <div>
        <h3>Price</h3>
        <h4> <span style={{fontWeight:600, marginRight:'2px' }} >R</span>{item.price}</h4>
        </div>


        <div>
            <h3>Qty in Cart</h3>
            <input type="number" min='1' value={item.quantity}/>
        </div>
        <button>Delete</button>
    </div>
  )
}

export default CartItem