import React, { useState } from 'react';
import Shimmer from './Shimmer';
import '../../index.css';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Accordion from './Accordion';
import ShimmerMenu from './ShimmerMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerMenu />;
  }

  const {
    name,
    city,
    locality,
    totalRatingsString,
    cuisines,
    costForTwoMessage,
    avgRating,
    feeDetails,
  } = resInfo?.cards[0]?.card?.card?.info;

  const itemGroups =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;

  const itemGroup = itemGroups.slice(1);

  console.log(itemGroup);
  console.log('add');

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;

  return (
    <div className="flex items-center justify-center">
      <div className="menu p-10 m-10  items-center rounded-lg  w-[60%]">
        <div className="flex justify-between  p-4 border border-solid border-gray-600 bg-gray-200 rounded-xl shadow-md ">
          <div>
            <h1 className="text-2xl font-bold my-2">{name}</h1>
            <h3 className="text-md my-1">{cuisines.join(',')}</h3>
            <span className="flex my-1">
              <h3 className="text-md my-1">{locality}</h3>
              <h3 className="text-md my-1">, {city}</h3>
            </span>
            <h3 className="text-md my-1 text-green-900">
              {feeDetails.message}
            </h3>
          </div>
          <div className=" items-center justify-center w-25 h-14 m-3 p-2  border border-solid border-gray-600 rounded-xl  ">
            <span className="flex items-center ">
              <svg
                className="w-5 h-5 text-green-800 me-1 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-2 text-base font-bold text-green-800 ">
                {avgRating}
              </p>
            </span>

            <p className="text-[12px] items-center">{totalRatingsString}</p>
          </div>
        </div>

        <div className="flex items-center justify-center my-3 ">
          <p className="text-green-800  font-bold text-2xl bg-green-300 p-2 rounded-xl">
            Offers - {costForTwoMessage}
          </p>
        </div>
        <div className="bg-yellow-800  h-[1px] m-2 shadow-2xl"> </div>
        <h2 className="text-2xl font-bold my-2 ml-10 mt-6 ">Menu:</h2>
        <div className="rounded-lg">
          {itemGroup.map(
            (group, index) => (
              (key = group.card.card.title), (<Accordion group={group} />)
            )
          )}

          {/* <Accordion itemGroup={itemGroup} /> */}
        </div>
        {/* <div className="menu-item"> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
