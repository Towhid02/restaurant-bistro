import SectionTitle from "../Components/SectionTitle";
import img from "../../public/home/featured.jpg"
import { Link } from "react-router-dom";


const Features = () => {
    return (
        <div className=" bg-featureBg text-white  pt-10 my-20 bg-center bg-fixed ">
            <div>
            <SectionTitle
            subHeading="Should Try"
            heading="CHEF RECOMMENDS"
            ></SectionTitle> </div>
            <div className=" bg-slate-600 bg-opacity-70 flex   justify-center items-center  gap-20 px-10 p-10">
                <div>
                    <img className=" rounded-2xl" src={img} alt="" />
                </div>
                    <div className=" text-left">

                   <h1 className=" font-grand text-2xl"> March 20, 2023</h1>
                    <h2 className=" font-itim text-xl">WHERE CAN I GET SOME?</h2>
               
                   <p className=" font-mooli"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <Link to={"/order/salad"}>
            <button className="btn btn-outline border-0 text-white border-b-4 mt-4">Order Now</button>
            </Link>
                    </div>
            </div>
        </div>
    );
};

export default Features;