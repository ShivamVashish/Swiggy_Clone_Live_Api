import Header from "./Header"
import  {FoodOption}  from "./FoodOption"
import  {GroceryOption}  from "./GroceryOption"
import DineOption from "./DineOption"
export default function Home(){
    return (
        <div>
            <Header></Header>
            <FoodOption></FoodOption>
            <GroceryOption></GroceryOption>
            <DineOption></DineOption>
        </div>
    )
}