import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Searchfood() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState("");
  const [RestData, setRestData] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function FetchData() {
      try {
        // 👇 reliable CORS proxy
        const proxyServer = "https://api.allorigins.win/raw?url=";
        const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
        const response = await fetch(proxyServer + encodeURIComponent(swiggyAPI));
        const data = await response.json();

        const tempData =
          data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        const filterData = tempData.filter(
          (items) => "title" in items?.card?.card
        );

        setRestData(filterData);
        setFilteredData(filterData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    FetchData();
  }, [id]);

  // 🔍 Filter logic (search bar)
  useEffect(() => {
    if (!food) {
      setFilteredData(RestData);
    } else {
      const searchTerm = food.toLowerCase();
      const filtered = RestData.filter((item) =>
        item.card.card.title.toLowerCase().includes(searchTerm)
      );
      setFilteredData(filtered);
    }
  }, [food, RestData]);

  // 🧭 When user clicks on an item
  const handleClick = (title) => {
    navigate(`/restaurant/${id}/food/${encodeURIComponent(title)}`);
  };

  return (
    <div className="w-[80%] mx-auto mt-20">
      {/* Search Input */}
      <input
        className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border focus:outline-none"
        placeholder="Search food here..."
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      {/* Search Results */}
      <div className="mt-6 space-y-3">
        {FilteredData.length > 0 ? (
          FilteredData.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.card.card.title)}
              className="p-4 bg-white rounded-xl shadow hover:bg-gray-100 hover:cursor-pointer transition"
            >
              <h2 className="text-xl font-semibold">
                {item.card.card.title}
              </h2>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg mt-4">No matching results.</p>
        )}
      </div>
    </div>
  );
}
