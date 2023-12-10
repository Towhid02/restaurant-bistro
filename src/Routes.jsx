import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home";
import AllMenu from "./Pages/AllMenu";

import Order from "./Pages/Order";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Secret from "./Provider/Secret";
import Dashboard from "./Layout/Dashboard";
import Cart from "./Dashboard/Cart";
import AllUsers from "./Dashboard/Allusers";
import AdminRoute from "./Provider/AdminRoutes";
import AddItems from "./Dashboard/AddItems";
import ManageItems from "./Dashboard/MannageItems";
import UpdateItem from "./Dashboard/UpdateItem";
import Payment from "./Dashboard/Payment";
import PaymentHistory from "./Dashboard/PaymentHistory";
import AdminHome from "./Dashboard/AdminHome";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/menus",
            element:<AllMenu></AllMenu>
        },
        {
            path: "order/:category",
            element:<Order></Order>
        },
        {
            path: "signUp",
            element:<SignUp></SignUp>
        },
        {
            path:'logIn',
            element:<LogIn></LogIn>
        },
        {
            path:'secret',
            element:<Secret></Secret>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        // normal user routes
        {
          path: 'cart',
          element: <Cart></Cart>
        },
       
          // admin only routes
          {
            path: 'adminHome',
            element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
          },
          {
            path: 'users',
            element: <AllUsers></AllUsers>
          },
          {
            path: 'manageItems',
            element: <ManageItems></ManageItems>
          },
          {
            path: 'updateItem/:id',
            element: <UpdateItem></UpdateItem>,
            loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
          },
          {
            path: 'addItems',
            element: <AdminRoute><AddItems></AddItems></AdminRoute>
          },
          {
            path: 'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
          },
          {
            path: 'payment',
            element: <Payment></Payment>
          },

      ]
    }
  ]);

export default router;