import React, { useEffect, useState } from "react";
import "./PagesCss/BuyerProfilePage.css";
import Profile from "./images/profile_icon.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/userAtoms/user";

const ProfilePage = () => {
  const user = useRecoilValue(userAtom);
  console.log(user);
  let buyer;
  // if(user?.role==="buyer"){
  if (true) {
    buyer = user;
  } else {
    buyer = null;
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-b from-stone-950 to-stone-700">
      <div className="container flex flex-col overflow-auto no-scrollbar justify-between rounded-[3.3rem] shadow-[0_60px_40px_-30px_rgba(0, 0, 0, 0.27)] w-full h-[90%] mx-auto px-8 py-8 bg-[#ffffffe0]">
        <div className="flex justify-between items-center bg-[#B86614] rounded-3xl px-4 py-4">
          <div>
            <h1 className="text-4xl text-[#B2AFA9] pop-h1">Profile</h1>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Link
              className="bg-[#1a1a1e] text-white px-4 py-2 rounded-md h-10 mr-4"
              to="/UpgradePlan"
            >
              Upgrade Plan
            </Link>
            <img
              src={Profile}
              alt="Profile Icon"
              className="w-20 h-20 rounded-full"
            />
            <button className="ml-2 text-gray-100 hover:text-gray-200">
              <i className="fas fa-pencil-alt"></i>
            </button>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-2xl mb-4 text-[#1A1A1E] pop-h2">
              Personal Info
            </h2>
          </div>
          <div className="flex flex-wrap relative">
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative text-[#262624] flex-shrink mr-2 pop-h3">
                Name:
              </label>
              <p className="block text-lg relative text-[#373835] flex-shrink mr-2 pop-h4 ">
                {buyer?.name}
              </p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative text-[#262624] flex-shrink mr-2 pop-h3">
                Profile Type:
              </label>
              <p className="block text-lg relative  text-[#373835] flex-shrink mr-2 pop-h4">
                {buyer?.profileType}
              </p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative text-[#373835] flex-shrink mr-2 pop-h3">
                Email:
              </label>
              <p className="block text-lg relative text-[#373835] flex-shrink mr-2 pop-h4">
                {buyer?.email}
              </p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative  text-[#262624] flex-shrink mr-2 pop-h3">
                Phone number:
              </label>
              <p className="block text-lg relative  text-[#373835] flex-shrink mr-2 pop-h4">
                {buyer?.phone}
              </p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative  text-[#262624] flex-shrink mr-2 pop-h3">
                Address:
              </label>
              <p className="block text-lg relative  text-[#373835] flex-shrink mr-2 pop-h4">
                {buyer?.address}
              </p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative  text-[#262624] flex-shrink mr-2 pop-h3">
                ID Type:
              </label>
              <p className="block text-lg relative text-[#373835] flex-shrink mr-2 pop-h4">
                {buyer?.idType}
              </p>
            </div>
            <div className="w-1/2 mb-4 flex justify-start items-center">
              <label className="block text-lg relative  text-[#262624] flex-shrink mr-2 pop-h3">
                ID Number:
              </label>
              <p className="block text-lg relative text-[#373835] flex-shrink mr-2 pop-h4">
                {buyer?.idNumber}
              </p>
            </div>
          </div>
          <button className="bg-[#1a1a1e] text-white px-4 py-2 rounded-md">
            Edit Profile
          </button>
        </div>
        <div className="mt-8">
          <div>
            <h2 className="text-2xl mb-4 text-[#1a1a1e] pop-h2">
              Account Info
            </h2>
          </div>
          <div className="flex flex-wrap relative">
            <div className="w-1/2 mb-4 flex">
              <label className="block text-lg relative  text-[#262624] flex-shrink-0 mr-2 pop-h3">
                Card Type:
              </label>
              <p className="block text-lg relative  text-[#373835] flex-shrink mr-2 pop-h4">
                {buyer?.accountType}
              </p>
            </div>
            <div className="w-1/2 mb-4 flex">
              <label className="block text-lg relative  text-[#262624] flex-shrink-0 mr-2 pop-h3">
                Card Holder Name:
              </label>
              <p className="block text-lg relative text-[#373835] flex-shrink mr-2 pop-h4">
                {buyer?.cardHolderName}
              </p>
            </div>
            <div className="w-1/2 mb-4 flex">
              <label className="block text-lg relative  text-[#262624] flex-shrink-0 mr-2 pop-h3">
                Card Number:
              </label>
              <p className="block text-lg relative  text-[#373835] flex-shrink mr-2 pop-h4">
                {buyer?.cardNumber}
              </p>
            </div>
          </div>
          <button className="bg-[#1a1a1e] text-white px-4 py-2 rounded-md">
            Edit Account Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
