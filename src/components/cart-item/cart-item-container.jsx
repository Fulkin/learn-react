import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entity/dish/slice.js";
import {selectAmountById} from "../../redux/cart/slice.js";
import {CartItem} from "./cart-item.jsx";

export const CartItemContainer = ({id}) => {
    const dish = useSelector((state) => selectDishById(state, id));
    const amount = useSelector((state) => selectAmountById(state, id));

    if (!dish) {
        return null;
    }

    return (
        <CartItem dishId={id} dishName={dish.name} amount={amount}/>
    )
}