import {DishListItem} from "../dish/dish-list-item.jsx";
import {Review} from "../review/review.jsx";
import {ReviewFrom} from "../review-form/review-form.jsx";
import {Counter} from "../counter/counter.jsx";
import {useRangeCounter} from "../counter/use-range-counter.jsx";

import styles from "./restaurant.module.css";

export const Restaurant = ({restaurant}) => {

    const {id, name, menu, reviews} = restaurant;
    const {count, increment, decrement} = useRangeCounter({min: 0, max: 999})

    return (
        <div key={id} className={styles.menu}>
            <h2 className={styles.restaurant_name}>{name}</h2>
            <h3 className={styles.header_title}>Меню</h3>
            {menu.length ?
                (<ul>
                    {menu.map((menu) => (
                        <DishListItem key={menu.id} menu={menu}/>
                    ))}
                </ul>) : (
                    <div>Блюд в меню нет в наличии.</div>
                )
            }
            <p/>
            <h3 className={styles.header_title}>Отзывы</h3>
            {reviews.length ? (<ul>
                {reviews.map((review) => (
                    <Review key={review.id} review={review}/>
                ))}
            </ul>) : (
                <div>Отзывов пока что нет.</div>
            )}
            <ReviewFrom/>
        </div>
    );
}