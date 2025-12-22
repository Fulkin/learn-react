import {Tabs} from "../tabs/tabs.jsx";
import {useSelector} from "react-redux";
import {Outlet} from "react-router";
import {selectRestaurantsIds} from "../../redux/entity/restaurant/slice.js";
import {RestaurantTabContainer} from "../restaurant-tab/restaurant-tab.jsx";
import {getRestaurants} from "../../redux/entity/restaurant/get-restaurants.js";
import {useRequest} from "../../redux/hooks/use-request.js";

export const RestaurantsPage = () => {
    const restaurantIds = useSelector(selectRestaurantsIds);

    const {isLoading, isError} = useRequest(getRestaurants);

    if (isLoading) {
        return "loading...";
    }

    if (isError || !restaurantIds.length) {
        return "Error";
    }

    return (
        <div>
            <h1>
                Restaurant Page
            </h1>

            <Tabs>
                {restaurantIds.map((id) => (
                    <RestaurantTabContainer
                        key={id}
                        id={id}
                    />
                ))}
            </Tabs>

            <Outlet/>
        </div>
    );
};