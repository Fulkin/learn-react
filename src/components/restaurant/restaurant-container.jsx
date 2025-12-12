import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entity/restaurant/slice.js";
import {Restaurant} from "./restaurant.jsx";

export const RestaurantContainer = ({restaurantId}) => {
    const restaurant = useSelector((state) => {

        return selectRestaurantById(state, restaurantId);
    });

    if (!restaurant) {
        return null;
    }

    const {name, menu, reviews} = restaurant;

    return (
        <Restaurant
            name={name}
            menu={menu}
            reviews={reviews}
        />
    );
};