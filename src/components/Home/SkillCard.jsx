import React from "react";

const SkillCard = ({ icon, header, details }) => {
  return (
    <div className="py-[30px] !z-[999999] bg-[#FFFFFF14] text-white px-[30px] rounded-lg my-8 hover:rotate-[15deg] transition-all">
      <img src={icon} alt={header} />
      <h2 className="py-5 text-xl lg:text-2xl">{header}</h2>
      <p className="w-9/12 text-sm leading-8 text-[#ffffff82]">{details}</p>
    </div>
  );
};

export default SkillCard;
