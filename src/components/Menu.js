import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image_URL } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
const Menu = () => {
  const {id} = useParams();

  const menu = useRestaurantMenu(id);

  return (!menu) ? <Shimmer /> : (
    <div className = "grid grid-flow-col text-xl">
      <div className="col-span-1">
        <h2 className ="text-5xl font-bold">{menu?.name}</h2>
        <h1>Restaurant id : {id}</h1>
        <img className="w-96 border shadow-purple-200 shadow-lg" src={Image_URL + menu.cloudinaryImageId} />
        <div className ="mt-10">
        <h3>Area : {menu.area}</h3>
        <h3>City:{menu.city}</h3>
        <h3>Rating:{menu.avgRating}</h3>
        <h3>{menu.costForTwoMsg}</h3>
        </div>
      </div>
      <div className="pl-24 col-span-11">
        <h1 className ="text-2xl text-center bg-purple-200">Menu</h1>
          {Object.values(menu?.menu?.items)?.map((item) => (
                <ul className = "flex pt-3 justify-between" key ={item?.id}>
                  <li className = "w-20">{item.cloudinaryImageId === "" ? null : !item.cloudinaryImageId ? null :
                  <img src = {Image_URL + item.cloudinaryImageId} alt="menuLogo" /> }</li>
                  <li>{item?.name}</li>
                  <li>₹{item?.price / 100}</li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default Menu;