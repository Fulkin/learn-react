import {selectRestaurantById} from "../../redux/entity/restaurant/slice.js";
import {useSelector} from "react-redux";
import {Button} from "../button/button.jsx";

export const RestaurantTab = ({restaurantId, ...props}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

    if (!restaurant) {
        return null;
    }

    return <Button {...props} title={restaurant.name}/>
};