

const RecommendItem = ({chefs}) => {
    const {name, image, recipe} = chefs
    return (
        <div>
            <div className="card w-full  bg-base-100 shadow-xl">
            <figure><img className=" w-full h-60" src={image} alt="Shoes" /></figure>
            <div className="px-8 text-white ">
            <h2 className="text-center text-2xl text-orange-500 font-grand pt-5 ">{name}</h2>
            <p className="py-5 font-itim lg:h-24">{recipe}</p>
            <div className="card-actions py-5 justify-center">
            <button className="btn btn-primary">Add Chart</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default RecommendItem;