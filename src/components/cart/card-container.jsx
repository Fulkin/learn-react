import {selectCartItemsIds} from "../../redux/cart/slice.js";
import {useSelector} from "react-redux";
import {Cart} from "./cart.jsx";
import {useContext} from "react";
import {UserContext} from "../user-context/index.js";

export const CartContainer = () => {
    const user = useContext(UserContext);
    const itemsIds = useSelector(selectCartItemsIds);

    if (!user) {
        return null;
    }

    if (!itemsIds || itemsIds.length === 0) {
        return <div>Корзина пустая.</div>;
    }

    return <Cart itemsIds={itemsIds}/>;
};