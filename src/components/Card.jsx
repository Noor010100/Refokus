import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card ({width, start, para, hover})  {
  return (
    <div className={` bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[28rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>one heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever Heading. </h1>
      </div>
      <div className="down w-full">
        {
            start && (<>
                <h1 className="text-6xl font-semibold tracking-tight leading-none ">start a project</h1>
                <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">Contact Us</button>
            </>) 
        }
        
        {
          para && (
            <>
             <p className="text-sm text-zinc-500 font-medium">Lorem ipsum dolor sit amet consectetur.</p></>
          )
        }
       
      </div>
    </div>
  );
};

export default Card;
