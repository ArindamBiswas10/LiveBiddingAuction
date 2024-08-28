import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditionsPage = () => {
  return (
    <div className='bg-[#7b3421] flex justify-center items-center w-full h-screen'>
      <div className="container flex flex-col justify-between rounded-[3.3rem] shadow-[0_60px_40px_-30px_rgba(0, 0, 0, 0.27)] w-1/2 h-5/6 mx-auto px-8 py-8 bg-slate-200 overflow-y-auto no-scrollbar">
        <div>
          <h1 className="text-4xl font-bold text-[#343a40] pop-h1">Terms and Conditions</h1>
        </div>
        <div className="text-[#4e5358] pop-h2">
          <p>
            Welcome to Subasta! By using our services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before participating in any auctions on our platform.
          </p>
          <h2 className="text-2xl font-bold mt-4">1. Account Registration</h2>
          <p>
            To participate in auctions on Subasta, users must create an account. You agree to provide accurate, current, and complete information during the registration process.
          </p>

          <h2 className="text-2xl font-bold mt-4">2. Bidding and Purchases</h2>
          <p>
            All bids placed on items are binding agreements to purchase the item at the bid price. Ensure that you review and understand the item description, condition, and any additional terms before placing a bid.
          </p>

          <h2 className="text-2xl font-bold mt-4">3. Payment and Fees</h2>
          <p>
            Successful bidders are required to make timely payments for their purchases. Additional fees, such as buyer's premiums or transaction fees, may apply.
          </p>

          <h2 className="text-2xl font-bold mt-4">4. Dispute Resolution</h2>
          <p>
            In the event of a dispute between buyers and sellers, Subasta may provide dispute resolution services. Users agree to cooperate in good faith during the resolution process.
          </p>

        </div>
        <div className="mt-8">
          <Link className="bg-primary text-white px-4 py-2 rounded-md" to="/ContactUs">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
