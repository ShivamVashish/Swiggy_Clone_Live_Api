import { useSelector } from "react-redux"
import { Link } from "react-router"
export default function RestHeader(){

const counter = useSelector(state=>state.cartslice.items)

    return(
        <div className="container mx-auto w-[80%] py-4 px-8 bg-gray-200 text-4xl flex justify-between items-center">
            <div>
                <p className="text-orange-600 font-bold rounded-2xl">Swiggy</p>
            </div>
            <div>
                <Link to={"/Checkout"}>
                <p className="text-orange-600 font-bold rounded-2xl">Cart {`(${counter.length})`}</p>
                </Link>
            </div>
        </div>
    )
}