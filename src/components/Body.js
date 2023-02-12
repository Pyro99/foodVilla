import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurants } from "../utils/helper";
import useRestaurant from "../utils/useRestaurant";
import useIsOnline from "../utils/useIsOnline";
const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurant();

  //Early return
  if (!allRestaurants) return null;

  const isOnline = useIsOnline();

  if(!isOnline) return <h1>You are offline..Kindly check your internet Connection!!</h1>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center m-5 bg-pink-50">
        <input
        className = "bg-gray-200 rounded-l-full p-4 w-[40rem] outline-none"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-r-full"
          onClick={() => {
            const filteredData = filterRestaurants(searchText, allRestaurants);
            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurants">
        {filteredRestaurants?.length === 0 ? (
          <h1>No restaurant's matched your filter!!</h1>
        ) : (
          filteredRestaurants.map((restaurants) => (
            <Link
              key={restaurants?.data?.id}
              to={"/restaurant/" + restaurants?.data?.id}
            >
              <RestaurantCard {...restaurants?.data} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
