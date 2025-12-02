import {StarRating} from "../star-rating/star-rating.jsx";

import styles from "./review.module.css";

export const Review = ({review}) => {
    const {user, text, rating} = review;

    return (
        <li>
            <div className={styles.root}>{user}:</div>
            <div>{text}</div>
            {StarRating(rating)}
        </li>
    )
};