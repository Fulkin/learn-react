import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entity/restaurant/slice.js";
import {DishListItem} from "../dish/dish-list-item.jsx";
import {getDishesByRestaurantId} from "../../redux/entity/dish/get-dishes-by-restaurant-id.js";
import {useRequest} from "../../redux/hooks/use-request.js";

export const MenuContainer = ({restaurantId}) => {
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

    const {isLoading, isError} = useRequest(getDishesByRestaurantId);

    if (isLoading) {
        return "loading...";
    }

    if (isError || !restaurant) {
        return "Error";
    }

    const menu = restaurant?.menu ?? [];

    return (
        <>
            {
                menu.length ?
                    (<ul>
                        {
                            menu.map((dishId) => <DishListItem key={dishId} dishId={dishId}/>)
                        }
                    </ul>) : (
                        <div>Блюд в меню нет в наличии.</div>
                    )
            }
        </>
    );
}