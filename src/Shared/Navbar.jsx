import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../Hook/useCart";


const Navbar = () => {
  const [cart] = useCart()
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}
    const links = <>
            <li ><Link to="/">HOME</Link></li>
            <li><Link to="/menus">MENU</Link></li>   
            <li><Link to="/secret">Secret</Link></li>   
            <li><Link to="/dashboard">Dashboard</Link></li>   
            <li><Link to="/order/salad">ORDER</Link></li>   
            <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>
           
           
    </>
    return (
        <div className="navbar max-w-screen-xl fixed z-30 bg-opacity-50 bg-black text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}

            </ul>
          </div>
          <div className=" flex flex-col text-justify uppercase font-itim font-bold text-orange-300 px-5">
            <p className="text-xl">T o w h i d</p>
            <p>Restaurant</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
        {
            user ? <>
                <span>{user?.displayName}</span>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }  
        </div>
      </div>
    );
};

export default Navbar;