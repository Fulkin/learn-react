import {StarRating} from "../star-rating/star-rating.jsx";
import {useSelector} from "react-redux";
import {selectReviewById} from "../../redux/entity/review/slice.js";
import {ReviewUser} from "../review-user/review-user.jsx";
import {useRequest} from "../../redux/hooks/use-request.js";
import {getReviewById} from "../../redux/entity/review/get-review-by-id.js";
import {getUsers} from "../../redux/entity/user/get-users.js";
import {REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED} from "../redux/constants.js";

export const Review = ({reviewId}) => {
    const review = useSelector((state) =>
        selectReviewById(state, reviewId)
    );
    const {requestStatus: reviewStatus} = useRequest(getReviewById, reviewId);

    const {requestStatus: userStatus} = useRequest(getUsers);

    const isLoading =
        reviewStatus === REQUEST_STATUS_PENDING ||
        userStatus === REQUEST_STATUS_PENDING;

    const isError =
        reviewStatus === REQUEST_STATUS_REJECTED ||
        userStatus === REQUEST_STATUS_REJECTED;

    if (isLoading || !review) {
        return "loading...";
    }

    if (isError) {
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