import {selectCartItemsIds} from "../../redux/cart/slice.js";
import {useSelector} from "react-redux";
import {Cart} from "./cart.jsx";

export const CartContainer = () => {
    const itemsIds = useSelector(selectCartItemsIds);

    if (!itemsIds || itemsIds.length === 0) {
        return <div>Корзина пустая.</div>;
    }

    return <Cart itemsIds={itemsIds}/>;
};