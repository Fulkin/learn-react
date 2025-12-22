import {useSelector} from "react-redux";
import {selectUserById} from "../../redux/entity/user/slice.js";
import {useRequest} from "../../redux/hooks/use-request.js";
import {getUsers} from "../../redux/entity/user/get-users.js";

export const ReviewUser = ({userId}) => {
    const user = useSelector((state) =>
        selectUserById(state, userId)
    );

    const {isLoading, isError} = useRequest(getUsers);

    if (isLoading || !user) {
        return "loading...";
    }

    if (isError) {
        return "Error";
    }


    const {name} = user;

    return <div>{name}</div>
};