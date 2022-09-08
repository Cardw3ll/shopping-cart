import {CART_LIST_REQUEST,
    CART_ITEM_ADD_FAIL,
    CART_ITEM_ADD_SUCCESS,
    CART_ITEM_ADD_REQUEST,
    CART_LIST_FAIL,
    CART_LIST_SUCCESS,
} from '../constant/cartConstant';

export const listCartItemsReducer = (state = {cartItems:[]},action)=>{
    switch(action.type){
        case CART_LIST_REQUEST:
            return{
                loading:true,
                cartItems:[]
            }
        case CART_LIST_SUCCESS:
            return{
                loading:false,
                cartItems:action.payload
            }
        case CART_LIST_FAIL:
            return{
                loading:false,
                error:action.payload
            }
            default:
            return state;
    }
}

