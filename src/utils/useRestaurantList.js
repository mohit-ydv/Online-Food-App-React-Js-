import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [resList, setResList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0330488&lng=73.0296625&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      { mode: "cors" }
    );
    const json = await data.json();
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log('List : ', json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const searchRestaurants = () => {
    const searchList = resList.filter((list) =>
      list.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterList(searchList);
  };

  const filterTopRatedRestaurants = () => {
    const filteredList = resList.filter((res) => res.info.avgRatingString > 4.2);
    setFilterList(filteredList);
  };
  return {
    resList,
    filterList,
    searchText,
    setSearchText,
    searchRestaurants,
    filterTopRatedRestaurants,
  };
};

export default useRestaurantList;
