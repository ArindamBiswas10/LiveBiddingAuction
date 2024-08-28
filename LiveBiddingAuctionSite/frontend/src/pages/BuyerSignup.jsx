import React, { useState,useEffect,useMemo } from 'react';
import './PagesCss/BuyerRegister.css'; // Import your stylesheet
import logo from './img/logo.png';
import carousel1 from './img/carousel1.png';
import carousel2 from './img/carousel2.png';
import carousel3 from './img/carousel3.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const BuyerSignup = () => {
  const [isSignUpMode, setSignUpMode] = useState(false);
  const [activeSlider, setActiveSlider] = useState(1);
  const navigate = useNavigate();
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

  useMemo(()=>{
    if(formData2?.role === "seller"){
      
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


  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2({
      ...formData2,
      [name]: value
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  window.localStorage.setItem("username", formData.username);
  // window.localStorage.setItem("username", formData2.username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform backend validation here
    try {
      const res = await axios.post('http://localhost:3000/bidder/signup', { ...formData }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const Data = res.data;


      if (res.status === 201) {
        

        toast.success('Signed In Successfully');
        navigate("/");
      } else {
        
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
      const res = await axios.post('http://localhost:3000/bidder/login', { ...formData2 }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const Data = res?.data;
      
      if (res.status === 201) {
        

        alert('Signed In Successfully');
        navigate("/");
      } else {
        
        alert(Data.errors || Data.message);
      }
    } catch (error) {
      console.error(error.message);
      alert('An error occurred. Please try again.');
    }


    
  };

  const handleToggle = () => {
    setSignUpMode(!isSignUpMode);
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

              <div className="actual-form">
              <div class="identify flex mb-1 p-0 mt-1">
                    <p class="light">Register As:</p>

                    <div class="input-wrap">

                      <select name="role" id="type-id"
                        onChange={handleChange}>
                        
                        <option id="drk" value="bidder">Bidder</option>
                        <option id="drk" value="seller">Seller</option>
                      </select>

                    </div>
                  </div>
               <div className="scrollableArea mt-0 mb-0 h-64 w-96">

                  <div class="input-wrap">
                    <input type="text" class="input-field" autoComplete="off" name="name"
                      onChange={handleChange} />
                    <label className='active'>Name</label>
                  </div>
                  <div className="radio">

                    <div>
                      <p className="light">Profile&nbsp;:</p>
                    </div>
                    <div>
                      <input type="radio" name="profileType" id="public"
                        onChange={handleChange} />
                      <label className="radiolabl" htmlFor="public">Public</label>
                    </div>
                    <div>
                      <input type="radio" name="profileType" id="anonymous"
                        onChange={handleChange} />
                      <label className="radiolabl" htmlFor="anonymous">Anonymous</label>
                    </div>
                  </div>
                  <div class="input-wrap">
                    <input type="text" className="input-field" autoComplete="off" name='username'
                      onChange={handleChange} />
                    <label className='active'>Username</label>
                  </div>
                  <div className="input-wrap">
                    <input type="email" className="input-field" autoComplete="off" name='email'
                      onChange={handleChange} />
                    <label className='active'>Email</label>
                  </div>
                  <div class="input-wrap">
                    <input type="password" className="input-field" autoComplete="off" name='password'
                      onChange={handleChange} />
                    <label className='active'>Password</label>
                  </div>
                  <div class="input-wrap">
                    <input type="text" className="input-field" autoComplete="off" name='phone'
                      onChange={handleChange} />
                    <label className='active'>Phone number</label>
                  </div>
                  <div className="identify">
                    <p className="light">Government id :</p>

                    <div className="input-wrap">

                      <select name="idType" id="type-id"
                        onChange={handleChange}>
                        <option id="nd" value="">Select An Option</option>
                        <option id="drk" value="Adhar-Card">Adhar Card</option>
                        <option id="drk" value="Driving License">Drying License</option>
                        <option id="drk" value="EPIC Card">Epic Card</option>
                      </select>

                    </div>
                  </div>
                  <div className="input-wrap">
                    <label className='active'>id - no </label>
                    <input type="txt" className="input-field" autoComplete="off" name='idNumber'
                      onChange={handleChange} />
                  </div>

                  <div className="input-wrap">
                    <input type="text" className="input-field" autoComplete="off" name='address'
                      onChange={handleChange} />
                    <label className='active'>Address</label>
                  </div>





                  <div className="identify">
                    <p className="light">Account Type :&nbsp;</p>
                    <div className="input-wrap">
                      <select name="accountType" id="type-card"
                        onChange={handleChange}>
                        <option id="nd" value="">Select Card Option</option>
                        <option id="drk" value="Credit Card">Credit Card</option>
                        <option id="drk" value="Debit Card">Debit Card</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-wrap">
                    <label className='active'>Card Holder Name</label>
                    <input type="text" class="input-field" id="card" autoComplete="off" name='cardHolderName'
                      onChange={handleChange} />
                  </div>
                  <div className="input-wrap">
                    <label className='active'>Card Number</label>
                    <input type="text" className="input-field" autoComplete="off" name='cardNumber'
                      onChange={handleChange} />
                  </div>
                  <div className="input-wrap">
                    <label className='active'>Expiry Date</label>
                    <input type="text" className="input-field" id="card" autoComplete="off" name='expiryDate'
                      onChange={handleChange} />
                  </div>
                  <div className="input-wrap">
                    <label className='active'>IFSC Code</label>
                    <input type="text" className="input-field" autoComplete="off" name='ifscCode'
                      onChange={handleChange} />
                  </div>

                </div>
                <input type="submit" value="Register" className="sign-btn" onClick={handleSubmit} />

                <p className="text">
                  By signing up, I agree to the
                  <a href="#">Terms of Services</a> and
                  <a href="#"> Privacy Policy</a>
                </p>
              </div>
            </form>
            <form autoComplete="off" onSubmit={handleLogin} className="sign-in-form" >
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

              <div className="actual-form">
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
                <div class="input-wrap">
                  <input type="text" name='username' class="input-field" autoComplete="off" onChange={handleChange2} />
                  <label className='active'>Username</label>
                </div>

                <div className="input-wrap">
                  <input type="password" name='password' class="input-field" autoComplete="off" onChange={handleChange2} />
                  <label className='active'>Password</label>
                </div>

                <input type="submit" value="Login" className="sign-btn" onClick={handleLogin} />

                <p className="text">
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

export default BuyerSignup;
