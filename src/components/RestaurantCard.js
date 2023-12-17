import { CDN_URL } from '../utils/constants';

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{'Rating:' + avgRating + ' stars'}</h4>
      <h4>{'Timing:' + sla.deliveryTime + ' Minutes'}</h4>
    </div>
  );
};

export default RestaurentCard;
