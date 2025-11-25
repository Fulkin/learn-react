export const Menu = ({menu}) => {
    const {id, name, price} = menu;

    return (
        <li key={id} className="menu-group">
            <span className="menu-item">{name}</span>
            <span className="price-item">{`${price} у.е.`}</span>
            <button>+</button>
            <span className="counter">1</span>
            <button>-</button>
        </li>
    );
};