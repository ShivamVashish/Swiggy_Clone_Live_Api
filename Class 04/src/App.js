import React from "react";
import ReactDOM from "react-dom/client"
import Home from "./Components/Home";
import Resturant from "./Components/Resturant";
import { BrowserRouter , Routes , Route } from "react-router";
import ResturantMenu from "./Components/ResturantMenu";
// header section 
function App(){

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/resturant" element={<Resturant></Resturant>}></Route>
            <Route path="/city/delhi/:id" element={<ResturantMenu></ResturantMenu>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App></App>)