import { dineoutResturants } from "../utils/DineData"
import DineCard from "./DineCard"
export default function DineOption(){

    return(
        <div className="w-[80%] container mx-auto mt-20 mb-20">
            <p className="text-3xl font-bold text-gray-700">Discover best resturants on Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">
                {
                    dineoutResturants.map((Restdata)=><DineCard key={Restdata?.info.id} Restdata={Restdata}></DineCard>)
                }
            </div>
        </div>
    )
}