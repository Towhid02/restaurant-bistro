

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item
    return (
        <div className="grid grid-cols-3 items-center gap-2">
            <img className="w-[120px] " style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h3 className=" font-itim uppercase text-lg">{name}</h3>
                <p className=" font-mooli text-sm">{recipe} </p>
            </div>
            <p> Price: {price} $</p>
            
        </div>
    );
};

export default MenuItem;