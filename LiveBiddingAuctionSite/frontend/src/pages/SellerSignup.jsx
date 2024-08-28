import React, { useEffect, useState,useMemo } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './PagesCss/BuyerRegister.css'; // Import your stylesheet
import logo from './img/logo.png';
import carousel1 from './img/carousel1.png';
import carousel2 from './img/carousel2.png';
import carousel3 from './img/carousel3.png';

import { useNavigate } from 'react-router-dom';

const SellerSignup = () => {
  const [isSignUpMode, setSignUpMode] = useState(false);
  const [activeSlider, setActiveSlider] = useState(1);

  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    role: '',
    name: '',
    profileType: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    idType: '',
    idNumber: '',
    accountType: '',
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    ifscCode: ''
  });

  const [formData2, setFormData2] = useState({
    role: '',
    username: '',
    password: ''
  })

  const handleToggle = () => {
    setSignUpMode(!isSignUpMode);
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2({
      ...formData2,
      [name]: value
    });
  };
  useMemo(()=>{
    if(formData2?.role === "seller"){
      console.log("SellerLogin")
      navigate('/SellerLogin')
    }
    else{
      navigate('/BuyerLogin')
    }
  },[formData2.role])

  useMemo(()=>{
    if(formData?.role === "seller"){
      navigate('/SellerSignup')
    }
    else{
      navigate('/BuyerSignup')
    }
  },[formData.role])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform backend validation here
    try {
      console.log(formData)
      const res = await axios.post('http://localhost:3000/seller/signup', { ...formData }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const Data = res.data;
      

      if (res.status === 201) {
        console.log(Data.message);

        navigate("/");
        toast.success('Signed In Successfully');
      } else {
        console.log(Data.message);
        toast.error(Data.errors || Data.message);
      }
    } catch (error) {
      console.error(error.message);
      toast.error('An error occurred. Please try again.');
    }


   
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform backend validation here
    try {
      const res = await axios.post('http://localhost:3000/seller/login', { ...formData2 }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const Data = res?.data;
      console.log(Data);
      if (res.status === 201) {
        console.log(Data.message);

        alert('Signed In Successfully');
        navigate("/");
      } else {
        console.log(Data.message);
        alert(Data.errors || Data.message);
      }
    } catch (error) {
      console.error(error.message);
      alert('An error occurred. Please try again.');
    }


    
  };

  
  

  return (
    <main className={`${isSignUpMode ? '' : 'sign-up-mode'} w-full h-screen bg-gradient-to-b from-stone-950 to-stone-700`}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form action="" autoComplete="off" className="sign-up-form">
              <div className="logo">
                <img src={logo} alt="subasta" />
                <h4>SUBASTA</h4>
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account?&nbsp;</h6>
                <a href="#" className="toggle" onClick={handleToggle}>
                  Login
                </a>
              </div>

                   
              <div className="actual-form ">
              <div className="identify flex p-0 mb-1 mt-1">
                     <p class="light">Register As:</p>

                      <select name="role" className=" max-h-6" id="type-id"
                        onChange={handleChange}>
                        
                        <option id="drk" value="seller">Seller</option>
                        <option id="drk" value="bidder">Bidder</option>
                      </select>

                    </div>
                <div className="scrollableArea mt-0 mb-0 h-64 w-96">
                  <div class="input-wrap">
                    <input type="text" className="input-field" name='name' onChange={handleChange} autocomplete="off" />
                    <label className='active'>Name</label>
                  </div>
                  <div class="input-wrap">
                    <input type="text" class="input-field" name='username' onChange={handleChange} autocomplete="off" />
                    <label className='active'>Username</label>
                  </div>
                  <div class="input-wrap">
                    <input type="email" class="input-field" name='email' onChange={handleChange} autocomplete="off" />
                    <label className='active'>Email</label>
                  </div>
                 
                  <div class="input-wrap">
                    <input type="password" class="input-field" name='password' onChange={handleChange} autocomplete="off" />
                    <label className='active'>Password</label>
                  </div>
                  <div class="input-wrap">
                    <input type="text" class="input-field" name='phone' onChange={handleChange} autocomplete="off" />
                    <label className='active'>Phone number</label>
                  </div>
                  <div class="identify">
                    <p class="light">Government id :</p>

                    <div class="input-wrap">

                      <select name="idType" onChange={handleChange} id="type-id">
                        <option id="nd" value="">Select An Option</option>
                        <option id="drk" value="Adhar-Card">Adhar Card</option>
                        <option id="drk" value="Driving License">Drying License</option>
                        <option id="drk" value="EPIC Card">Epic Card</option>
                      </select>

                    </div>
                  </div>
                   
                  <div class="input-wrap">
                    <label className='active'>id - no </label>
                    <input type="txt" name='idNumber' class="input-field" onChange={handleChange} autocomplete="off" />
                  </div>

                  <div class="input-wrap">
                    <input type="text" name='address' class="input-field" onChange={handleChange} autocomplete="off" />
                    <label className='active'>Address</label>
                  </div>

                  <div class="identify">
                    <p class="light">Account Type :&nbsp;</p>
                    <div class="input-wrap">
                      <select name="accountType" id="type-card" onChange={handleChange}>
                        <option id="nd" value="">Select Card Option</option>
                        <option id="drk" value="Credit Card">Credit Card</option>
                        <option id="drk" value="Debit Card">Debit Card</option>
                      </select>
                    </div>
                  </div>
                  <div class="input-wrap">
                    <label className='active'>Card Holder Name</label>
                    <input type="text" name='cardHolderName' class="input-field" id="card" onChange={handleChange} autocomplete="off" />
                  </div>
                  <div class="input-wrap">
                    <label className='active'>Card Number</label>
                    <input type="text" class="input-field" name='cardNumber' onChange={handleChange} autocomplete="off" />
                  </div>
                  <div class="input-wrap">
                    <label className='active'>Expiry Date</label>
                    <input type="text" class="input-field" name='expiryDate' onChange={handleChange} id="card" autocomplete="off" />
                  </div>
                  <div class="input-wrap">
                    <label className='active'>IFSC Code</label>
                    <input type="text" class="input-field" name='ifscCode' onChange={handleChange} autocomplete="off" />
                  </div>

                </div>
                <div className='registerButton relative mb-0 pb-0 border-0'>
                <input type="submit" value="Register"  onClick={handleSubmit} className="sign-btn"/>
                <p class="text" >
                  By signing up, I agree to the
                  <a href="#">Terms of Services</a> and
                  <a href="#">Privacy Policy</a>
                </p>
                </div>
              
              </div>
            </form>
            <form action="" onSubmit={handleLogin} autoComplete="off" className="sign-in-form">
              <div className="logo">
                <img src={logo} alt="subasta" />
                <h4>SUBASTA</h4>
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registered yet?&nbsp;</h6>
                <a href="#" className="toggle" onClick={handleToggle}>
                  Register
                </a>
              </div>
              <div class="identify mb-6">
                  <p class="light">Login As:</p>

                  <div className="input-wrap ">

                    <select name="role" id="type-id"
                      onChange={handleChange2}>
                      
                      <option id="drk" value="bidder">Bidder</option>
                      <option id="drk" value="seller">Seller</option>
                    </select>

                  </div>
                </div>

              <div className="actual-form">

                <div class="input-wrap">
                  <input type="text" name='username' onChange={handleChange2} class="input-field" autocomplete="off" />
                  <label className='active'>Username</label>
                </div>

                <div class="input-wrap">
                  <input type="password" name='password' onChange={handleChange2} class="input-field" autocomplete="off" />
                  <label className='active'>Password</label>
                </div>

                <input type="submit" value="Login" onClick={handleLogin} class="sign-btn" />

                <p class="text">
                  Forgotten your password or you login datails?&nbsp;
                  <a href="#">Get help</a> signing in
                </p>
              </div>
            </form>
          </div>
          <div className="carousel bg-[#1A1A1E]">
            <div className="images-wrapper">
              <img src={carousel1} class="image img-1 show" alt="" />
              <img src={carousel2} class="image img-2" alt="" />
              <img src={carousel3} class="image img-3" alt="" />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group text-[#B2AFA9]">
                  <h2>Real-time bidding auction platform.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default SellerSignup;
