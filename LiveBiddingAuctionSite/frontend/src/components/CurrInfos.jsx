// CurrInfos.jsx
import React, { useEffect } from "react";

const CurrInfos = ({ currentItem, currentBid, bidderInfo, isDelay }) => {
  // const [items, setItems] = useState([{currentItem, currentBid, startingPrice, bidderInfo}])
  const currentItemName = currentItem?.name;
  const currentItemDescription = currentItem?.description;
  const currentItemStartingPrice = currentItem?.startingPrice;
  const userName = localStorage.getItem("username");

  return (
    <div className="container  mx-auto py-8">
      <div className="flex flex-wrap  justify-between items-start">
        {/* Left Side - Current Item Info */}
        <div className="w-full md:w-[60%] mb-4 md:mb-0">
          {currentItem && (
            <>
              {isDelay ? (
                <div className="flex justify-center bg-[#e4e4e46f] rounded-lg shadow-md p-6">
                  <div className="w-2/3">
                    <h2 className="text-xl text-[#5d5c5c] font-semibold mb-4">
                      {currentItemName}
                    </h2>
                    <p className="text-gray-800 mb-2">
                      <span className="font-semibold">
                        {currentBid !== 0 ? "Sold For : " : "Unsold"}
                      </span>
                      {currentBid !== 0 ? `$${currentBid}` : ""}
                    </p>
                    {currentBid !== 0 && (
                      <p className="text-gray-900 mb-2">
                        <span className="font-semibold">Sold To : </span>{" "}
                        {userName}
                      </p>
                    )}
                  </div>
                  <div className="w-1/3 mx-0 size-32 p-0 flex justify-center">
                    <img
                      src={currentItem.itemPic}
                      alt="Description of the image"
                      className="max-w-full h-auto rounded-md opacity-50"
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-[#E8E8E9] rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-2/3">
                      <h2 className="text-xl font-semibold mb-2">
                        Current item : {currentItemName}
                      </h2>
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Description:</span>{" "}
                        {currentItemDescription}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Current Bid:</span> $
                        {currentBid}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Starting Price:</span> $
                        {currentItemStartingPrice}
                      </p>
                    </div>
                    <div className="w-1/3 mx-0 size-32 p-0 flex justify-center">
                      <img
                        src={currentItem.itemPic}
                        alt="Description of the image"
                        className="max-w-full h-auto rounded-md"
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        {/* Right Side - Bidder Info */}
        <div className="w-full md:w-1/3">
          <div className="bg-[#61677b] rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Top Bidder</h2>
            <div className="flex items-center mb-4">
              <img
                src={bidderInfo.profilePicture}
                alt="Bidder Profile"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold">Name:</span> {userName}
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold">Email:</span>{" "}
                  {bidderInfo.email}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-gray-300 mr-4">
                <span className="font-semibold">Rating:</span>{" "}
                {bidderInfo.rating}
              </p>
              {/* Add other bidder information as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrInfos;
