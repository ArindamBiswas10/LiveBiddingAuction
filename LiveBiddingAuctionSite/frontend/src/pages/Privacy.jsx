import React from 'react'
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  return (
    <div className='bg-[#7b3421] flex justify-center items-center w-full h-screen'>
      <div className="container flex flex-col justify-between rounded-[3.3rem] shadow-[0_60px_40px_-30px_rgba(0, 0, 0, 0.27)] w-full h-5/6 mx-auto px-8 py-8 bg-slate-200">
        <div>
          <h1 className="text-4xl font-bold text-[#343a40] pop-h1">Privacy Policy</h1>
        </div>
        <div className="text-[#4e5358] pop-h2">
          <p>
            Welcome to Subasta's Privacy Policy. This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our service.
          </p>
          <h2 className="text-2xl font-bold mt-4">1. Information Collection</h2>
          <p>
            We collect personal information such as your name, email address, and contact details when you create an account on Subasta.
          </p>

          <h2 className="text-2xl font-bold mt-4">2. Usage of Information</h2>
          <p>
            The personal information collected is used to provide and improve our services. We may also use your contact information to send you important updates and notifications related to your account and auctions.
          </p>

          <h2 className="text-2xl font-bold mt-4">3. Data Security</h2>
          <p>
            Your personal information is stored securely, and we implement measures to protect against unauthorized access, alteration, disclosure, or destruction of your data.
          </p>

          <h2 className="text-2xl font-bold mt-4">4. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties. However, we may share information with trusted service providers who assist us in operating our website.
          </p>

        </div>
        <div className="mt-8">
          <Link className="bg-primary text-white px-4 py-2 rounded-md" to="/ContactUs">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
