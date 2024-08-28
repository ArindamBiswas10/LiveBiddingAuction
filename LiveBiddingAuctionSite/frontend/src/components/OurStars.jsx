import React, { useRef } from "react";
import "../pages/PagesCss/OurStars.css";

const OurStars = () => {
  const topBuyersRef = useRef(null);
  const topSellersRef = useRef(null);

  // Sample data for top sellers and buyers
  const topSellers = [
    {
      name: "John Doe",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      achievements: "1000+ items sold",
      rating: 5,
    },
    {
      name: "Jane Smith",
      info: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      achievements: "500+ satisfied customers",
      rating: 5,
    },
    {
      name: "Jane Smith",
      info: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      achievements: "500+ satisfied customers",
      rating: 4,
    },
    {
      name: "Michael Johnson",
      info: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      achievements: "Successful auctions in various categories",
      rating: 3,
    },
    // Add more top sellers as needed
  ];

  const topBuyers = [
    {
      name: "Alice Johnson",
      info: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      achievements: "Winner of multiple bidding contests",
      rating: 5,
    },
    {
      name: "Robert Williams",
      info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      achievements: "Active participant in auctions",
      rating: 4,
    },
    {
      name: "Robert Williams",
      info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      achievements: "Active participant in auctions",
      rating: 4,
    },
    {
      name: "Emily Brown",
      info: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      achievements: "Highly rated buyer with prompt payments",
      rating: 3,
    },
    // Add more top buyers as needed
  ];

  // Function to generate star emojis based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i < rating) {
        stars.push("⭐"); // Filled star emoji
      } else {
        stars.push("☆"); // Empty star emoji
      }
    }
    return stars;
  };

  return (
    <div className="bg-gray-100 py-12 w-full">
      <div className="container  w-full">
        <h2 className="text-3xl w-full font-semibold text-center text-gray-800 mb-8">
          Our Stars
        </h2>
        <div className="overflow-hidden mb-8 w-screen">
          {/* Top Buyers */}
          <div
            className="flex mb-4 items-center overflow-x-auto"
            ref={topBuyersRef}
          >
            {topBuyers.map((buyer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg starElementBuyer shadow-md p-6 mr-4"
                style={{ minWidth: "300px" }}
              >
                <p className="text-gray-600 font-bold mb-2">
                  Buyer #{index + 1}
                </p>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {buyer.name}
                </h4>
                <p className="text-gray-600 mb-2">{buyer.info}</p>
                <p className="text-gray-600 mb-2">{buyer.achievements}</p>
                <div className="flex items-center mb-2">
                  {renderStars(buyer.rating).map((star, index) => (
                    <span key={index} className="text-yellow-400">
                      {star}
                    </span>
                  ))}
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-md">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden  w-screen no-scrollbar">
          {/* Top Sellers */}
          <div
            className="flex items-center overflow-x-auto"
            ref={topSellersRef}
          >
            {topSellers.map((seller, index) => (
              <div
                key={index}
                className="bg-white rounded-lg starElementSeller shadow-md p-6 mr-4"
                style={{ minWidth: "300px" }}
              >
                <p className="text-gray-600 font-bold mb-2">
                  Seller #{index + 1}
                </p>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {seller.name}
                </h4>
                <p className="text-gray-600 mb-2">{seller.info}</p>
                <p className="text-gray-600 mb-2">{seller.achievements}</p>
                <div className="flex items-center mb-2">
                  {renderStars(seller.rating).map((star, index) => (
                    <span key={index} className="text-yellow-400">
                      {star}
                    </span>
                  ))}
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-md">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStars;
