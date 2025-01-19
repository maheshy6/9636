import React, { useState } from "react";
import "./styles/FoodMenu.css";

const foodItems = [
  { id: 1, name: "Burger", price: 5.99 },
  { id: 2, name: "Pizza", price: 9.99 },
  { id: 3, name: "Soda", price: 1.99 },
  { id: 4, name: "Coffee", price: 2.49 },
];

const FoodMenu = () => {
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  return (
    <div className="menu-container">
      <h2>Food Menu</h2>
      <ul>
        {foodItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => addToOrder(item)}>Add to Order</button>
          </li>
        ))}
      </ul>
      <h3>Order Summary:</h3>
      <ul>
        {order.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodMenu;
