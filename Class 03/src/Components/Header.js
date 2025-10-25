import { Link } from "react-router"
export default function Header(){

    return(
        <header className="bg-[#ff5200] font-serif">
            <div className="flex justify-between container mx-auto py-8">
                <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"/>
                <div className="text-white text-base font-bold flex gap-10 items-center">
                    <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                    <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">Partner with Us</a>
                    <a href="" className="border-2 py-3 px-4 rounded-2xl">Get The App</a>
                    <a href="" target="_blank" className="border border-black py-3 px-4 rounded-2xl bg-black">Sign in</a>
                </div>
            </div>
            <div className="pt-16 p-8 relative">
                 <img className="h-110 w-60 absolute left-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                 <img className="h-110 w-60 absolute right-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="text-4xl text-white font-bold max-w-[65%] text-center container mx-auto">
                    Order Food & groceries.Discover best Resturanat.Swiggy it!
                </div>
                <div className="max-w-[50%] container mx-auto flex gap-10 mt-5">
                    <input className="bg-white w-[38%] text-base px-4 py-4 rounded-xl text-gray-500" placeholder="Delhi,India"></input>
                <input className="bg-white w-[50%] text-base px-4 py-4 rounded-xl text-gray-500" placeholder="Search for resturant and items for more"></input>
                </div>
            </div>
            <div className="max-w-[80%] container mx-auto flex">
                <Link to="/resturant">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
                </a>
                <a href="https://www.swiggy.com/genie">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"></img>
                </a>
            </div>
        </header>
    )
}