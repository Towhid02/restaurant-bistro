import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hook/UseAxiosSecure";
import useCart from "../Hook/useCart";


const FoodCard = ({item}) => {
  const navigate = useNavigate()
    const {_id, name, image, price, recipe} = item
    const {user} = useAuth()
    const location = useLocation()
    const axiosSecure = useAxiosSecure();
    const[, refetch] = useCart()

    const handleAddToCart = food => {
      
      if (user && user.email) {
        console.log(food, user.email);
        //send cart item to the database
        const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price  
          }
          axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }

                })
        }
        else {
          Swal.fire({
              title: "You are not Logged In",
              text: "Please login to add to the cart?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, login!"
          })
          .then((result) => {
              if (result.isConfirmed) {
                  //   send the user to the login page
                  navigate('/login', { state: { from: location } })
              }
          });
      }
    }
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className=" absolute right-0 mr-5 mt-5 px-3 py-2 rounded-badge  bg-slate-900 text-white">{price}$</p>
  <div className="card-body font-itim">
    <h2 className="text-3xl ">{name}</h2>
    <p>{recipe}</p>
    
    <div className="card-actions justify-end">
      <button 
      onClick={()=>handleAddToCart(item)} className="btn btn-outline border-orange-500   border-0 border-b-4 mt-4">Add Chart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;