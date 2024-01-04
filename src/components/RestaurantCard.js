import { CDN_URL } from '../utils/constants';
import { UserContext } from '../utils/UserContext';
import { useContext } from 'react';
import User from './User';

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;

  const data = useContext(UserContext);
  return (
    <div className="p-2 m-4 w-[210px] h-[400px] bg-[#f0f0f0] dark:md:hover:bg-gray-200  hover:drop-shadow-lg hover:cursor-pointer rounded-lg">
      <img
        className="res-logo h-[190px] w-[100%] rounded-sm "
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h1 className=" font-bold text-lg py-2">{name}</h1>
      <h4>{cuisines.join(', ')}</h4>
      <div className="flex">
        <h4>{'Rating:' + avgRating + ' stars'}</h4>
      </div>

      <h4>{'Timing:' + sla.deliveryTime + ' Minutes'}</h4>
      <h4>{data.loggedInUser}</h4>
    </div>
  );
};

//higher order component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black m-2 p-2 rounded-lg text-white ">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
