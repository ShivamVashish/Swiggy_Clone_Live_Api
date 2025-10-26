import { use, useState } from "react"
import RestInfo from "./RestInfo"
export default function MenuCard({menuItems}){

    const [isOpen,setisOpen] = useState(true)

    if (menuItems?.title === "Top Picks") {
    return null;
  }
    if("categories" in menuItems){
        return(
            <div className="w-full">
            <p>{menuItems?.title}</p>
            <div>
                {
                    menuItems?.categories?.map((items)=><MenuCard key={items?.title} menuItems={items}></MenuCard>)
                }
            </div>
            </div>
        )
    }
    if(!isOpen){
        return(
            <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-2xl mr-20 text-gray-500 font-bold" onClick={()=>setisOpen(!isOpen)}>{isOpen?'˅':'˄'}</button>
            </div>
            <div className="h-5 bg-gray-300 rounded-sm mb-2"></div>
        </div>
        )
        
    }
    return(
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-4xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-2xl mr-20 text-gray-500 font-bold" onClick={()=>setisOpen(!isOpen)}>{isOpen?'˅':'˄'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-5 bg-gray-300 rounded-sm mb-2"></div>
        </div>
    )
}