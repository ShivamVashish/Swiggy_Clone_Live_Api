export default function FoodCard({ fooddata }) {
  return (
    <div className="flex flex-col items-center w-48">
      <a href={fooddata?.action.link} target="_blank">
        <div className="w-40 ,aspect-[5/6]">
          <img
            className="w-full h-full object-cover rounded-md"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + fooddata?.imageId}/>
        </div>
      </a>
    </div>
  )
}
