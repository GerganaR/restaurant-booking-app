import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import MenuItem from "./MenuItem";

import "./Menu.css";

const MenuList = ({ menuItems }) => {
  return (
    <div className="app__menulist-wrapper">
      {menuItems.map((item, index) => {
        return <MenuItem key={index} item={item} />;
      })}
    </div>
  );
};

export default MenuList;
