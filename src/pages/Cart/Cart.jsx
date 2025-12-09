import React, { useContext } from 'react';
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { food_list,
    cartitems,
    setcartitems,
    addtocart,
    removefromcart,
    gettotalcartamount } = useContext(StoreContext)

    const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="ci-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitems[item._id] > 0) {
            return (
              <div>
                <div className='ci-title ci-items'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitems[item._id]}</p>
                  <p>${item.price * cartitems[item._id]}</p>
                  <p onClick={() => removefromcart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className='ct-details-section'>
            <div className="ct-details">
              <p>Sub-Total</p>
              <p>${gettotalcartamount()}</p>
              
            </div>
            <hr />
            <div className="ct-details">
              <p>Delivery Fee</p>
              <p>${gettotalcartamount()===0?0:2}</p>
              
            </div>
            <hr />
            <div className="ct-details">
              <b>Total</b>
              <b>${gettotalcartamount()===0?0:gettotalcartamount()+2}</b>
            </div>
          </div>
          <button className={gettotalcartamount()===0?"display-none ":"cart-total-button"} onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>
        </div>
        <div className="promo">
          <div>
            <p>Enter Promo Code Here!</p>
            <div className="promo-input">
              <input type="text" placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
