import { Link } from "react-router";
import Resturant from "./Resturant";
export default function RestCard({ restInfo }) {
  return (
    <Link to={"/city/delhi/"+restInfo?.info?.id}>
    <div className="bg-white rounded-xl shadow-md p-2 max-w-[280px] mb-3 transform transition duration-300 hover:scale-95">
        <div className="flex items-center justify-center">
      <img className="h-48 w-60 rounded-xl object-cover flex justify-center"src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restInfo?.info?.cloudinaryImageId}/>
      </div>
      <div className="mt-2 text-xl font-semibold pb-6 text-gray-800 h-5 overflow-hidden">{restInfo?.info?.name}</div>
      <div className="flex gap-2 items-center">
        <span className="text-sm font-semibold  text-gray-700 mt-2 mb-2"> ⭐ {restInfo?.info?.avgRating}</span>
      <span className="text-md font-semibold  text-gray-900">{restInfo?.info?.sla?.slaString}</span>
      </div>
      <div className="text-sm font-semibold text-gray-500 h-5 overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>
      <div className="text-sm font-semibold text-gray-500 mt-1">{restInfo?.info?.areaName}</div>
    </div>
    </Link>
  );
}
 