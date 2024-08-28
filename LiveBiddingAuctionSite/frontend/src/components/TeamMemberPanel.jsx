import React from 'react';
import Armaan from '../pages/images/Armaan.jpg'
import Harsh from '../pages/images/Harsh.jpeg';
import Prakhar from '../pages/images/Prakhar.jpg'
import Naman from '../pages/images/Naman.jpg'

const TeamMemberPanel = ({ photo, name, role }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <img
        src={photo}
        alt={name}
        className="rounded-full h-24 w-24 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-sm text-[#1A1A1E]">{role}</p>
    </div>
  );
};

const TeamPanel = () => {
  const teamMembers = [
    { id: 1, name: "Armaan Ansari", role: "Frontend Developer", photo: Armaan },
    { id: 2, name: "Harsh Kasana", role: "Full-Stack Developer", photo: Harsh },
    { id: 3, name: "Prakhar Srivasta", role: "UX/UI Designer", photo: Prakhar },
    { id: 4, name: "Naman Gupta", role: "Backend Developer", photo: Naman },
  ];

  return (
    <div className="flex justify-around mt-8">
      {teamMembers.map((member) => (
        <TeamMemberPanel
          key={member.id}
          name={member.name}
          role={member.role}
          photo={member.photo}
        />
      ))}
    </div>
  );
};

export default TeamPanel;