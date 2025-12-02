import {useState} from "react";
import {Restaurant} from "./restaurant.jsx";
import {Tab} from "../tab/tab.jsx";

import styles from "./restaurant.module.css";

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
            <div className={styles.menu_group}>
                {restaurants.map(({id, name}) => (
                    <Tab key={id}
                         title={name}
                         onClick={() => handleTabClick(id)}
                         isActive={id === activeId}
                    />
                ))}
            </div>

            <div>
                <Restaurant key={activeRestaurant.id}
                            restaurant={activeRestaurant}/>
            </div>
        </div>
    );
};