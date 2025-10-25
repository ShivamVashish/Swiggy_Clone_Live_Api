export default function DineCard({Restdata}){

    return(
        <div className="max-w-sm flex-none"> 
        <a href={Restdata?.cta?.link} target="_blank">
            <div className="relative w-80 rounded-md overflow-hidden">
                <img className="w-full h-52 object-cover"src={"https://media-assets.swiggy.com/swiggy/image/upload/" + Restdata?.info?.mediaFiles[0]?.url}/>
                <div className="absolute inset-0 bg-gradient-to-top from-black/80 via-black/30 to-transparent"></div>
                 <p className="absolute bottom-3 left-3 font-bold text-white text-lg drop-shadow-lg">{Restdata?.info?.name}</p>
                    <p className="absolute bottom-3 right-4 font-bold text-white text-lg drop-shadow-sm">⭐ {Restdata?.info?.rating?.value}</p>
                    </div>
                </a>
                </div>
    )
}