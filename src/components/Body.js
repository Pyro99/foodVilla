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

  const [allRestaurants, filteredRestaurants] = useRestaurant();

  //Early return
  if (!allRestaurants) return null;

  const isOnline = useIsOnline();

  if(!isOnline) return <h1>You are offline..Kindly check your internet Connection!!</h1>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="m-3 p-2 bg-pink-50 text-center">
        <input
          type="text"
          placeholder="Search"
          className="search_input"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button
          className="py-1 px-3  m-2 bg-purple-500 rounded-full"
          onClick={() => {
            const filteredData = filterRestaurants(searchText, allRestaurants);
            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurants">
        {" "}
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
