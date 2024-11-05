import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto p-12 flex gap-10">
        <div className="basis-1/2">
          <h1 className="text-[12rem] font-semibold leading-none tracking-tight">
            refocus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 ">Socials</h4>
            {["Instagram", "Twitter (x?)", "LinkedIn"].map((item, index) => (
              <a className="block mt-2 text-zinc-600 ">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 ">Socials</h4>
            {["Instagram", "Twitter (x?)", "LinkedIn"].map((item, index) => (
              <a className="block mt-2 text-zinc-600 ">{item}</a>
            ))}
          </div>

          
        </div>
        <div className="basis-1/2 flex flex-col justify-start">
            <p className="text-right text-zinc-200">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" className="w-38 mt-5" alt="" />
          </div>
      </div>
    </div>
  );
}

export default Footer;
