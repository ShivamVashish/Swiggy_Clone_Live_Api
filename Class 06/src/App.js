import React from "react";
import ReactDOM from "react-dom/client"
import Home from "./Components/Home";
import Resturant from "./Components/Resturant";
import { BrowserRouter , Routes , Route } from "react-router";
import ResturantMenu from "./Components/ResturantMenu";
import Searchfood from "./Components/Searchfood";
import RestHeader from "./Components/RestHeader";
import SecondaryHome from "./Components/SecondaryHome";
import { Store } from "../Stored/stores";
import { Provider } from "react-redux";
import Checkout from "./Components/Checkout";
// header section 
function App(){

    return(
        <>
        <Provider store={Store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route element={<SecondaryHome></SecondaryHome>}>
            <Route path="/resturant" element={<Resturant></Resturant>}></Route>
            <Route path="/city/delhi/:id" element={<ResturantMenu></ResturantMenu>}></Route>
            <Route path="/city/delhi/:id/search" element={<Searchfood></Searchfood>}></Route>
            </Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
        </BrowserRouter>
        </Provider>
        </>
    )
}
const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App></App>)