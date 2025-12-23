import {StarRating} from "../star-rating/star-rating.jsx";
import {useGetUsersQuery} from "../../redux/services/api/index.js";

export const Review = ({userId, text, rating}) => {
    const {data: user} = useGetUsersQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            data: result.data?.find(({id}) => userId === id),
        }),
    });

    if (!user?.name) {
        return null;
    }

    return (
        <li>
            <div>{user.name}</div>
            <div>{text}</div>
            <StarRating rating={rating}/>
        </li>
    )
};