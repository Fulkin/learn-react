import {restaurants} from '/materials/mock.js';
import {Layout} from "../layout/layout.jsx";
import {RestaurantTabs} from "../restaurant/restaurant-tabs.jsx";

export const App = ({title}) => {
    return (
        <>
            <h1 className="restaurant-name">{title}</h1>
            <Layout>
                <RestaurantTabs restaurants={restaurants} />
            </Layout>
        </>
    )
}