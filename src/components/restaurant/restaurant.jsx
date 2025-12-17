import styles from "./restaurant.module.css";
import {RestaurantTabLink} from "./restaurant-tab-link.jsx";

export const Restaurant = ({name}) => {

    return (
        <div>
            <h2 className={styles.headerTitle}>Ресторан {name}</h2>
            <div className={styles.menuGroup}>
                <RestaurantTabLink path={'menu'} title='Меню'/>
                <RestaurantTabLink path={'reviews'} title='Отзывы'/>
            </div>
        </div>
    );
}