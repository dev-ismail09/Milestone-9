import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link style={{ marginRight: "10px" }} to="/">Home</Link>
      <Link style={{ marginRight: "10px" }} to="/about">About</Link>
      <Link style={{ marginRight: "10px" }} to="/contact">Contact</Link>
      <Link style={{ marginRight: "10px" }} to="/friends">Friends</Link>
      <Link style={{ marginRight: "10px" }} to="/posts">Posts</Link>
      {/* <Link style={{ marginRight: "10px" }} to="/friend">Friend</Link> */}
    </div>
  );
};

export default Header;
