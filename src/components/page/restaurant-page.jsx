import {useParams} from "react-router";
import {RestaurantContainer} from "../restaurant/restaurant-container.jsx";

export const RestaurantPage = () => {
    const {restaurantId} = useParams();
    console.log(restaurantId);

    return <RestaurantContainer id={restaurantId}/>;
};