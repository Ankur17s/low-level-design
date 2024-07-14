import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="h-16 bg-gray-600 flex items-center gap-5 px-12">
        <Link to="/">
          <p className="text-white">Meme</p>
        </Link>
        <Link to="/accordion">
          <p className="text-white">Accordian</p>
        </Link>
        <Link to="/comments">
          <p className="text-white">Comments</p>
        </Link>
        <Link to="/image-slider">
          <p className="text-white">Image Slider</p>
        </Link>
        <Link to="/pagination">
          <p className="text-white">Pagination</p>
        </Link>
        <Link to="/live-chat">
          <p className="text-white">Live Chat</p>
        </Link>
        <Link to="/search-ui">
          <p className="text-white">Search G</p>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
