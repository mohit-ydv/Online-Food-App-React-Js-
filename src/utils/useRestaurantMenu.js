import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0330488&lng=73.0296625&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResInfo(json.data)
  };

  return resInfo;
};

export default useRestaurantMenu;
