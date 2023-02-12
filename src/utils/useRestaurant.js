import { useState, useEffect } from "react";
import { All_Restaurants_URL } from "../config";

const useRestaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(All_Restaurants_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };
  return [allRestaurants, filteredRestaurants];
};

export default useRestaurant;
