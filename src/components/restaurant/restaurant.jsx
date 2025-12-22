import styles from "./restaurant.module.css";
import {RestaurantTabLink} from "./restaurant-tab-link.jsx";

export const Restaurant = ({name, description}) => {

    return (
        <div>
            <h2 className={styles.headerTitle}>Ресторан {name}</h2>
            <div className={styles.menuGroup}>
                <div>Описание:</div>
                <div>{description ? description : `Описание ресторана ${name} в разработке!`}</div>
            </div>
            <div className={styles.menuGroup}>
                <RestaurantTabLink path={'menu'} title='Меню'/>
                <RestaurantTabLink path={'reviews'} title='Отзывы'/>
            </div>
        </div>
    );
}