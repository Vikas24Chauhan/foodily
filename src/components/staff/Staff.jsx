import React, { useState } from "react";
import "./Staff.css";
import { Instagram, Facebook, Twitter } from "lucide-react";
import Image1 from "../../assets/images/about/staff-1.jpg";
import Image2 from "../../assets/images/about/staff-2.jpg";
import Image3 from "../../assets/images/about/staff-3.jpg";

const Staff = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Jusica Malina",
      designation: "Pastry Chef",
      image: Image1,
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Jusica Malina",
      designation: "Pastry Chef",
      image: Image2,
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Jusica Malina",
      designation: "Pastry Chef",
      image: Image3,
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <div className="staff-container">
      <div className="staff-content">
        <h5>Our most valuable asset</h5>
        <h1>
          Friendly <span>Staff</span>
        </h1>

        <div className="staff-grid">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="staff-card"
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-inner">
                {/* Image Container */}
                <div className="image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`staff-image ${
                      hoveredCard === member.id ? "hovered" : ""
                    }`}
                  />

                  {/* Overlay */}
                  <div
                    className={`card-overlay ${
                      hoveredCard === member.id ? "visible" : ""
                    }`}
                  >
                    <div className="card-info">
                      <div
                        className={`info-content ${
                          hoveredCard === member.id ? "visible" : ""
                        }`}
                      >
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-designation">
                          {member.designation}
                        </p>

                        {/* Social Media Icons */}
                        <div className="social-links">
                          <a
                            href={member.social.linkedin}
                            className="social-icon instagram"
                            onClick={(e) => e.preventDefault()}
                          >
                            <Instagram size={18} />
                          </a>
                          <a
                            href={member.social.email}
                            className="social-icon facebook"
                            onClick={(e) => e.preventDefault()}
                          >
                            <Facebook size={18} />
                          </a>
                          <a
                            href={member.social.twitter}
                            className="social-icon twitter"
                            onClick={(e) => e.preventDefault()}
                          >
                            <Twitter size={18} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;
