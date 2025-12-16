import {Outlet, useParams} from "react-router";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entity/restaurant/slice.js";
import {Restaurant} from "../restaurant/restaurant.jsx";

export const RestaurantPage = () => {
    const {restaurantId} = useParams();
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

    if (!restaurant) {
        return null;
    }

    return (
        <div>
            <Restaurant name={restaurant.name}/>
            <Outlet/>
        </div>
    );
};