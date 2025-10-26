export default function RestInfo({restData}){
    return(
        <>
        <div className="flex justify-between w-full m-5 rounded-2xl flex-wrap">
            <div className="w-[70%] mb-2" >
                <p className="font-bold text-2xl text-gray-600">{restData?.name}</p>
                <p className="font-bold text">₹{restData?.defaultPrice?restData?.defaultPrice/100:restData?.price/100}</p>
                <span className="text-green-700 font-bold">{"⭐ "+restData?.ratings?.aggregatedRating?.rating}</span>
                <span className="font-semibold">{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                <p className="font-semibold text-gray-800">
                    {restData?.description}
                </p>
            </div>
            <div className="w-[20%] relative flex p-3">
                <img className="rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}/>
                <button className="absolute bottom-1 font-bold rounded-md bg-gray-500 left-15 text-white px-4 py-2 ">Add</button>
            </div>
            <hr/>
        </div>
        <hr className="border-t-4 border-gray-400 my-4 "/>
        </>
    )
}