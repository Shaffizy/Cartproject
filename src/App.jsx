// public/App.jsx
import React, { useState } from 'react';
import Modal from './components/modal.jsx';
import Box from './components/box.jsx';
import Card from './components/card.jsx';
import data from './data.json';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showSecondButtonState, setShowSecondButtonState] = useState({});
  const [itemNumbers, setItemNumbers] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddToCart = (item, quantity) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((cartItem) => cartItem.name === item.name);

      if (existingItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.name === item.name ? { ...cartItem, quantity: quantity } : cartItem
        ).filter(cartItem => cartItem.quantity > 0); // Remove items with quantity 0
      } else {
        setShowSecondButtonState((prevState) => ({
          ...prevState,
          [item.name]: true,
        }));
        return [...prevCartItems, { ...item, quantity }];
      }
    });
  };

  const handleRemoveFromCart = (item) => {
    setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.name !== item.name));
    setShowSecondButtonState((prevState) => ({
      ...prevState,
      [item.name]: false,
    }));
    setItemNumbers((prevState) => ({
      ...prevState,
      [item.name]: 1, // Reset the item number to 1
    }));
  };

  const handleConfirmOrder = () => {
    setIsModalVisible(false); // Hide the modal
    setCartItems([]); // Clear the cart
    setShowSecondButtonState({}); // Reset all buttons
    setItemNumbers({}); // Reset item numbers
  };

  const handleCancelOrder = () => {
    setIsModalVisible(false); // Hide the modal
  };

  return (
    <div className='flex flex-col md:flex-row gap-6'>
      <div className='mx-auto md:mx-0'>
        <p className='font-bold text-3xl pb-4'>DESSERT</p>
        <div className='font-sans flex flex-col md:grid grid-rows-3 grid-flow-col gap-4 w-7/12'>
          {data.map((item, index) => (
            <Card
              key={index}
              item={item}
              number={itemNumbers[item.name] || 1}
              setNumber={(newNumber) => setItemNumbers((prevState) => ({
                ...prevState,
                [item.name]: newNumber,
              }))}
              onAddToCart={handleAddToCart}
              showSecondButton={showSecondButtonState[item.name] || false}
              setShowSecondButton={(show) => setShowSecondButtonState((prevState) => ({
                ...prevState,
                [item.name]: show,
              }))}
            />
          ))}
        </div>
      </div>
      <Box 
        cartItems={cartItems} 
        onRemoveFromCart={handleRemoveFromCart}
        onConfirmOrder={() => setIsModalVisible(true)} // Show the modal when confirming order
      />
      <Modal
        isVisible={isModalVisible}
        onClose={handleCancelOrder}
        onConfirm={handleConfirmOrder}
      />
    </div>
  );
}

export default App;
