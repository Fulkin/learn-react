import {StarRating} from "../star-rating/star-rating.jsx";
import {useSelector} from "react-redux";
import {selectReviewById} from "../../redux/entity/review/slice.js";
import {ReviewUser} from "../review-user/review-user.jsx";
import {useRequest} from "../../redux/hooks/use-request.js";
import {getReviewById} from "../../redux/entity/review/get-review-by-id.js";

export const Review = ({reviewId}) => {
    const review = useSelector((state) =>
        selectReviewById(state, reviewId)
    );
    const {isLoading, isError} = useRequest(getReviewById, reviewId);
    if (isLoading) {
        return "loading...";
    }

    if (isError || !review) {
        return "Error";
    }

    const {userId, text, rating} = review;

    return (
        <li>
            <ReviewUser userId={userId}/>
            <div>{text}</div>
            <StarRating rating={rating}/>
        </li>
    )
};