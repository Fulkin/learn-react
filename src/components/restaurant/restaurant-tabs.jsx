import {useState} from "react";
import {Restaurant} from "./restaurant.jsx";

export const RestaurantTabs = ({restaurants}) => {

    const [activeId, setActiveId] = useState(restaurants[0].id);

    const handleTabClick = (id) => {
        if (id !== activeId) {
            setActiveId(id);
        }
    };

    const activeRestaurant = restaurants.find(r => r.id === activeId);

    return (
        <div>
            <div className="menu-group">
                {restaurants.map(restaurant => (
                    <button
                        key={restaurant.id}
                        onClick={() => handleTabClick(restaurant.id)}
                        className={
                            "restaurant-tab-button " +
                            (restaurant.id === activeId
                                ? "restaurant-tab-button-active"
                                : "restaurant-tab-button-unactive")
                        }
                    >
                        {restaurant.name}
                    </button>
                ))}
            </div>

            <div>
                <Restaurant key={activeRestaurant.id}
                            restaurant={activeRestaurant}/>
            </div>
        </div>
    );
};