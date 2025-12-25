import {selectCartItemsIds} from "../../redux/cart/slice.js";
import {useSelector} from "react-redux";
import {Cart} from "./cart.jsx";
import {useContext, useState} from "react";
import {UserContext} from "../user-context/index.js";
import {Modal} from "../modal/modal.jsx";
import {Button} from "../button/button.jsx";

export const CartContainer = () => {
    const user = useContext(UserContext);
    const itemsIds = useSelector(selectCartItemsIds);
    const [isVisible, setIsVisible] = useState(false);

    if (!user) {
        return null;
    }

    return (
        <>
            <Button title="Cart" onClick={() => setIsVisible(true)}/>
            <p/>
            {isVisible &&
                <Modal onClose={() => setIsVisible(false)}>
                    {
                        !itemsIds || itemsIds.length === 0 ?
                            <div>Корзина пустая.</div> :
                            <Cart itemsIds={itemsIds}/>
                    }
                </Modal>
            }
        </>);
};