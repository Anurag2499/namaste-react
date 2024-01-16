import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import resList from '../utils/mockData';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { findDOMNode } from 'react-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import RestaurentCard from './RestaurantCard';
import { UserContext } from '../utils/UserContext.js';
import SearchSlider from './SearchSlider.js';

const Body = () => {
  const [listRestaurents, setListRestaurents] = useState([]);
  const [newListRestaurents, setNewListRestaurents] = useState([]);
  const [searchText, setSearchText] = useState('');

  const [ind, setInd] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  // here iam fetching the setUserName function which is initialized in the .provider in the APP.js
  const { loggedInUser, setUserName } = useContext(UserContext);

  // Whenever state variables changes, React triggers the Reconciliation cycle (Rerender the component).
  // console.log('Rendered Value =>');
  // console.log({ searchText });

  // this is the higher order component which is taking the component as input
  const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5879534&lng=73.7372559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    // console.log('json data -');
    // console.log(json);

    setListRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setNewListRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.slice(
        0,
        6
      )
    );
    // console.log('json data list of restuarents -');

    console.log(json);
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
    // console.log('moredata');

    setTimeout(async () => {
      if (newListRestaurents.length > 0) {
        setNewListRestaurents(
          newListRestaurents.concat(listRestaurents.slice(ind, ind + 4))
        );
        // console.log(ind + 'index');
        setInd(ind + 4);
        //     console.log("ckc");
        // var response = await fetch(
        //   // `https://kind-puce-bull-tie.cyclic.app/api/proxy/swiggy/dapi/restaurants/list/update`,
        //   {
        //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //     mode: 'cors', // no-cors, *cors, same-origin
        //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: 'same-origin', // include, *same-origin, omit
        //     headers: {
        //       'Content-Type': 'application/json',
        //       // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     redirect: 'follow', // manual, *follow, error
        //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //     body: JSON.stringify({
        //       lat: 18.5879534,
        //       lng: 73.7372559,
        //       nextOffset: 'COVCELQ4KICw+8yri/flGzCnEzgE',
        //       widgetOffset: {
        //         NewListingView_Topical_Fullbleed: '',
        //         NewListingView_category_bar_chicletranking_TwoRows: '',
        //         NewListingView_category_bar_chicletranking_TwoRows_Rendition:
        //           '',
        //         Restaurant_Group_WebView_SEO_PB_Theme: '',
        //         collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:
        //           '10',
        //         inlineFacetFilter: '',
        //         restaurantCountWidget: '',
        //       },
        //       filters: {},
        //       seoParams: {
        //         seoUrl: 'https://www.swiggy.com/',
        //         pageType: 'FOOD_HOMEPAGE',
        //         apiName: 'FoodHomePage',
        //       },
        //       page_type: 'DESKTOP_WEB_LISTING',
        //       _csrf: 'zppamymkwhYy-st2dmm28xdfMkUVU1lgvrd2qVxk',
        //     }), // body data type must match "Content-Type" header
        //   }
        // );
        // response = await response.json();

        // console.log('moredata', response);
      }
    }, 1000);
  };

  const isOnline = useOnlineStatus();
  if (isOnline === false) {
    return (
      <h1 className="isOnline">
        Please check your internet connection , you are offline.
      </h1>
    );
  }
  console.log(listRestaurents);
  return !listRestaurents || listRestaurents.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar p-3 m-3 ">
        {/* <div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-orange-100 border border-solid border-orange-200 shadow-md hover:bg-orange-200 mx-2 my-5 px-4 py-1 rounded-lg "
          >
            his is the current city
          </button>
          <SearchSlider isOpen={isOpen} setIsOpen={setIsOpen} />
        </div> */}
        <div className="flex justify-between">
          <div>
            <input
              type="text"
              className="search-bar-input border border-solid border-black mx-2 px-2 py-1 rounded-lg"
              placeholder="Search Restaurant"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="bg-orange-100 border border-solid border-orange-200 shadow-md hover:bg-orange-200 mx-2 px-4 py-1 rounded-lg"
              onClick={() => {
                const data = filterRes(searchText, listRestaurents);
                setNewListRestaurents(data);
              }}
            >
              Search
            </button>
          </div>

          {/* useContext input */}
          <div>
            <label className="font-bold text-lg">User :</label>
            <input
              type="text"
              className="border border-blue-300 border-solid ml-4"
              value={loggedInUser}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="filter">
          <button
            className="bg-orange-100 border border-solid border-orange-200 shadow-md hover:bg-orange-200 mx-2 my-5 px-4 py-1 rounded-lg"
            onClick={() => {
              let filterList = listRestaurents.filter(
                (res) => res.info.avgRating > 4
              );
              setNewListRestaurents(filterList);
              // console.log(listRestaurents);
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
          <div className="res-container   flex flex-wrap  mx-4 my-2">
            {newListRestaurents.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={'/restaurants/' + restaurant.info.id}
              >
                {restaurant.info.avgRating > 4.2 ? (
                  <RestaurentCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        }
      </InfiniteScroll>
    </div>
  );
};

export default Body;
