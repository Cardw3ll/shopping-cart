import React from 'react'
import CartItem from '../../components/cart/CartItem';
import {useDispatch, useSelector} from 'react-redux';
import {listCartItems} from '../../actions/CartActions'


// const cartItem=[{
//     title:'Slick Bastaard Shirt',
//     price:700,
//     image:'https://render.fineartamerica.com/images/rendered/search/t-shirt/23/30/images/artworkimages/medium/1/monkey-business-nicklas-gustafsson-transparent.png?targetx=-3&targety=-1&imagewidth=430&imageheight=515&modelwidth=430&modelheight=575',
//     qtyInCart:1,
// },

// ]

function CartScreen() {

    const dispatch = useDispatch();
    const cartItemsList = useSelector((state)=>state.cartItemsList);
    const  {loading,error, cartItems} = cartItemsList;

    React.useEffect(()=>{
        dispatch(listCartItems())
    },[dispatch])

  return (
    <div>

        {loading?(
            <div>Loading...</div>
        ):
        error?(
            <div> {error} </div>
          ):
          (
            <>
            
            <h1>Cart</h1>


<div>
{cartItems.map((item)=>(
<CartItem item={item} key={item.id}/>
))}
</div>
            </>
          )
        }



    </div>
  )
}

export default CartScreen;