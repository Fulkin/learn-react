import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entity/restaurant/slice.js";
import {Restaurant} from "./restaurant.jsx";
import {Outlet} from "react-router";
import {useRequest} from "../../redux/hooks/use-request.js";
import {getRestaurantById} from "../../redux/entity/restaurant/get-restaurant-by-id.js";

export const RestaurantContainer = ({restaurantId}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

    const {isLoading, isError} = useRequest(getRestaurantById, restaurantId);

    if (isLoading || !restaurant) {
        return "loading...";
    }

    if (isError) {
        return "Error";
    }

    const {name, description} = restaurant;

    return (
        <div>
            <Restaurant name={name} description={description}/>
            <Outlet/>
        </div>
    );
};