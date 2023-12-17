import RestaurentCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { findDOMNode } from 'react-dom';

const Body = () => {
  const [listRestaurents, setListRestaurents] = useState([]);
  const [newListRestaurents, setNewListRestaurents] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Whenever state variables changes, React triggers the Reconciliation cycle (Rerender the component).
  console.log('Rendered Value =>');
  console.log({ searchText });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5879534&lng=73.7372559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();

    console.log(json);
    setListRestaurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setNewListRestaurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterRes = (searchText, listRestaurents) => {
    const filteredList = listRestaurents.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredList;
  };

  // if (listRestaurents.length == 0) {
  //   return <Shimmer />;
  // }

  return listRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          className="search-bar-input"
          placeholder="Search Restaurent"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-bar-btn"
          onClick={() => {
            const data = filterRes(searchText, listRestaurents);
            // setListRestaurents(data);
            setNewListRestaurents(data);
          }}
        >
          Search
        </button>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              let filterList = listRestaurents.filter(
                (res) => res.info.avgRating > 4
              );
              setNewListRestaurents(filterList);
              console.log(listRestaurents);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
      </div>

      <div className="res-container">
        {newListRestaurents.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
