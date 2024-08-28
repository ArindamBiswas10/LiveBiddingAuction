import React, { useState, useEffect } from "react";

const LiveData = ({
  remainingItemsList,
  currentBid,
  currentItem,
  setCurrentItem,
  setRemainingItemsList,
  setCurrentBid,
}) => {
  function handleNextItem() {
    setCurrentItem(remainingItemsList[0]);
    setRemainingItemsList(remainingItemsList.slice(1));
    setCurrentBid(0);
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4">Live Data</h2>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        {remainingItemsList.length === 0 ? (
          <h3 className="text-center text-xl">No more Items remaining</h3>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Item Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Item Pic
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Starting Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {remainingItemsList.map((item) => (
                <tr key={item._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={item.itemPic}
                      alt={item.name}
                      className="w-12 h-12"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.startingPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default LiveData;
