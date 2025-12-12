import {DishListItem} from "../dish/dish-list-item.jsx";
import {Review} from "../review/review.jsx";
import {ReviewFrom} from "../review-form/review-form.jsx";

import styles from "./restaurant.module.css";

export const Restaurant = ({name, menu, reviews}) => {
    return (
        <div className={styles.menu}>
            <h2 className={styles.restaurantName}>{name}</h2>
            <h3 className={styles.headerTitle}>Меню</h3>
            {menu.length ?
                (<ul>
                    {
                        menu.map((dishId) => <DishListItem key={dishId} dishId={dishId}/>)
                    }
                </ul>) : (
                    <div>Блюд в меню нет в наличии.</div>
                )
            }
            <p/>
            <h3 className={styles.headerTitle}>Отзывы</h3>
            {reviews.length ? (
                <ul>
                    {
                        reviews.map((reviewId) => <Review key={reviewId} reviewId={reviewId}/>)
                    }
                </ul>) : (
                <div>Отзывов пока что нет.</div>
            )}
            <ReviewFrom/>
        </div>
    );
}