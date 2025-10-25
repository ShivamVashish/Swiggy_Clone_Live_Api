export default function GroceryCard({ Grocerydata }) {
  return (
    <div className="flex flex-col items-center">
      <a href={Grocerydata?.action.link} target="_blank" rel="noopener noreferrer">
        <div className="w-40 ,aspect-[5/6]">
          <img className="w-full h-full object-cover rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + Grocerydata?.imageId}/>
        </div>
      </a>
      <h2 className="text-center font-bold text-gray-500 mt-2">{Grocerydata?.action.text}</h2>
    </div>
  )
}
