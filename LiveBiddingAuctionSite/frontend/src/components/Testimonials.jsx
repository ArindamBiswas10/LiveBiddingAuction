import React from 'react';

const Testimonials = () => {
  // Sample data for testimonials
  const testimonials = [
    { name: 'John Doe', position: 'CEO, Company ABC', message: '"Using this auction site was a game-changer! I found unique items, and the bidding process was a breeze. Definitely my go-to for rare finds!"' },
    { name: 'Jane Smith', position: 'Founder, XYZ Corp', message: '"Auctioning my collectibles here was a joy. The platform is user-friendly, and the community is fantastic. Highly recommend for both buyers and sellers!"' },
    { name: 'Michael Johnson', position: 'Marketing Manager, Company XYZ', message: 'Selling my antique jewelry was stress-free on this site. The interface is intuitive, and the audience is genuinely interested in quality items. Sold within days!"' },
    // Add more testimonials as needed
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Testimonials</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white flex flex-col justify-between rounded-lg shadow-md p-6">
              <div>
              <p className="text-gray-600 mb-4">{testimonial.message}</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-3">
                  <img className="w-10 h-10 rounded-full" src={`https://randomuser.me/api/portraits/men/${index}.jpg`} alt={testimonial.name} />
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
