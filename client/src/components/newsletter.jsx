import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-neutralWhite-100 mt-20 py-20">
      <div className="container flex items-center justify-between relative">
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl text-neutralBlack-800">
            Join Our Newsletter
          </h2>
          <p className="text-neutralBlack-500 mt-2 text-sm max-w-md leading-7">
            We love to surprise our subscribers with occasional gifts.
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <input type="text" placeholder="Your email adress" className="outline-none text-sm border border-neutral-300 rounded-lg px-6 py-3" />
          <button className="rounded text-sm px-6 py-3 bg-neutralBlack-900 text-neutralWhite-900">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
