import {useState} from "react";
import {Restaurant} from "./restaurant.jsx";

import styles from "./restaurant.module.css";
import {Button} from "../button/button.jsx";

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
            <div className={styles.navigation}>Navigation</div>
            <div className={styles.menuGroup}>
                {restaurants.map(({id, name}) => (
                    <Button key={id}
                            title={name}
                            onClick={() => handleTabClick(id)}
                            disabled={id === activeId}
                            type="tab"
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