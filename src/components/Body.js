import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { findDOMNode } from 'react-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [listRestaurents, setListRestaurents] = useState([]);
  const [newListRestaurents, setNewListRestaurents] = useState([]);
  const [searchText, setSearchText] = useState('');

  const [ind, setInd] = useState(6);
  const [hasMore, setHasMore] = useState(true);

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
    console.log('json data -');
    console.log(json);

    setListRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setNewListRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.slice(
        0,
        6
      )
    );
    console.log(listRestaurents);
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
  const loadNextData = () => {
    if (listRestaurents.length <= newListRestaurents.length) {
      setHasMore(false);
      return;
    }
    console.log('moredata');

    setTimeout(async () => {
      if (newListRestaurents.length > 0) {
        setNewListRestaurents(
          newListRestaurents.concat(listRestaurents.slice(ind, ind + 4))
        );
        console.log(ind + 'index');
        setInd(ind + 4);
        //     console.log("ckc");
        var response = await fetch(
          `https://kind-puce-bull-tie.cyclic.app/api/proxy/swiggy/dapi/restaurants/list/update`,
          {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
              lat: 18.5879534,
              lng: 73.7372559,
              nextOffset: 'COVCELQ4KICw+8yri/flGzCnEzgE',
              widgetOffset: {
                NewListingView_Topical_Fullbleed: '',
                NewListingView_category_bar_chicletranking_TwoRows: '',
                NewListingView_category_bar_chicletranking_TwoRows_Rendition:
                  '',
                Restaurant_Group_WebView_SEO_PB_Theme: '',
                collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:
                  '10',
                inlineFacetFilter: '',
                restaurantCountWidget: '',
              },
              filters: {},
              seoParams: {
                seoUrl: 'https://www.swiggy.com/',
                pageType: 'FOOD_HOMEPAGE',
                apiName: 'FoodHomePage',
              },
              page_type: 'DESKTOP_WEB_LISTING',
              _csrf: 'zppamymkwhYy-st2dmm28xdfMkUVU1lgvrd2qVxk',
            }), // body data type must match "Content-Type" header
          }
        );
        response = await response.json();

        console.log('moredata', response);
      }
    }, 1000);
  };

  console.log(listRestaurents);
  console.log('anmskfdsf');

  const isOnline = useOnlineStatus();
  if (isOnline === false) {
    return (
      <h1 className="isOnline">
        Please check your internet connection , you are offline.
      </h1>
    );
  }

  return listRestaurents.length == 0 ? (
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

      <InfiniteScroll
        dataLength={newListRestaurents.length} //This is important field to render the next data
        next={loadNextData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
      >
        {
          <div className="res-container">
            {newListRestaurents.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={'/restaurants/' + restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
          </div>
        }
      </InfiniteScroll>
    </div>
  );
};

export default Body;
