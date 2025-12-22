import {Outlet} from "react-router";

export const DishLayout = () => {

    return (
        <div>
            <h1>Dish page</h1>
            <Outlet/>
        </div>
    );
};