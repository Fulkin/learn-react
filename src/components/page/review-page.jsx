import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entity/restaurant/slice.js";
import {useParams} from "react-router";
import {Review} from "../review/review.jsx";
import {ReviewFrom} from "../review-form/review-form.jsx";

export const ReviewPage = () => {

    const {restaurantId} = useParams()
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

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
};