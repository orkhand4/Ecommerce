import React from "react";
import { Link } from "react-router-dom";

const NotificationBar = ({ text, btnText, btnHref }) => {
  return (
    <div className="bg-neutral-900 text-neutralWhite-900 flex justify-center items-center py-2 gap-1 text-sm">
      <p>{text}</p>
      <Link
        to={`/${btnHref}`}
        className="border-b border-transparent hover:border-neutralWhite-900 transition"
      >
        {btnText}
      </Link>
    </div>
  );
};

export default NotificationBar;
