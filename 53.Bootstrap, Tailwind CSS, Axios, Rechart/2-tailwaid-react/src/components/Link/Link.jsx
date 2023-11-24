import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <li className="mr-8 hover:bg-cyan-200 p-1 duration-500">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
