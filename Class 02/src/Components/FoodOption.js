import { imageGridCards } from "../utils/FoodData";
import FoodCard from "./FoodCard";

export function FoodOption() {
  return (
    <div className="mt-20 w-[80%] mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Explore Delicious Foods
      </h1>

      <div className="flex gap-6 overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {imageGridCards.map((fooddata) => (
          <FoodCard key={fooddata.id} fooddata={fooddata} />
        ))}
      </div>
    </div>
  );
}
