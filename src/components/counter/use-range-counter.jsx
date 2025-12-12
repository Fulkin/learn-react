import {useDispatch, useSelector} from "react-redux";
import {addToCart, deleteFromCart, selectAmountById} from "../../redux/cart/slice.js";

export const useRangeCounter = ({id}) => {
    const dispatch = useDispatch();
    const amount = useSelector((state) => selectAmountById(state, id));

    const increment = () => dispatch(addToCart(id));
    const decrement = () => dispatch(deleteFromCart(id));

    return {
        value: amount || 0,
        increment,
        decrement
    };
}