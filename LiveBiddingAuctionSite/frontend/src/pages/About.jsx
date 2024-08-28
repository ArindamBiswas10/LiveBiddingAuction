import React from "react";
import NavSpace from "../components/NavSpace";
import Logo from "./MainContainerImages/logo-name-tagline.png";
import TeamMemberPanel from "../components/TeamMemberPanel";

const About = () => {
  return (
    <div>
      <NavSpace />
      <div className=" container mx-auto mt-8 flex flex-wrap items-center">
        {/* Left side - Text content */}
        <div className="w-full p-4">
          <div className="flex">
            <div className="flex-1">
              <h2 className="text-[#262624] text-3xl font-bold mb-4">
                Welcome to SUBASTA
              </h2>

              {/* Mission and Vision */}
              <div className="mb-4">
                <h3 className="text-[#373835] text-xl font-semibold mb-2">
                  Our Mission
                </h3>
                <p className="text-[#1A1A1E]">
                  Empowering seamless and engaging auction experiences, SUBASTA
                  is dedicated to fostering transparency, trust, and community
                  engagement, connecting buyers and sellers in real-time bidding
                  events across diverse categories.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-[#373835] text-xl font-semibold mb-2">
                  Our Vision
                </h3>
                <p className="text-[#1A1A1E]">
                  SUBASTA envisions becoming the leading global auction
                  platform, known for revolutionizing the online bidding
                  experience. Our long-term goal is to create a dynamic
                  marketplace that transcends boundaries, connecting individuals
                  worldwide through innovative features, trusted transactions,
                  and a vibrant community of buyers and sellers across diverse
                  categories.
                </p>
              </div>

              {/* Our Story */}
              <div className="mb-4">
                <h3 className="text-[#373835] text-xl font-semibold mb-2">
                  Our Story
                </h3>
                <p className="text-[#1A1A1E]">
                  SUBASTA emerged from our love for auction shows like Storage
                  Wars and Pawn Stars on History TV 18. Inspired by the thrill
                  of bidding for hidden treasures, we envisioned a global
                  platform where anyone could engage in the excitement of live
                  auctions. We value the bidder's identity and provide them with
                  an option to hide it, as we realised that some people don't
                  want to reveal what they buy.
                </p>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <img
                src={Logo}
                className="w-4/5 h-4/5 bg-[#1A1A1E] rounded-3xl px-8 py-8"
              />
            </div>
          </div>

          {/* Team */}
          <div className="mb-4">
            <h3 className="text-[#262624] text-2xl font-bold mb-2 text-center">
              Our Team
            </h3>
            <TeamMemberPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
