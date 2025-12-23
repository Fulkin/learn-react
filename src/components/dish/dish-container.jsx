import {useRangeCounter} from "../counter/use-range-counter.jsx";
import {Counter} from "../counter/counter.jsx";
import {useGetDishesByIdQuery} from "../../redux/services/api/index.js";

export const DishContainer = ({dishId}) => {
    const {data, isLoading, isError} = useGetDishesByIdQuery(dishId);
    const id = dishId;
    const {value, increment, decrement} = useRangeCounter({id});

    if (isLoading) {
        return "loading...";
    }

    if (isError) {
        return "Error";
    }

    const {name, price, description} = data;

    return (
        <div>
            <h2>Блюдо {name}</h2>

            <div>
                {description ? description : "Описания блюда в разработке!"}
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