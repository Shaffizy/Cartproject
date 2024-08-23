// public/components/Modal.jsx
import React from 'react';

function Modal({ isVisible, onClose, onConfirm }) {
  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white p-6 rounded-lg w-80'>
        <p className='text-lg font-bold mb-4'>Confirm Your Order</p>
        <p className='mb-6'>Are you sure you want to confirm your order?</p>
        <div className='flex justify-between'>
          <button
            className='bg-green-500 text-white px-4 py-2 rounded-lg'
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className='bg-red-500 text-white px-4 py-2 rounded-lg'
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
