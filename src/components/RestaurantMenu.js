import React from 'react';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import '../../index.css';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log('fetched data of api');
    // console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, city, costForTwoMessage, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;

  const itemGroups =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;

  const itemGroup = itemGroups.slice(1);

  console.log(itemGroup);
  console.log('add');

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;

  return (
    <div className="centered-container">
      <div className="menu">
        <div className="menu-heading">
          <h1>{name}</h1>
          <h3>City: {city}</h3>
          <p>
            {costForTwoMessage} ----- Rating: {avgRating}
          </p>
          <h2>Menu:</h2>
        </div>
        <div className="menu-item">
          {itemGroup &&
            Array.isArray(itemGroup) &&
            itemGroup.map((group) => (
              <div key={group.card.card.title} className="menu-item-card">
                <h3>{group.card.card.title}</h3>
                <ul>
                  {group.card.card.itemCards &&
                  Array.isArray(group.card.card.itemCards)
                    ? group.card.card.itemCards.map((item) => (
                        <li key={item.card.info.id}>
                          {item.card.info.name} -- {'Rs.'}
                          {item.card.info.price / 100}
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
