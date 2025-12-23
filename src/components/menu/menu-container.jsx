import {DishListItem} from "../dish/dish-list-item.jsx";
import {useGetDishesByRestaurantIdQuery} from "../../redux/services/api/index.js";

export const MenuContainer = ({restaurantId}) => {
    const {data, isLoading, isError} = useGetDishesByRestaurantIdQuery(restaurantId);

    if (isLoading) {
        return "loading...";
    }

    if (isError) {
        return "Error";
    }
    return (
        <>
            {
                data.length ?
                    (<ul>
                        {
                            data.map(({id, name, price}) =>
                                <DishListItem
                                    key={id}
                                    id={id}
                                    name={name}
                                    price={price}
                                />
                            )
                        }
                    </ul>) : (
                        <div>Блюд в меню нет в наличии.</div>
                    )
            }
        </>
    );
}