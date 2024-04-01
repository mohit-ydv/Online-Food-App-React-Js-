import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const {
    resList,
    filterList,
    searchText,
    setSearchText,
    searchRestaurants,
    filterTopRatedRestaurants,
  } = useRestaurantList();

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  if (onlineStatus === false)
    return <h1>Looks like you're offline. Please check your connection!!</h1>;

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid = "searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={searchRestaurants}>Search</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-50 rounded-lg" onClick={filterTopRatedRestaurants}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap mx-4">
        {filterList.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {/**If the restaurant has rating of 5K+, then add a promoted label to it */
              res.info.totalRatingsString === '5K+' ? <RestaurantCardPromoted resData={res} /> : <RestaurantCard resData={res} />
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
