import {Image_URL} from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={Image_URL + cloudinaryImageId} alt="logo" className = "" />
      <h2 className="font-bold text-xl">{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <div className="flex justify-between">
        <p>{avgRating} stars</p>
        <p>{deliveryTime} MINS</p>
        <p>{costForTwoString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;