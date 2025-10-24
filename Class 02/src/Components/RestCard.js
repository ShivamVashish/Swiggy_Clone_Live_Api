import Resturant from "./Resturant";
export default function RestCard({restInfo}){

    return(
        <img className="h-40 w-60 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>
    )
}