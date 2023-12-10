import { useEffect, useState } from "react";
import SectionTitle from "../Components/SectionTitle";
import RecommendItem from "../Components/RecommendItem";


const Chef = () => {
    const [chef, setChef] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {
            const offeredItems = data.filter (item => item.category === 'offered')
            setChef (offeredItems)})
    }, [])
    return (
        <section>
            <SectionTitle
            subHeading="---Should Try---"
            heading="CHEF RECOMMENDS"
            ></SectionTitle>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {
            
                chef.map ( chefs => <RecommendItem 
                key={chefs._id}
                chefs = {chefs}
                >
                </RecommendItem> )
            
        }
            </div>
            
        </section>
    );
};

export default Chef;