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
    <div className="card">
      <img src={Image_URL + cloudinaryImageId} alt="logo" />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <div className="card_data">
        <p>{avgRating} stars</p>
        <p>{deliveryTime} MINS</p>
        <p>{costForTwoString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;