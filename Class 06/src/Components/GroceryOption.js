import { GroceryGridCard } from "../utils/Grocery";
import GroceryCard from "./GroceryCard";
export function GroceryOption({Grocerydata}){

    return(
        
        <div className="container mx-auto max-w-[80%] ">
            <h1 className="mt-15 mb-10 font-bold text-3xl text-gray-800">Shop Groceries on Instamart</h1>
        <div className="flex gap-20 justify-center overflow-x-auto">
        {
            GroceryGridCard.map((Grocerydata)=><GroceryCard key={Grocerydata.id} Grocerydata={Grocerydata}></GroceryCard>)
        } 
        </div>
        </div>
    )
}