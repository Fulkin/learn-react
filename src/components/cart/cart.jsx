import {useSelector} from "react-redux";
import {selectCartItems} from "../../redux/cart/slice.js";

export const Cart = () => {
    const items = useSelector(selectCartItems);

    if (!items) {
        return <div>Корзина пустая.</div>;
    }

    return (
        <ul>
            {items.map(({id, amount}) => (
                    <li key={id}>
                        {id} - {amount}
                    </li>
                )
            )}
        </ul>);
}