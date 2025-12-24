import {useSelector} from "react-redux";
import {selectAmountById} from "../../redux/cart/slice.js";
import {CartItem} from "./cart-item.jsx";
import {useGetDishesByIdQuery} from "../../redux/services/api/index.js";

export const CartItemContainer = ({id}) => {
    //const dish = useSelector((state) => selectDishById(state, id));
    const {data: dish, isLoading, isError} = useGetDishesByIdQuery(id);
    const amount = useSelector((state) => selectAmountById(state, id));

    if (isLoading) {
        return "loading...";
    }

    if (isError) {
        return "Error";
    }


    console.log("dish", dish);
    console.log("amount", amount);

    if (!dish) {
        return null;
    }

    return (
        <CartItem dishId={id} dishName={dish.name} amount={amount}/>
    )
}