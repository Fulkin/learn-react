import {useSelector} from "react-redux";
import {selectCartItems} from "../../redux/cart/slice.js";
import {CartItem} from "./cart-item.jsx";

export const Cart = () => {
    const items = useSelector(selectCartItems);
    console.log(items);

    if (!items || items.length === 0) {
        return <div>Корзина пустая.</div>;
    }

    return (
        <ul>
            {items.map(({id, amount}) => (
                    <li key={id}>
                        <CartItem id={id} amount={amount}/>
                    </li>
                )
            )}
        </ul>);
}