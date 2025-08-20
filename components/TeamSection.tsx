import React from 'react';
import './TeamSection.css'; // Importing CSS for styling

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Co-Founder',
    image: '/images/alice.jpg',
  },
  {
    name: 'Bob Smith',
    role: 'Head Designer',
    image: '/images/bob.jpg',
  },
  {
    name: 'Charlie Brown',
    role: 'Lead Developer',
    image: '/images/charlie.jpg',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;