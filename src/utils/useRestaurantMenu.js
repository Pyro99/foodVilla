import { Restaurant_Menu_URL } from "../config";
import {useState, useEffect} from "react";

const useRestaurantMenu = (id) => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    const data = await fetch(
       Restaurant_Menu_URL+
        id
    );
    const json = await data.json();
    setMenu(json.data);
  }
  return menu;
};

export default useRestaurantMenu;
