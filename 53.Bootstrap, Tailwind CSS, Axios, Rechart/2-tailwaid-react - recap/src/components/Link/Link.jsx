import React from "react";

const Link = ({route}) => {
  return (
    <div className="mr-12">
      <li>
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
