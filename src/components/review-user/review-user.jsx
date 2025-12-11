import {useSelector} from "react-redux";
import {selectUserById} from "../../redux/entity/user/slice.js";

export const ReviewUser = ({userId}) => {
    console.log("reviewID", userId);
    const user = useSelector((state) =>
        selectUserById(state, userId)
    );
    console.log("user", user);

    const {name} = user;

    return <div>{name}</div>
};