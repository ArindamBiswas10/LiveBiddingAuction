import React, { useState, useEffect } from 'react';
import './MainContainerCss/style.css';
import './MainContainerCss/about.css';
import './MainContainerCss/home.css';
import './MainContainerCss/events.css';
import './MainContainerCss/browse.css';
import './MainContainerCss/links.css';
import logo from "./MainContainerImages/logo.png"
import Home from './Home';
import EventsPage from './EventsPage';
import About from './About';
import BrowsingPage from './BrowsingPage';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userAtom } from '../store/userAtoms/user';

const MainContainer = () => {
  const [active, setActive] = useState(false);
  const [currentLink, setCurrentLink] = useState(0);
  const loggedIn = false;
  const navigate = useNavigate();

  const [user,setUser] = useRecoilState(userAtom);

  const signinHandler = () => {
    navigate('/BuyerLogin');
  }

  const signupHandler = () => {
    navigate('/BuyerSignup');
  }

  const signoutHandler = () => {
    setUser(null);
  }
  

  const toggleMenu = () => {
    setActive(!active);
    if (!active) {
      const elements = document.querySelectorAll('.behind');
      elements.forEach((element, i) => {
        element.id = '';
      });
    }
  };

  const handleLinkClick = (index) => {
    setActive(false);
    const elements = document.querySelectorAll('.behind');
    elements.forEach((element, i) => {
      if (i === index) {
        element.id = 'curr';
      } else {
        element.id = '';
      }
    });
    setCurrentLink(index);
  };

  const handleMouseOver = (index) => {
    const element = document.querySelector(`.behind:nth-child(${index + 1})`);
    element.classList.add('hover');
  };

  const handleMouseOut = (index) => {
    const element = document.querySelector(`.behind:nth-child(${index + 1})`);
    element.classList.remove('hover');
  };

  const loggedInToggle = (loggedIn) => {
    if (!loggedIn) {
      return (
        <div>
          {
          user?<><button className='logout' onClick={signoutHandler}>LOG OUT</button>
          
          {user?.role==="seller"?<Link to="/SellerProfilePage" className=' profile '>Profile</Link>:<Link to="/BuyerProfilePage" className='profile'>Profile</Link>}
          </>
          :
          <>
          <button className="signin" onClick={signinHandler}>LOG<span>&nbsp;IN</span></button>
          <button className="signup" onClick={signupHandler}>REGISTER</button>
          
          </>
          }

          
        
          
        </div>
      )
    } else {
      return (
        <div>
          
          <button className='logout'>LOG OUT</button>
        </div>
      )
    }
  }
  return (
    <section className={active ? 'active' : ''}>
      <nav>
        <menu>
          <div>
            <img src={logo} alt="logo" />
            <div className="logo">SUB<span>ASTA</span></div>
          </div>
          <div>
            {loggedInToggle(loggedIn)}
            <div className="hamburger-menu" onClick={toggleMenu}>
              <div className="bar"></div>
            </div>
          </div>
        </menu>
      </nav>
      <div className="main-con">
        {/* This is the main container where the whole website is hosted, All the components will be loaded here and we will have multiple windows (divs) inside and they will rotate through z-indexing in css with some transitions */}
        {['home', 'browse', 'events', 'about'].map((section, index) => (
          <div
            key={section}
            className={`behind ${section} no-scrollbar`}
            id={`${currentLink === index ? 'curr' : ''}`}
          >
            {index === 0 && <Home />}
            {index === 1 && <BrowsingPage />}
            {index === 2 && <EventsPage />}
            {index === 3 && <About />}
          </div>
        ))}
      </div>
      <div className="links">
        {/* When we hover over these links their corresponding window (div) will come forward to show a prreview of the page and when clicked it will open the corresponding page  */}
        <ul>
          <li className="behindLink homeLink" onMouseOver={() => handleMouseOver(0)} onMouseOut={() => handleMouseOut(0)} onClick={() => handleLinkClick(0)}>
            <a href="#" style={{ '--i': '0.05s' }}>Home</a>
          </li>
          <li className="behindLink browseLink" onMouseOver={() => handleMouseOver(1)} onMouseOut={() => handleMouseOut(1)} onClick={() => handleLinkClick(1)}>
            <a href="#" style={{ '--i': '0.10s' }}>Browse</a>
          </li>
          <li className="behindLink eventsLink" onMouseOver={() => handleMouseOver(2)} onMouseOut={() => handleMouseOut(2)} onClick={() => handleLinkClick(2)}>
            <a href="#" style={{ '--i': '0.15s' }}>Events</a>
          </li>
          <li className="behindLink aboutLink" onMouseOver={() => handleMouseOver(3)} onMouseOut={() => handleMouseOut(3)} onClick={() => handleLinkClick(3)}>
            <a href="#" style={{ '--i': '0.20s' }}>About</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MainContainer;