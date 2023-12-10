
import SectionTitle from "../Components/SectionTitle";
import MenuItem from "../Components/MenuItem";
import UseMenu from "../Hook/UseMenu";
import { Link } from "react-router-dom";


const Menu = () => {

    const [menus] = UseMenu()
    const popular = menus.filter (item => item.category === 'popular')
    //         setMenus (popularItems)})
        // const [menus, setMenus] = useState([])

        // useEffect(() => {
        //     fetch('menu.json')
        //     .then(res => res.json())
        //     .then(data => {
        //        
        // }, [])

    return (
        <section>
            <SectionTitle
             subHeading="From our Menu"
             heading="Popular Menu"
            ></SectionTitle>

            <div className=" grid md:grid-cols-2 gap-4 m-5">
                {
                   popular.map ( item => <MenuItem 
                    key={item._id}
                    item = {item}
                    >
                    </MenuItem> )
                }
            </div>
            <Link to={"/order"}>
            <button className="btn btn-outline border-0 text-white border-b-4 mt-4">Order Now</button>
            </Link>
        </section>
        
    );
};

export default Menu;