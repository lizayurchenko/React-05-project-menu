import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

//const tempCategories = menu.map((item) => item.category);
//const uniqueCategories = new Set(tempCategories);
//const allCategories = ["all", ...uniqueCategories];
//console.log(allCategories);

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuList, setMenuList] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuList(menu);
    }
    setMenuList(menu.filter((item) => item.category === category));
  };

  return (
    <section className="menu">
      <Title text="our menu" />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu menuList={menuList} />
    </section>
  );
};
export default App;
