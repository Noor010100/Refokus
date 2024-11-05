import React from "react";

const Marquee = ({ imagesurls }) => {
  return (
    <div className=" flex w-full gap-20  whitespace-nowrap overflow-x-hidden   ">
      {imagesurls.map((item, index) => 
        item && <img className="w-[6vw]  flex-shrink-0   " key={index} src={item} alt={`image-${index}`} style={{ filter: "invert(1)" }} />
      )}
      {imagesurls.map((item, index) => 
        item && <img className="  flex-shrink-0  " key={index} src={item} alt={`image-${index}`} style={{ filter: "invert(1)" }} />
      )}
    </div>
  );
};

export default Marquee;