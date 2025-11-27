import {StarRating} from "../star-rating/star-rating.jsx";

export const Review = ({review}) => {
    const {user, text, rating} = review;

    return (
        <li>
            <div className="user-name">{user}:</div>
            <div>{text}</div>
            {StarRating(rating)}
        </li>
    )
};