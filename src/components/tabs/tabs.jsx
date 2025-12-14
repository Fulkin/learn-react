import {useState} from "react";
import styles from "./tabs.module.css";
import {RestaurantContainer} from "../restaurant/restaurant-container.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantsIds} from "../../redux/entity/restaurant/slice.js";
import {RestaurantTab} from "../restaurant-tab/restaurant-tab.jsx";

export const Tabs = () => {
    const restaurantsIds = useSelector(selectRestaurantsIds);

    const [activeId, setActiveId] = useState(restaurantsIds[0]);

    const handleTabClick = (id) => {
        if (id !== activeId) {
            setActiveId(id);
        }
    };

    return (
        <div>
            <div className={styles.navigation}>Navigation</div>
            <div className={styles.menuGroup}>
                {restaurantsIds.map((id) => (
                    <RestaurantTab
                        key={id}
                        restaurantId={id}
                        onClick={() => handleTabClick(id)}
                        disabled={id === activeId}
                        type="tab"
                    />
                ))}
            </div>
            {activeId && (
                <RestaurantContainer
                    key={activeId}
                    restaurantId={activeId}/>
            )}
        </div>
    );
};