import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <img src={item.photo} alt={item.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-bold mb-2">{item.name}</h2>
      <p className="text-gray-500 mb-2">{item.category}</p>
      <p className="text-green-700 font-semibold mb-2">${item.basePrice}</p>
      <p className="text-gray-400">Event ID: {item.eventId}</p>
    </div>
  );
};

export default ItemCard;