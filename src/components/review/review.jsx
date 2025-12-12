import {StarRating} from "../star-rating/star-rating.jsx";
import {useSelector} from "react-redux";
import {selectReviewById} from "../../redux/entity/review/slice.js";
import {ReviewUser} from "../review-user/review-user.jsx";

export const Review = ({reviewId}) => {
    const review = useSelector((state) =>
        selectReviewById(state, reviewId)
    );
    const {userId, text, rating} = review;

    return (
        <li>
            <ReviewUser userId={userId}/>
            <div>{text}</div>
            <StarRating rating={rating}/>
        </li>
    )
};