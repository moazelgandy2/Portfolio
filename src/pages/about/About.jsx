import React from "react";
import { FooterCard } from "../../components";
import { FaRegFileCode } from "../../components/icon/Icons";

import ProfilePic from "../../assets/profilePic.png";
const About = () => {
  return (
    <div className="container mx-auto px-4 max-w-6xl xs:min-w-[95%]">
      <div className="content my-3 py-3 px-3 bg-white rounded-2xl relative">
        <div className="projects w-full grid grid-cols-12 items-start gap-20 px-3 py-5">
          <div className="col-span-6">
            <img src={ProfilePic} alt="Moaz El Gandy" className="rounded-lg w-4/5 shadow-lg" />
          </div>
        </div>
      </div>
      <FooterCard icon={FaRegFileCode} text="My Projects" />
    </div>
  );
};

export default About;
