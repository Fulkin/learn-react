import {useGetReviewsByRestaurantIdQuery} from "../../redux/services/api/index.js";
import {Reviews} from "../reviews/reviews.jsx";

export const ReviewContainer = ({restaurantId}) => {
    const {
        data: reviews,
        isLoading,
        isError
    } = useGetReviewsByRestaurantIdQuery(restaurantId);

    if (isLoading) {
        return "loading...";
    }

    if (isError) {
        return "Error";
    }

    return (
        reviews?.length ?
            <Reviews reviews={reviews}/> :
            <div>Отзывов пока что нет.</div>
    );
}