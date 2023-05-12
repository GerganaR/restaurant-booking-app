import React, { useState } from "react";
import MenuList from "../../components/Menu/MenuList";
import Navbar from "../../components/Navbar/Navbar";
import SubHeading from "../../components/SubHeading/SubHeading";
import MenuCategories from "../../components/Menu/MenuCategory";
import Footer from "../../components/Footer/Footer";
import { data } from "../../constants";

const allCategories = [
  "all",
  ...new Set(data.menu.map((item) => item.category)),
];
const Menu = () => {
  const [menuItems, setMenuItems] = useState(data.menu);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(data.menu);
      return;
    }
    const newItems = data.menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <div>
      <Navbar />
      <div className="app__bg menu-padding">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Menu Items</h1>
        <MenuCategories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <MenuList menuItems={menuItems} />
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
