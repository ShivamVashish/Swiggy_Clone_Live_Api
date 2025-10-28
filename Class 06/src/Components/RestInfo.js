import { useState } from "react"
import { additems,IncrementItems,DecrementItems } from "../../Stored/CartSlice"
import { useDispatch, useSelector } from "react-redux"
export default function RestInfo({restData}){
    const dispatch = useDispatch();
   const items = useSelector(state=>state.cartslice.items)
  const element = items.find(item=>item.id===restData.id)
  const count = element?element.quantity:0
    function handleAdditems(){
        
        dispatch(additems(restData))
    }
    function handleIncrementItems(){
        
        dispatch(IncrementItems(restData))
    }
    function handleDecrementItems(){
    
        dispatch(DecrementItems(restData))
    }
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
            <div className="w-[20%] relative flex p-3 h-42 justify-center">
                <img className="w-60 h-36 object-coverrounded-xl rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}/>
                {
                    (count===0)?(<button className="absolute bottom-1 font-bold rounded-md bg-white left-11.5 text-green-500 px-6 py-2 border-2" onClick={()=>handleAdditems()}>Add</button>):(
                        <div className="absolute bottom-1 rounded-xl  left-11.5 font-bold  flex gap-3 text-2xl text-green-600 px-2 py-1 shadow-md border-2 bg-white">
                            <button onClick={()=>handleDecrementItems()}>-</button>
                            <span>{count}</span>
                            <button onClick={()=>handleIncrementItems()}>+</button>
                        </div>
                    )
                }
                
            </div>
            <hr/>
        </div>
        <hr className="border-t-4 border-gray-400 my-4 "/>
        </>
    )
}