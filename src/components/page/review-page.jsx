import {useParams} from "react-router";
import {ReviewContainer} from "../review/review-container.jsx";

export const ReviewPage = () => {
    const {restaurantId} = useParams()

    return <ReviewContainer restaurantId={restaurantId}/>;
};