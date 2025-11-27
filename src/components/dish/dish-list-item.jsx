import {Counter} from "../counter/counter.jsx";

export const DishListItem = ({menu}) => {
        const {name, price} = menu;

        return (
            <li className="menu-group">
                <span className="menu-item">{name}</span>
                <span className="price-item">{`${price} у.е.`}</span>
                <Counter/>
            </li>
        );
    }
;