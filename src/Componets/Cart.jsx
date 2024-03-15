import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus, FaPlus } from "react-icons/fa";
import { decreaseQuantity, deleteFromCart, increaseQuantity} from '../Storage/Action';
const Cart = () => {
  const cartData = useSelector(state => state.cartList);
  const dispatch = useDispatch();

  const handleDecrement = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const handleIncrement = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDelete = (item) => {
    dispatch(deleteFromCart(item));
  };

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  const getTotalPrice = () => {
    return cartData.reduce((total, item) => total + calculateTotalPrice(item), 0);
  };
  return (
    <div className='cart_name'>
      <div>
        {cartData.length > 0 ? cartData.map(item => (
          <div key={item.id} className='Cart_dec m-3' >
            <div>
              <img src={item.imgUrl} alt="..." />
            </div>
            <div>
              <section>
              <button onClick={() => handleDelete(item)} className='cart_btn'>✖️</button>
                <h3>{item.productName}</h3>
                <h4> ${item.price}</h4>
                <p>Quantity: {item.quantity}</p>
                {/* <p>Total Price: ${calculateTotalPrice(item)}</p> */}
                <button onClick={() => handleIncrement(item)}><FaPlus /></button>
                <button onClick={() => handleDecrement(item)}><FaMinus /></button>
                
              </section>
            </div>
          </div>
        )) : <div>
          <h3 >Your Cart is Empty</h3>
        </div>}
      </div>
      <section>
        <h5 className='cart_price'>Grand Total: ${getTotalPrice()}</h5>
      </section>
    </div>
  );
};

export default Cart;


