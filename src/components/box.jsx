// public/components/Box.jsx
import React from 'react';
import image from '/assets/images/icon-carbon-neutral.svg';
import empty from '/assets/images/illustration-empty-cart.svg';

function Box({ cartItems, onRemoveFromCart, onConfirmOrder }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='bg-white h-fit w-5/12 p-6 rounded-lg w-full md:mx-0'>
      <p className='font-bold text-2xl text-rose-700 mb-6'>Your Cart ({cartItems.length})</p>
      <div>
        {cartItems.length === 0 ? (
          <div>
            <img src={empty} alt="" className='mx-auto' />
            <p className='text-center my-4 font-semibold text-rose-900'>
              Your added items will appear here
            </p>
          </div>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className='my-2 border-b-2 py-4'>
                  <p className='font-semibold text-lg text-black-700 mt-4'>{item.name}</p> 
                  <div className='flex flex-row justify-between items-center'>
                    <p>
                      <span className='font-bold text-base text-rose-700 mt-4 mr-3'>{item.quantity}x</span>
                      ${item.price.toFixed(2)}
                    </p>   
                    <p className='font-semibold'>${(item.price * item.quantity).toFixed(2)}</p>  
                    <button 
                      className='text-red-500 hover:text-red-700 ml-4' 
                      onClick={() => onRemoveFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className='flex flex-row items-center justify-between py-4'>
              <p className='text-lg'>Total Price:</p>
              <p className='font-bold text-lg'>
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <div className='flex flex-row gap-2 px-20 py-3 bg-pink-100 rounded-lg'>
              <img src={image} alt="" className=''/>
              <p>This is a carbon-neutral delivery</p>
            </div>
            
            <button
              className='flex flex-row justify-between items-center bg-orange-700 px-3 py-2 rounded-3xl w-40 mx-auto my-6 relative font-semibold w-8/12'
              onClick={onConfirmOrder} // Trigger the modal
            >
              <p className='mx-auto text-stone-100'>Confirm Order</p>
            </button>
  
          </>
        )}
      </div>
    </div>
  );
}

export default Box;
