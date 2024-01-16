import { useDispatch, useSelector } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { cartSlice } from '../utils/cartSlice';
import { useState } from 'react';

const Cart = () => {
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log('cart items: ');
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(cartSlice.actions.clearCart());
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice =
      item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100;
    return total + itemPrice;
  }, 0);

  return (
    <div className="mx-auto text-center p-10 m-10 w-[50%]">
      <h2 className="font-bold text-2xl mb-5">You are at Cart Screen</h2>
      <button
        className="bg-red-600 p-2 m-2 rounded-sm text-white"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <div className="items-center mx-auto m-6 p-6 ">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/703/647/original/cooking-pot-logo-design-for-business-and-company-vector.jpg"
            alt="adc.png"
            className="w-108 h-80 mb-4 p-2 mx-auto items-center"
          />
          <h2 className="font-bold text-lg">Your cart is empty</h2>
          <p>You can go to home page to view more restaurants</p>
        </div>
      ) : (
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-200 rounded-b-lg ">
          {cartItems && Array.isArray(cartItems)
            ? cartItems.map((item, index) => (
                <div key={index}>
                  <div
                    // key={item.card.info.id}
                    key={index}
                    className="flex justify-between  border-gray-300 p-2 m-2   border-b-2"
                  >
                    <div className="">
                      <div className="flex justify-around">
                        <label
                          onClick={() => handleAddItem(item)}
                          className="absolute  flex items-center justify-center  bg-black m-2 p-2 rounded-lg text-white text-sm   w-14 h-8"
                        >
                          Add +
                        </label>
                      </div>
                      <img
                        src={CDN_URL + item?.card?.info?.imageId}
                        className="w-28 h-28 p-2 mb-4 rounded-lg shadow-lg  border border-gray-300 border-lg "
                      />
                    </div>

                    <div className="w-[450px]">
                      <div className="py-2">
                        <span> {item?.card?.info?.name} </span>
                        <span>
                          ₹
                          {item?.card?.info?.defaultPrice
                            ? item?.card?.info?.defaultPrice / 100
                            : item?.card?.info?.price / 100}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      )}
      <div>
        <h2>Total amount: {totalPrice}</h2>
      </div>
    </div>
  );
};

export default Cart;
