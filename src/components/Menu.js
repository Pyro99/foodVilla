import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image_URL } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
const Menu = () => {
  const {id} = useParams();

  const menu = useRestaurantMenu(id);

  return (!menu) ? <Shimmer /> : (
    <div className = "menu">
      <div>
        <h1>Restaurant id : {id}</h1>
        <h2>{menu?.name}</h2>
        <img className="menu_img" src={Image_URL + menu.cloudinaryImageId} />
        <h3>Area : {menu.area}</h3>
        <h3>City:{menu.city}</h3>
        <h3>Rating:{menu.avgRating}</h3>
        <h3>{menu.costForTwoMsg}</h3>
      </div>
      <div className="menu_items">
        <h1>Menu</h1>
        <ul>
          {Object.values(menu?.menu?.items)?.map((item) => (
            <li key ={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
