import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entity/dish/slice.js";
import {useRangeCounter} from "../counter/use-range-counter.jsx";
import {Counter} from "../counter/counter.jsx";
import {useRequest} from "../../redux/hooks/use-request.js";
import {getDishById} from "../../redux/entity/dish/get-dish-by-id.js";

export const DishContainer = ({dishId}) => {
    const dish = useSelector((state) => selectDishById(state, dishId));
    const id = dishId;
    const {value, increment, decrement} = useRangeCounter({id});

    const {isLoading, isError} = useRequest(getDishById, id);

    if (isLoading) {
        return "loading...";
    }

    if (isError || !dish) {
        return "Error";
    }

    const {name, price} = dish;

    return (
        <div>
            <h2>Блюдо {name}</h2>

            <div>
                {dish.description ? dish.description : "Описания блюда в разработке!"}
            </div>
            <div>Цена: {price} у.е.</div>
            <Counter
                value={value}
                increment={increment}
                decrement={decrement}
            />

        </div>
    );
}