import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entity/restaurant/slice.js";
import {Review} from "./review.jsx";
import {ReviewFrom} from "../review-form/review-form.jsx";
import {getReviewsRestaurantById} from "../../redux/entity/review/get-reviews-by-restaurant-id.js";
import {useRequest} from "../../redux/hooks/use-request.js";

export const ReviewContainer = ({restaurantId}) => {

    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    const {isLoading, isError} = useRequest(getReviewsRestaurantById, restaurantId);

    if (isLoading || !restaurant) {
        return "loading...";
    }

    if (isError) {
        return "Error";
    }

    const reviews = restaurant?.reviews ?? [];

    return (
        <>
            {reviews.length ? (
                <ul>
                    {
                        reviews.map((reviewId) => <Review key={reviewId} reviewId={reviewId}/>)
                    }
                </ul>) : (
                <div>Отзывов пока что нет.</div>
            )}
            <ReviewFrom/>
        </>
    );
}