import {useSelector} from "react-redux";
import {selectUserById} from "../../redux/entity/user/slice.js";

export const ReviewUser = ({userId}) => {
    const user = useSelector((state) =>
        selectUserById(state, userId)
    );
    const {name} = user;

    return <div>{name}</div>
};