import {DishListItem} from "../dish/dish-list-item.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entity/restaurant/slice.js";
import {useParams} from "react-router";

export const MenuPage = () => {
    const {restaurantId} = useParams()
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

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
};