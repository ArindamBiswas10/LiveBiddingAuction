import React, { useEffect,useState } from 'react';
import './PagesCss/BuyerProfilePage.css';
import Profile from './images/profile_icon.png';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../store/userAtoms/user';

const ProfilePage = () => {
  const user = useRecoilValue(userAtom)
  console.log(user);
  let seller;
  if(user?.role==="seller"){
    seller=user;
    console.log("seller",seller);
  }
  else{
    seller=null;
  }

  
  

  return (
    <div className=' bg-[#7b3421] flex justify-center items-center w-full h-screen'>
      <div className="container flex flex-col overflow-auto no-scrollbar justify-between rounded-[3.3rem] shadow-[0_60px_40px_-30px_rgba(0, 0, 0, 0.27)] w-full h-[90%] mx-auto px-8 py-8 bg-slate-200">
        <div className="flex justify-between items-center bg-[#a066569a] rounded-3xl px-4 py-4">
          <div>
            <h1 className="text-4xl text-[#343a40] pop-h1">Profile</h1>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Link className="bg-primary text-white px-4 py-2 rounded-md h-10 mr-4" to="/UpgradePlan">Upgrade Plan</Link>
            <img src={Profile} alt="Profile Icon" className="w-20 h-20 rounded-full" />
            <button className="ml-2 text-gray-100 hover:text-gray-200"><i className="fas fa-pencil-alt"></i></button>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-2xl mb-4 text-[#4e5358] pop-h2">Personal Info</h2>
          </div>
          <div className="flex flex-wrap relative">
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative text-[#5c5757] flex-shrink mr-2 pop-h3">Name:</label>
              <p className='block text-lg relative text-[#5c5757] flex-shrink mr-2 pop-h4 '>{seller?.name}</p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative text-[#5c5757] flex-shrink mr-2 pop-h3">Profile Type:</label>
              <p className='block text-lg relative  text-[#5c5757] flex-shrink mr-2 pop-h4'>{seller?.profileType}</p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative text-[#5c5757] flex-shrink mr-2 pop-h3">Email:</label>
              <p className='block text-lg relative text-[#5c5757] flex-shrink mr-2 pop-h4'>{seller?.email}</p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative  text-[#5c5757] flex-shrink mr-2 pop-h3">Phone number:</label>
              <p className='block text-lg relative  text-[#5c5757] flex-shrink mr-2 pop-h4'>{seller?.phone}</p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative  text-[#5c5757] flex-shrink mr-2 pop-h3">Address:</label>
              <p className='block text-lg relative  text-[#5c5757] flex-shrink mr-2 pop-h4'>{seller?.address}</p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative  text-[#5c5757] flex-shrink mr-2 pop-h3">ID Type:</label>
              <p className='block text-lg relative text-[#5c5757] flex-shrink mr-2 pop-h4'>{seller?.idType}</p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center" >
              <label className="block text-lg relative  text-[#5c5757] flex-shrink mr-2 pop-h3">ID Number:</label>
              <p className='block text-lg relative text-[#5c5757] flex-shrink mr-2 pop-h4'>{seller?.idNumber}</p>
            </div>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-md">Edit Profile</button>
        </div>
        <div className="mt-8">
          <div>
          <h2 className="text-2xl mb-4 text-[#4e5358] pop-h2">Account Info</h2>
          </div>
          <div className="flex flex-wrap relative">
            <div className="w-1/2 mb-4 flex">
              <label className="block text-lg relative  text-[#5c5757] flex-shrink-0 mr-2 pop-h3">Card Type:</label>
              <p className='block text-lg relative  text-[#5c5757] flex-shrink mr-2 pop-h4'>{seller?.accountType}</p>
            </div>
            <div className="w-1/2 mb-4 flex">
              <label className="block text-lg relative  text-[#5c5757] flex-shrink-0 mr-2 pop-h3">Card Holder Name:</label>
              <p className='block text-lg relative text-[#5c5757] flex-shrink mr-2 pop-h4'>{seller?.cardHolderName}</p>
            </div>
            <div className="w-1/2 mb-4 flex">
              <label className="block text-lg relative  text-[#5c5757] flex-shrink-0 mr-2 pop-h3">Card Number:</label>
              <p className='block text-lg relative  text-[#5c5757] flex-shrink mr-2 pop-h4'>{seller?.cardNumber}</p>
            </div>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-md">Edit Account Info</button>
        </div>
      </div>
    </div>

  );
};

export default ProfilePage;
