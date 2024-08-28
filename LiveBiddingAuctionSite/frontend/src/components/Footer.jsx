import React from 'react';
import logo from '../pages/MainContainerImages/logo-name-tagline.png';
import instagram from '../pages/images/instagram.png';
import twitter from '../pages/images/twitter.png';
import linkedin from '../pages/images/linkedin.png';

const Footer = () => {
  const footerLinks = [
    {
      title: "About",
      links: [
        { name: "About Us" },
        { name: "Our Team" },
        { name: "Contact Us" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Real-Time Bidding" },
        { name: "Comprehensive Auction Listings" },
        { name: "Bidder Verification" },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: "Terms & Conditions" },
        { name: "Privacy Policy" },
      ],
    }
  ];

  const socialMedia = [
    { id: "linkedin", icon: linkedin, link: "#" },
    { id: "twitter", icon: twitter, link: "#" },
    { id: "instagram", icon: instagram, link: "#" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-8">
          <div className="flex-shrink-0 flex flex-col justify-between items-center">
            <img src={logo} alt="Your Logo" className="w-48 h-auto" />
            <p className="mt-4 max-w-[312px] text-center">
              A comprehensive auction platform for real-time bidding experiences.
            </p>
          </div>
          <div className="flex justify-between mt-6 md:mt-0">
            {footerLinks.map((footerlink) => (
              <div key={footerlink.title} className="w-full md:w-1/4 lg:w-1/6 mr-8 flex-grow">
                <h4 className="font-medium text-lg mb-4">{footerlink.title}</h4>
                <ul className="list-none">
                  {footerlink.links.map((link, index) => (
                    <li key={link.name} className="mb-2">
                      <a href="#" className="hover:text-blue-500">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} SUBASTA. All rights reserved.</p>
          <div className="flex">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-6 h-6 mr-4 cursor-pointer`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
