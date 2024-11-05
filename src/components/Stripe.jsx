import React from "react";

const Stripe = ({ url, number }) => {
  return (
    <div className="w-[16.66%] px-4 py-3 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-700 flex justify-between mt-16">
      <span>{url}</span>
      <span className="font-bold">{number}</span>
    </div>
  );
};

export default Stripe;
