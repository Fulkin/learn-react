export const Tab = ({title, onClick, isActive}) => {
    /*
    className={
                    "restaurant-tab-button " +
                    (restaurant.id === activeId
                        ? "restaurant-tab-button-active"
                        : "restaurant-tab-button-unactive")
                }
     */
    return (
        <button disabled={isActive} onClick={onClick} className="restaurant-tab-button">
            {title}
        </button>
    )
}