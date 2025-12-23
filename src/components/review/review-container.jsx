import {useGetReviewsByRestaurantIdQuery, useGetUsersQuery} from "../../redux/services/api/index.js";
import {Reviews} from "../reviews/reviews.jsx";

export const ReviewContainer = ({restaurantId}) => {
    const {
        data: reviews,
        isLoading: isLoadingReview,
        isError: isErrorReview
    } = useGetReviewsByRestaurantIdQuery(restaurantId);

    const {isLoading: isLoadingUser, isError: isErrorUser} = useGetUsersQuery();

    if (isLoadingReview || isLoadingUser) {
        return "loading...";
    }

    if (isErrorReview || isErrorUser) {
        return "Error";
    }

    return (
        reviews?.length ?
            <Reviews reviews={reviews}/> :
            <div>Отзывов пока что нет.</div>
    );
}