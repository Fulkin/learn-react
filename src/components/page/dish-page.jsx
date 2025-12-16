import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entity/dish/slice.js";
import {useRangeCounter} from "../counter/use-range-counter.jsx";
import {Counter} from "../counter/counter.jsx";

export const DishPage = () => {
    const {dishId} = useParams();
    const dish = useSelector((state) => selectDishById(state, dishId));
    const {name, price} = dish;
    const id = dishId;

    const {value, increment, decrement} = useRangeCounter({id});

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
};