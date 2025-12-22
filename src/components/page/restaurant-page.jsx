import {useParams} from "react-router";
import {RestaurantContainer} from "../restaurant/restaurant-container.jsx";

export const RestaurantPage = () => {
    const {restaurantId} = useParams();

    return <RestaurantContainer restaurantId={restaurantId}/>;
};