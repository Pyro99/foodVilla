import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState(restaurantList);

  const filterRestaurants = (searchText, allRestaurants) => {
    return allRestaurants.filter((restaurant) =>
      restaurant?.data?.name?.includes?.(searchText)
    );
  };

  return (
    <>
      <div className="search_container">
        <input
          type="text"
          placeholder="Search"
          className="search_input"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button className="search_btn" onClick= {()=> {
          const filteredData = filterRestaurants(searchText,allRestaurants)
          setAllRestaurants(filteredData);
        }}>
          Search
        </button>
      </div>

      <div className="restaurants">
        {allRestaurants.map((restaurants) => (
          <RestaurantCard key={restaurants.data.id} {...restaurants.data} />
        ))}
      </div>
    </>
  );
};

export default Body;
