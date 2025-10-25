import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ResturantMenu(){
    let {id} = useParams()
    console.log(id);

    const [RestData,setRestData] = useState(null)

    useEffect(()=>{
        
    async function FetchData() {
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyApi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&resturantID${id}`;
        const response =  await fetch(proxyServer+swiggyApi);
        const data = await response.json()
        setRestData(data || [])
    }
    FetchData()
    },[])
    return(
        <div>
        <h1>Hello Coder Army</h1>
        <h2>{id}</h2>
        </div> 
    )
}