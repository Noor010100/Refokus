import React from "react";

const Marquee = ({ imagesurls }) => {
  return (
    <div className="bg-zinc-900 flex w-full gap-10  whitespace-nowrap overflow-x-hidden   ">
      {imagesurls.map((item, index) => 
        item && <img className="w-24 h-10 mt-16 flex-shrink-0  " key={index} src={item} alt={`image-${index}`} style={{ filter: "invert(1)" }} />
      )}
      {imagesurls.map((item, index) => 
        item && <img className="w-24 h-10 flex-shrink-0  " key={index} src={item} alt={`image-${index}`} style={{ filter: "invert(1)" }} />
      )}
    </div>
  );
};

export default Marquee;
