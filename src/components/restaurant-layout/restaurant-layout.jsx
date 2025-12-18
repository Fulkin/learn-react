import {Tabs} from "../tabs/tabs.jsx";
import {useSelector} from "react-redux";
import {Outlet} from "react-router";
import {selectRestaurantsIds} from "../../redux/entity/restaurant/slice.js";
import {RestaurantTabContainer} from "../restaurant-tab/restaurant-tab.jsx";

export const RestaurantLayout = () => {
    const restaurantIds = useSelector(selectRestaurantsIds);

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