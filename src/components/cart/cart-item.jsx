import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entity/dish/slice.js";

export const CartItem = ({id, amount}) => {
    const dish = useSelector((state) => selectDishById(state, id));

    return (
        <div>{dish.name} - {amount}</div>
    )
}