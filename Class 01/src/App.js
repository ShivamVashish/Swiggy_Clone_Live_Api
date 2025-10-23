import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import { FoodOption } from "./Components/FoodOption";
import { GroceryOption } from "./Components/GroceryOption";
// header section 
function App(){

    return(
        <div>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOption></GroceryOption>
        </div>
    )
}
const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App></App>)