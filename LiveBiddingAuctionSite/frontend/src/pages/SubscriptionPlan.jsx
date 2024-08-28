import React, { useState } from 'react';
import './PagesCss/SubscriptionPlan.css'; // Import your stylesheet
import logo from './MainContainerImages/logo-name.png';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SellerSignup = () => {
  const [isSignUpMode, setSignUpMode] = useState(true);
  const [activeSlider, setActiveSlider] = useState(1);
  const [user, setUser] = useState('');
  console.log(user);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [subscription, setSubscription] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setSignUpMode(!isSignUpMode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    if (!user || !email || !address || !subscription) {
        return toast.error('Please fill in all required fields');
    }

    try {
        const res = await axios.post('http://localhost:3000/subscription/new', {
            name: user,
            email: email,
            address: address,
            subscription: subscription
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Handle success response
        if (res.data.success) {
            toast.success(res.data.message);
            navigate("/");
        } else {
            toast.error(res.data.message);
        }
    } catch (error) {
        console.error('Error while submitting subscription:', error);
        toast.error('Failed to submit subscription');
    }
}


  return (
    <main className={`${isSignUpMode ? 'sign-up-mode' : ''} w-full h-screen bg-gradient-to-b from-stone-950 to-stone-700 mr-4 `}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form className="sign-up-form" onSubmit={handleSubmit} >
            <p className='mb-16 text-4xl'>Subscription Plan</p>
              <div className="actual-form">
                <div className="scrollableArea">
                  
                  <div className="input-wrap">
                    <input type="text" className="input-field" onChange={(e) => {
                      setUser(e.target.value)
                    }} />
                    <label className='active '>Username:</label>
                  </div>
                  <div className="input-wrap">
                    <input type="text" className="input-field" onChange={(e) => {
                      setEmail(e.target.value)
                    }} />
                    <label className='active'>Email</label>
                  </div>
                  {/* <div class="input-wrap itimg">
                    <input type="file" class="input-field" autocomplete="off" />
                    <label className='active'>Item Image</label>
                  </div> */}
                  <div className="input-wrap">
                    <input type="text" className="input-field" onChange={(e) => {
                      setAddress(e.target.value)
                    }} />
                    <label className='active'>Address</label>
                  </div>

                  <div className="identify">
                    <p className="light">Subscription :</p>

                    <div className="input-wrap">

                      <select name="id" id="type-id" onChange={(e) => {
                        setSubscription(e.target.value)
                      }}>
                        <option id="nd" value="">None(current Subscription)</option>
                        <option id="drk" value="BasicPlan">Basic</option>
                        <option id="drk" value="Premium">Premium</option>
                      </select>

                    </div>
                  </div>

                </div>
                <div className='mt-4'>
                <input type="submit" value="Submit" className="sign-btn" />
                </div>
                <p class="text">
                  By signing up, I agree to the
                  <a href="#">Terms of Services</a> and
                  <a href="#"> Privacy Policy</a>
                </p>
              </div>
            </form>
            {/* <form action="index.html" autoComplete="off" className="sign-in-form">
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

                <div class="input-wrap">
                  <input type="text" class="input-field" autocomplete="off" />
                  <label className='active'>Username</label>
                </div>

                <div class="input-wrap">
                  <input type="password" class="input-field" autocomplete="off" />
                  <label className='active'>Password</label>
                </div>

                <input type="submit" value="Login" class="sign-btn" />

                <p class="text">
                  Forgotten your password or you login datails?&nbsp;
                  <a href="#">Get help</a> signing in
                </p>
              </div>
            </form> */}
          </div>
          <div className="carousel flex flex-col justify-evenly overflow-y-auto bg-[#1A1A1E]">
            {/* <div className="images-wrapper">
              <img src={carousel1} class="image img-1 show" alt="" />
            </div> */}

            {/* <div className="text-slider"> */}
            {/* <div className="text-wrap"> */}
            {/* <div className="text-group overflow-y-auto h-max-[50px]"> */}
            <div className="log flex justify-center items-center">
              <img src={logo} className="inline-block" />
            </div>
            <div className="info flex justify-between mx-3 my-3">
              <div className="Type w-2/5 ml-4">
                <p className="plan font-semibold text-xl text-[#B2AFA9]">
                  None:
                </p>
              </div>
              <div className="Feature w-3/5 mr-auto ">
                <ul className="text-left text-[#F3C291]">
                  <li >Free delivery for first 5 items</li>
                  <li>Price: Free</li>
                </ul>
              </div>
            </div>
            <div className="info flex justify-between mx-3 my-3">
              <div className="Type w-2/5 ml-4">
                <p className="plan font-semibold text-xl text-[#B2AFA9]">
                  Basic Plan:
                </p>
              </div>
              <div className="Feature w-3/5 mr-auto">
                <ul className="text-left text-[#F3C291]">
                  <li >Free delivery for 20 items</li>
                  <li>Price: $10/month</li>
                  <li>Direct Contact with seller</li>
                </ul>
              </div>
            </div>
            <div className="info flex justify-between mx-3 my-3">
              <div className="Type w-2/5 ml-4">
                <p className="plan font-semibold text-xl text-[#B2AFA9]">
                  Premium:
                </p>
              </div>
              <div className="Feature w-3/5 mr-auto ">
                <ul className="text-left text-[#F3C291]">
                  <li >Free and Fast delivery</li>
                  <li>Price: $18/month</li>
                  <li>Direct Contact with seller</li>
                </ul>
              </div>
            </div>


            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>

    </main>
  );
};

export default SellerSignup;
