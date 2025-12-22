import {useParams} from "react-router";
import {MenuContainer} from "../menu/menu-container.jsx";

export const MenuPage = () => {
    const {restaurantId} = useParams()

    return <MenuContainer restaurantId={restaurantId}/>
};