import {StarRating} from "../star-rating/star-rating.jsx";

export const Review = ({review}) => {
    const {id, user, text, rating} = review;

    return (
        <li key={id}>
            <div className="user-name">{user}:</div>
            <div>{text}</div>
            {StarRating(rating)}
        </li>
    )
};