import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover";
import UseMenu from "../Hook/UseMenu";
import SectionTitle from "../Components/SectionTitle";
import MenuCategory from "../Components/MenuCategory";
import menuBg from "../../public/menu/banner3.jpg"
import dessertBg from "../../public/menu/dessert-bg.jpeg"
import soupBg from "../../public/menu/soup-bg.jpg"
import saladBg from "../../public/menu/salad-bg.jpg"
import pizzaBg from "../../public/menu/pizza-bg.jpg"


const AllMenu = () => {
  const [menus] = UseMenu()
   const desserts = menus.filter (item => item.category === 'dessert')
   const pizzas = menus.filter (item => item.category === 'pizza')
   const salads = menus.filter (item => item.category === 'salad')
   const soups = menus.filter (item => item.category === 'soup')
   const offered = menus.filter (item => item.category === 'offered')
    return (
        <div>
             <Helmet>
        <title>Towhid Restaurant | Menu</title>
      </Helmet>
      <Cover img={menuBg} title="Our Menu"></Cover>
      <SectionTitle
      subHeading="Do not Miss "
      heading="Today's offer"
      ></SectionTitle>
     <MenuCategory items={offered} img={menuBg}></MenuCategory>
     <MenuCategory items={desserts} title="dessert" img={dessertBg}></MenuCategory>
     <MenuCategory items={pizzas} title="pizza" img={pizzaBg}></MenuCategory>
     <MenuCategory items={soups} title="soup" img={soupBg}></MenuCategory>
     <MenuCategory items={salads} title="salad" img={saladBg}></MenuCategory>
        </div>
    );
};

export default AllMenu;