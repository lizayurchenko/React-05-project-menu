import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menuList }) => {
  return (
    <div className="section-center">
      {menuList.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};

export default Menu;
