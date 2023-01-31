import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const filterRestaurants = (searchText, allRestaurants) => {
  return allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes?.(searchText.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0738955&lng=72.886596&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  //Early return
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search_container">
        <input
          type="text"
          placeholder="Search"
          className="search_input"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button
          className="search_btn"
          onClick={() => {
            const filteredData = filterRestaurants(searchText, allRestaurants);
            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurants">
        {filteredRestaurants.length === 0 ? (
          <h1>No restaurant's matched your filter!!</h1>
        ) : (
          filteredRestaurants.map((restaurants) => (
            <RestaurantCard key={restaurants.data.id} {...restaurants.data} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
