import {CART_LIST_REQUEST,
CART_ITEM_ADD_FAIL,
CART_ITEM_ADD_SUCCESS,
CART_ITEM_ADD_REQUEST,
CART_ITEM_UPDATE_SUCCESS,
CART_ITEM_UPDATE_REQUEST,
CART_ITEM_UPDATE_FAIL,
CART_LIST_FAIL,
CART_LIST_SUCCESS,
CART_ITEM_REMOVE_FAIL,
CART_ITEM_REMOVE_REQUEST,
CART_ITEM_REMOVE_SUCCESS} from '../constant/cartConstant';
import nextId from 'react-id-generator';
import db from '../firebase';
import { collection,getDocs, doc, setDoc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

export const listCartItems = () => async (dispatch) =>{
    let  cartData = [];

    async function getCartItems(db){
        const cartcol =  collection(db, "cartItems")
        const cartSnapshot = await getDocs(cartcol);
        const cartList = cartSnapshot.docs.map((doc)=> doc.data())
        return cartList;
    }

    try{
            dispatch({type: CART_LIST_REQUEST});
            cartData = await getCartItems(db);
            dispatch({type:CART_LIST_SUCCESS, payload:cartData})
    } catch(error){
            dispatch({
                type:CART_LIST_FAIL, payload: error.response && error.response.data.message
            ? error.response.data.message
            :error.message
            })
           
    }
}

//adding new item to cart
export const addProductToCart=(new_cart_item)=> async(dispatch)=>{

    const newCartProduct={};

    const newItemId = nextId();

    try{
        dispatch({
           type: CART_ITEM_ADD_REQUEST,
        })

        const cartItemRef = doc(db, 'cartItems', newItemId);
        const docSnap = await getDoc(cartItemRef);

        if(docSnap.exist()){
            const existItem = docSnap.data()
            alert(existItem.title +" is already in your cart")
            dispatch({
                type: CART_ITEM_ADD_FAIL
            })
        }else{
            console.log('no such document');
            await setDoc(doc(db, 'cartItems', newItemId),{
                id: newItemId,
                title: new_cart_item.title,
                price: new_cart_item.price,
                image: new_cart_item.image,
                quantity:1,
            })
            alert("Item "+ new_cart_item.title + " has been added successfully");
            
            newCartProduct = new_cart_item;
            dispatch({
                type: CART_ITEM_ADD_SUCCESS,
                payload:newCartProduct
            })
        }
    } catch(error){
        alert("failed to add "+ new_cart_item.title+ error)
        dispatch({
            type: CART_ITEM_ADD_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })

    }


}