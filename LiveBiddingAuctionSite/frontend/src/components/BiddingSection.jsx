import React, { useMemo, useState } from "react";
import Timer from "./Timer";

const BiddingSection = ({
  currentBid,
  setCurrentBid,
  currentItem,
  setCurrentItem,
  setRemainingItemsList,
  remainingItemsList,
  isDelay,
  setIsDelay,
  timeLeft,
  setTimeLeft,
}) => {
  const [customBid, setCustomBid] = useState("");
  const startingPrice = Math.round(Number(currentItem?.startingPrice));
  const step = Math.round(0.1 * startingPrice);
  const duration = 15;
  const [raiseBy, setRaiseBy] = useState(0);

  const handleBidChange = (e) => {
    setCustomBid(Math.round(e.target.value));
  };

  const handleCustomBidSubmit = () => {
    // Convert the custom bid to a number
    const customBidNumber = parseFloat(customBid);

    // Check if the custom bid is a valid number
    if (!isNaN(customBidNumber)) {
      if (currentBid === 0) {
        if (customBidNumber >= startingPrice) {
          const roundedCustomBid = Math.round(customBidNumber);
          setCurrentBid(
            Math.round(roundedCustomBid + step - (roundedCustomBid % step))
          );
          setTimeLeft(duration);
        } else {
          alert("You can't bid lower than the Starting Price");
        }
      }
      // Handle raised bid submission
      else if (customBidNumber > currentBid) {
        const roundedCustomBid = Math.round(customBidNumber);
        setCurrentBid(
          Math.round(roundedCustomBid + step - (roundedCustomBid % step))
        );
        setTimeLeft(duration);
      } else {
        alert("You can't bid lower than the Current Bid");
      }
      // Clear the custom bid input field
      setCustomBid("");
    } else {
      // Display an error message if the custom bid is not a valid number
      console.error("Invalid custom bid");
      // You can also display a user-friendly message here if you prefer
      // For example: setCustomBidError("Please enter a valid number");
    }
  };

  function handleLower() {
    if (currentBid + raiseBy <= Math.max(startingPrice, currentBid)) return;
    else {
      setRaiseBy(Math.round(raiseBy - step));
    }
  }

  function handleHigher() {
    if (currentBid + raiseBy < startingPrice) {
      setRaiseBy(Math.round(startingPrice));
      return;
    }
    setRaiseBy(Math.round(raiseBy + step));
  }

  function handlePlaceBid() {
    setCurrentBid(Math.round(currentBid + raiseBy));
    setRaiseBy(0);
    setTimeLeft(duration);
  }

  function handleNextItem() {
    setCurrentItem(remainingItemsList[0]);
    setRemainingItemsList(remainingItemsList.slice(1));
    setCurrentBid(0);
    setRaiseBy(0);
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-xl font-semibold mb-4">Bidding Section</h2>
      <div className="flex justify-between">
        <div className="flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <button
              className={`px-4 py-2 ${
                isDelay ||
                currentBid + raiseBy <= Math.max(startingPrice, currentBid)
                  ? "bg-gray-500"
                  : "bg-gray-800"
              } text-white rounded-md mr-4`}
              onClick={() => handleLower()}
              disabled={
                isDelay ||
                currentBid + raiseBy <= Math.max(startingPrice, currentBid)
              }
            >
              -
            </button>
            <span>{currentBid + raiseBy}</span>
            <button
              className={`px-4 py-2 ${
                isDelay ? "bg-gray-500" : "bg-gray-800"
              } text-white rounded-md ml-4`}
              onClick={() => handleHigher()}
              disabled={isDelay}
            >
              +
            </button>
            <button
              className={`px-4 py-2 ${
                raiseBy === 0 ? "bg-gray-500" : "bg-gray-800"
              } text-white rounded-md ml-4`}
              onClick={() => handlePlaceBid()}
              disabled={raiseBy === 0 || isDelay}
            >
              Place Bid
            </button>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Enter Custom Bid"
              className="px-4 py-2 border rounded-md mr-4"
              value={customBid}
              onChange={handleBidChange}
            />
            <button
              className={`px-4 py-2 ${
                isDelay ? "bg-gray-500" : "bg-gray-800"
              } text-white rounded-md ml-4`}
              onClick={handleCustomBidSubmit}
              disabled={isDelay}
            >
              Submit Custom Bid
            </button>
          </div>
        </div>
        {(remainingItemsList.length || !isDelay) && (
          <Timer
            duration={duration}
            onTimerComplete={handleNextItem}
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            remainingItems={remainingItemsList.length}
            isDelay={isDelay}
            setIsDelay={setIsDelay}
            setCurrentBid={setCurrentBid}
          />
        )}
      </div>
    </div>
  );
};

export default BiddingSection;