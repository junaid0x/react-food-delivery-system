import React from 'react';
import { useContext } from 'react';
import './Placeorder.css'
import { StoreContext } from '../../Context/StoreContext';
import '../Cart/Cart.css'


const Placeorder = () => {

  const {gettotalcartamount } = useContext(StoreContext)


  return (
    <form className="place-order">
      <div className="po-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Address' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="po-right">
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
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default Placeorder;
