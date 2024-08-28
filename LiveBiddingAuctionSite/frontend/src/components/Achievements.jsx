import React from 'react';
import "../pages/PagesCss/Achievements.css";

const Achievements = () => {
  // Updated achievements data with more details
  const achievementsData = [
    {
      title: 'Total Auction Events',
      count: 50,
      description: 'Hosted successful auction events across various categories.'
    },
    {
      title: 'Items Sold',
      count: 1000,
      description: 'A wide range of items sold, including art, collectibles, and real estate.'
    },
    {
      title: 'Satisfied Customers',
      count: 500,
      description: 'Received positive feedback and testimonials from satisfied buyers.'
    },
    {
      title: 'Total Bids Placed',
      count: 2000,
      description: 'Active bidding activity with bids placed on numerous items.'
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievementsData.map((achievement, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-md p-6 flex flex-col justify-between achievementsElement-${index}`}>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-3xl font-bold text-primary mb-4">{achievement.count}</p>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
