import {CartItemContainer} from "../cart-item/cart-item-container.jsx";

export const Cart = ({itemsIds}) => {

    return (
        <div>
            <h3>Cart</h3>
            <ul>
                {itemsIds.map((id) => (
                        <li key={id}>
                            <CartItemContainer id={id}/>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}