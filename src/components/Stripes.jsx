import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  const data = [
    {
      url: "",
      number: 48,
    },
    {
      url: "",
      number: 2,
    },
    {
      url: "",
      number: 11,
    },
    {
      url: "",
      number: 48,
    },
    {
      url: "",
      number: 2,
    },
    {
      url: "",
      number: 11,
    },
  ];

  return (
    <div className="w-full flex justify-between">
      {data.map((elem, index) => (
        <Stripe key={index} url={elem.url} number={elem.number} />
      ))}
    </div>
  );
};

export default Stripes;
