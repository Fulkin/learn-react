import {useParams} from "react-router";
import {DishContainer} from "../dish/dish-container.jsx";

export const DishPage = () => {
    const {dishId} = useParams();

    return <DishContainer dishId={dishId}/>;
};