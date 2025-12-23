import {Restaurant} from "./restaurant.jsx";
import {Outlet} from "react-router";
import {useAddReviewMutation, useGetRestaurantByIdQuery} from "../../redux/services/api/index.js";
import {ReviewFrom} from "../review-form/review-form.jsx";
import {useContext} from "react";
import {UserContext} from "../user-context/index.js";

export const RestaurantContainer = ({restaurantId}) => {
    const user = useContext(UserContext);
    const {data, isLoading, isError} = useGetRestaurantByIdQuery(restaurantId);
    const [addReview, {isLoading: isAddReviewLoading}] = useAddReviewMutation();
    const handleAddReview = (review) =>
        addReview({restaurantId, review: {...review, userId: user.id}});

    if (isLoading) {
        return "loading...";
    }

    if (isError) {
        return "Error";
    }

    const {name, description} = data;

    return (
        <div>
            <Restaurant name={name} description={description}/>
            <Outlet/>
            <ReviewFrom onSubmit={handleAddReview} isSubmitDisabled={isAddReviewLoading}/>
        </div>
    );
};