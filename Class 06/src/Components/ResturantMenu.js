import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import { Link } from "react-router";
export default function ResturantMenu(){
    let {id} = useParams()
    // console.log(id);

    const [RestData,setRestData] = useState([])
    const [Selected,setSelected] = useState(null)
    useEffect(()=>{
        
    async function FetchData() {
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyApi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
        const response =  await fetch(proxyServer+swiggyApi);
        const data = await response.json()
        const tempdata = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filterData = tempdata?.filter((items)=> 'title' in items?.card?.card)
        setRestData(filterData)
    }
    FetchData()
    },[])
    return(
        <div>
            <div className="w-[80%] mx-auto mt-20 mb-20">
                <Link to={`/city/delhi/${id}/search`}>
                <p className="w-full text-center py-4 bg-gray-200 text-2xl rounded-4xl font-bold">Search for Dishes</p>
                </Link>
            </div>
            <div className="w-[80%] mt-20 mb-20 mx-auto">
            <button className={`text-2xl font-bold px-8 py-2 bg-black text-white border-2 rounded-xl mr-4 ${Selected==="veg"?"bg-green-600":"bg-gray-600"}`} onClick={()=>setSelected(setSelected==="veg"?null:"veg")}>Veg</button>
            <button className={`text-2xl font-bold px-4 py-2 bg-black text-white border-2 rounded-xl mr-4 ${Selected==="Nonveg"?"bg-red-600":"bg-gray-600"}`} onClick={()=>setSelected(setSelected==="Nonveg"?null:"Nonveg")}>Non-Veg</button>
            </div>
        
        <div className="w-[80%] mx-auto mt-20">
       {
        RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} FoodSelected={Selected}></MenuCard>)
       }
        </div> 
        </div>
    )
}