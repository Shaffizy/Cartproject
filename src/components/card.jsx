// public/components/Card.jsx
import React from 'react';
import add from '/assets/images/icon-add-to-cart.svg';
import decrementation from '/assets/images/icon-decrement-quantity.svg';
import incrementation from '/assets/images/icon-increment-quantity.svg';

function Card({ item, number, setNumber, onAddToCart, showSecondButton, setShowSecondButton }) {
  const handleClick = () => {
    setShowSecondButton(true);
    onAddToCart(item, number);
  };

  const increase = () => {
    const newNumber = number + 1;
    setNumber(newNumber);
    onAddToCart(item, newNumber);
  };

  const decrease = () => {
    if (number > 1) {
      const newNumber = number - 1;
      setNumber(newNumber);
      onAddToCart(item, newNumber);
    } else {
      setShowSecondButton(false);
      onAddToCart(item, 0);
      setNumber(1); // Reset number to 1
    }
  };

  return (
    <div>
      {!showSecondButton && (
        <div className='flex flex-col w-56 mb-10'>
          <img src={item.image.desktop} alt="card" className='w-56 rounded-lg relative mb-0' />
          <button
            onClick={handleClick}
            className='flex flex-row gap-2 bg-white px-5 py-2 rounded-3xl w-40 mx-auto relative bottom-5 border-2 border-grey-800 font-semibold'
          >
            <img src={add} alt="" />
            <p>Add to Cart</p>
          </button>
          <h4>{item.category}</h4>
          <h2 className='font-semibold text-base'>{item.name}</h2>
          <h3 className='font-semibold text-base text-rose-700'>${item.price.toFixed(2)}</h3>
        </div>
      )}
      {showSecondButton && (
        <div className='flex flex-col w-56 mb-10'>
          <img src={item.image.desktop} alt="card" className='w-56 rounded-lg relative mb-0 border-2 border-orange-700' />
          <button className='flex flex-row justify-between items-center bg-orange-700 px-3 py-2 rounded-3xl w-40 mx-auto relative bottom-5 font-semibold'>
            <img
              src={decrementation}
              alt=""
              className='border-2 rounded-3xl border-stone-100 px-1 py-2'
              onClick={decrease}
            />
            <p className='text-stone-100 ml-1'>{number}</p>
            <img
              src={incrementation}
              alt=""
              className='border-2 rounded-3xl border-stone-100 p-1 justify-items-end'
              onClick={increase}
            />
          </button>
          <h4>{item.category}</h4>
          <h2 className='font-semibold text-base'>{item.name}</h2>
          <h3 className='font-semibold text-base text-rose-700'>${item.price.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Card;
