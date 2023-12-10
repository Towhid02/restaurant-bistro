import { Helmet } from "react-helmet";
import orderBg from "../../public/shop/banner2.jpg"
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import UseMenu from "../Hook/UseMenu";

import { useParams } from "react-router-dom";
import OrderTab from "../Components/OrderTab";


const Order = () => {
  const categories = ['salad', 'soup',  'pizza', 'dessert', 'drinks']
  const {category} = useParams();
  const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menus] = UseMenu()
   
   const desserts = menus.filter (item => item.category === 'dessert')
   const pizzas = menus.filter (item => item.category === 'pizza')
   const salads = menus.filter (item => item.category === 'salad')
   const soups = menus.filter (item => item.category === 'soup')
   const drinks = menus.filter (item => item.category === 'drink')

    return (
        <div className="px-2">
            <Helmet>
        <title>Towhid Restaurant | Order</title>
      </Helmet>
      
        <Cover img={orderBg} title="ORDER FOOD"></Cover>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Soup</Tab>
    <Tab>Pizza</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
                    <OrderTab items={salads}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzas}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;